<?php
/**
 * WP GraphQL settings.
 *
 * @see https://wordpress.org/plugins/wp-graphql/
 * @author WebDevStudios
 * @package WDS_Headless_GravityForms
 * @since 1.0.0
 */

namespace WDS_Headless_GravityForms;

use GFAsyncUpload;
use GFCommon;
use GFForms;
use GFFormsModel;
use GraphQL\Type\Definition\ResolveInfo;
use WPGraphQLGravityForms\Utils\GFUtils;

/**
 * Add file upload field to GF FieldValuesInput.
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param array $fields The array of fields for the FieldValuesInput object.
 * @return array        The filtered array of fields for the FieldValuesInput object.
 */
function add_file_upload_field( array $fields ) {
	$fields['fileUploadValues'] = [
		'type'        => 'Upload',
		'description' => esc_html__( 'The form field values for FileUpload fields.', 'wds-headless-gravityforms' ),
	];

	return $fields;
}
add_filter( 'graphql_fieldValuesInput_fields', __NAMESPACE__ . '\add_file_upload_field' );

/**
 * Extend WP GraphQL Gravity Forms form submission resolver to allow file uploads.
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param array $fields Root mutation fields.
 * @return array        Modified root mutation fields.
 */
function extend_gf_submission_resolver( array $fields ) {
	// Retrieve original mutation resolver.
	$resolver = $fields['submitGravityFormsForm']['resolve'];

	// Create new wrapper resolver to handle file uploads.
	$new_resolver = function( $root, $args, $context, ResolveInfo $info ) use ( $resolver ) {
		$form_id = $args['input']['formId'] ?? 0;

		if ( ! function_exists( 'wp_handle_sideload' ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
		}

		// Track file upload fields.
		$file_uploads = [];

		// Iterate through field values to process file uploads.
		$args['input']['fieldValues'] = array_map(
			function( $field ) use ( &$file_uploads, $form_id ) {
				// Skip field if not a file upload.
				if ( ! array_key_exists( 'fileUploadValues', $field ) ) {
					return $field;
				}

				// Retrieve file data.
				$file = $field['fileUploadValues'];

				// Determine target uploads dir.
				$target = gravity_forms_upload_dir( $form_id );

				// Upload file and retrieve upload data.
				$upload = handle_file_upload( $file, $target );

				// If error occurs, skip field.
				if ( ! $upload ) {
					$field['value'] = '';

					return $field;
				}

				// Save upload URL to field value to bypass WP GraphQL GF errors.
				$field['value'] = $upload['url'];

				// Add updated field data to file upload fields array.
				$file_uploads[] = $field;

				return $field;
			},
			$args['input']['fieldValues'] ?? []
		);

		// Call original resolver function and retrieve form entry ID.
		$response = call_user_func( $resolver, $root, $args, $context, $info );
		$entry_id = $response['entryId'] ?? null;

		// Check for errors and entry ID.
		if ( $response['errors'] || ! $entry_id ) {
			return $response;
		}

		$entry = GFUtils::get_entry( $entry_id );
		$form  = GFFormsModel::get_form_meta( $form_id );

		global $wpdb;

		// Add file upload values back into form entry (WP GraphQL GF strips them out).
		array_map(
			function( $field ) use ( $form, $entry, $wpdb ) {
				// Skip if no value set.
				if ( ! $field['value'] ) {
					return;
				}

				$entry_id = $entry['id'];
				$field_id = $field['id'];

				// Retrieve entry meta ID for file upload field.
				$entry_meta_table_name = GFFormsModel::get_entry_meta_table_name();

				// phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$entry_meta_id = $wpdb->get_var( $wpdb->prepare( "SELECT id FROM {$entry_meta_table_name} WHERE entry_id=%d AND meta_key = %s", $entry_id, $field_id ) );

				// Update field with file upload data.
				GFFormsModel::update_entry_field_value( $form, $entry, $field, $entry_meta_id, $field_id, $field['value'] );
			},
			$file_uploads
		);

		return $response;
	};

	// Override mutation resolver.
	$fields['submitGravityFormsForm']['resolve'] = $new_resolver;

	return $fields;
}
add_filter( 'graphql_rootMutation_fields', __NAMESPACE__ . '\extend_gf_submission_resolver', 20 );

/**
 * Handle custom file upload.
 *
 * This mimics WP Core upload functionality but allows for uploading file to a custom directory rather than the standard WP uploads dir.
 *
 * @see https://developer.wordpress.org/reference/functions/_wp_handle_upload/
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param array $file   File data to upload.
 * @param array $target Target upload directory; WP uploads dir will be used if none provided.
 * @return array        Uploaded file data.
 */
function handle_file_upload( array $file, array $target = null ) {
	// Default to uploads dir if alternative not provided.
	$target = $target ?? wp_upload_dir();

	// Check if filetype & ext are valid.
	$wp_filetype     = wp_check_filetype_and_ext( $file['tmp_name'], $file['name'] );
	$ext             = empty( $wp_filetype['ext'] ) ? '' : $wp_filetype['ext'];
	$type            = empty( $wp_filetype['type'] ) ? '' : $wp_filetype['type'];
	$proper_filename = empty( $wp_filetype['proper_filename'] ) ? '' : $wp_filetype['proper_filename'];

	// Check to see if wp_check_filetype_and_ext() determined the filename was incorrect.
	if ( $proper_filename ) {
		$file['name'] = $proper_filename;
	}

	// Return error if file type not allowed.
	if ( ( ! $type || ! $ext ) && ! current_user_can( 'unfiltered_upload' ) ) {
		return call_user_func_array( 'wp_handle_upload_error', array( &$file, esc_html__( 'Sorry, this file type is not permitted for security reasons.', 'wds-headless-gravityforms' ) ) );
	}

	$type = ! $type ? $file['type'] : $type;

	$filename = wp_unique_filename( $target['path'], $file['name'] );

	// Move the file to the GF uploads dir.
	$new_file = $target['path'] . "/{$filename}";

	// Use copy and unlink because rename breaks streams.
	// phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged -- duplicating default WP Core functionality.
	$move_new_file = @copy( $file['tmp_name'], $new_file );
	unlink( $file['tmp_name'] );

	if ( ! $move_new_file ) {
		$field['value'] = '';

		return $field;
	}

	// Set correct file permissions.
	$stat  = stat( dirname( $new_file ) );
	$perms = $stat['mode'] & 0000666;
	chmod( $new_file, $perms );

	// Compute the URL.
	$url = $target['url'] . "/{$filename}";

	$upload = [
		'file' => $new_file,
		'url'  => $url,
		'type' => $type,
	];

	return $upload;
}

/**
 * Determine appropriate GF form-specific uploads dir config and ensure folders are initiated as needed.
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param int $form_id GF form ID.
 * @return array       GF uploads dir config.
 */
function gravity_forms_upload_dir( int $form_id ) {
	// Determine YYYY/MM values.
	$time = current_time( 'mysql' );
	$y    = substr( $time, 0, 4 );
	$m    = substr( $time, 5, 2 );

	$date_dir = DIRECTORY_SEPARATOR . $y . DIRECTORY_SEPARATOR . $m;

	// Determine upload directory.
	$target_path = GFFormsModel::get_upload_path( $form_id ) . $date_dir;
	$target_url  = GFFormsModel::get_upload_url( $form_id ) . $date_dir;

	// Create upload directory if doesn't exist.
	if ( ! is_dir( $target_path ) ) {
		if ( ! wp_mkdir_p( $target_path ) ) {
			GFCommon::log_debug( "GFAsyncUpload::upload(): Couldn't create the upload folder: " . $target_path );
			GFAsyncUpload::die_error( 500, __( 'Failed to upload file.', 'wds-headless-gravityforms' ) );
		}
	}

	// Add index.html files to upload directory subfolders.
	if ( ! file_exists( GFFormsModel::get_upload_root() . '/index.html' ) ) {
		GFForms::add_security_files();
	} elseif ( ! file_exists( GFFormsModel::get_upload_path( $form_id ) . '/index.html' ) ) {
		GFCommon::recursive_add_index_file( GFFormsModel::get_upload_path( $form_id ) );
	} elseif ( ! file_exists( GFFormsModel::get_upload_path( $form_id ) . "/$y/index.html" ) ) {
		GFCommon::recursive_add_index_file( GFFormsModel::get_upload_path( $form_id ) . "/$y" );
	} else {
		GFCommon::recursive_add_index_file( GFFormsModel::get_upload_path( $form_id ) . "/$y/$m" );
	}

	return [
		'path'    => $target_path,
		'url'     => $target_url,
		'subdir'  => $date_dir,
		'basedir' => untrailingslashit( GFFormsModel::get_upload_root() ),
		'baseurl' => untrailingslashit( GFFormsModel::get_upload_url_root() ),
	];
}
