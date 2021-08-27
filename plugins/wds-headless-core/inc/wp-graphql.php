<?php
/**
 * WP GraphQL settings.
 *
 * @see https://wordpress.org/plugins/wp-graphql/
 * @author WebDevStudios
 * @package WDS_Headless_Core
 * @since 1.0.0
 */

namespace WDS_Headless_Core;

if ( ! class_exists( 'WPGraphQL' ) ) {
	return;
}

/**
 * Add query to GraphQL to retrieve homepage settings.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function add_homepage_settings_query() {
	register_graphql_object_type(
		'HomepageSettings',
		[
			'description' => esc_html__( 'Front and posts archive page data', 'wds' ),
			'fields'      => [
				'frontPage' => [ 'type' => 'Page' ],
				'postsPage' => [ 'type' => 'Page' ],
			],
		]
	);

	register_graphql_field(
		'RootQuery',
		'homepageSettings',
		[
			'type'        => 'HomepageSettings',
			'description' => esc_html__( 'Returns front and posts archive page data', 'wds' ),
			'resolve'     => function( $source, array $args, \WPGraphQL\AppContext $context ) {
				global $wpdb;

				// Get homepage settings.
				$settings = $wpdb->get_row(
					"
				SELECT
					(select option_value from {$wpdb->prefix}options where option_name = 'page_for_posts') as 'page_for_posts',
					(select option_value from {$wpdb->prefix}options where option_name = 'page_on_front') as 'page_on_front'
				",
					ARRAY_A
				);

				// Format settings data.
				$settings_data = [];

				foreach ( $settings as $key => $value ) {
					// Get page data.
					$page_data = ! empty( $value ?? 0 ) ? $context->get_loader( 'post' )->load_deferred( intval( $value ) ) : null;

					switch ( $key ) {
						case 'page_for_posts':
							$settings_data['postsPage'] = $page_data;
							break;

						case 'page_on_front':
							$settings_data['frontPage'] = $page_data;
							break;
					}
				}

				return $settings_data;
			},
		]
	);
}
add_action( 'graphql_register_types', __NAMESPACE__ . '\add_homepage_settings_query' );

/**
 * Allow access to additional fields via non-authed GraphQL request.
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param  array  $fields     The fields to allow when the data is designated as restricted to the current user.
 * @param  string $model_name Name of the model the filter is currently being executed in.
 * @return array                   Allowed fields.
 */
function graphql_allowed_fields( array $fields, string $model_name ) {
	if ( 'PostTypeObject' !== $model_name ) {
		return $fields;
	}

	// Add label fields.
	$fields[] = 'label';
	$fields[] = 'labels';

	return $fields;
}
add_filter( 'graphql_allowed_fields_on_restricted_type', __NAMESPACE__ . '\graphql_allowed_fields', 10, 6 );

/**
 * Include users without published posts in SQL query.
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param array                      $query_args          The query args to be used with the executable query to get data.
 * @param AbstractConnectionResolver $connection_resolver Instance of the connection resolver.
 * @return array
 */
function public_unpublished_users( array $query_args, \WPGraphQL\Data\Connection\AbstractConnectionResolver $connection_resolver ) {// phpcs:ignore
	if ( $connection_resolver instanceof \WPGraphQL\Data\Connection\UserConnectionResolver ) {
		unset( $query_args['has_published_posts'] );
	}

	return $query_args;
}
add_filter( 'graphql_connection_query_args', __NAMESPACE__ . '\public_unpublished_users', 10, 2 );

/**
 * Make all Users public including in non-authenticated WPGraphQL requests.
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param string $visibility The current visibility of a user.
 * @param string $model_name The model name of the user model.
 * @return string
 */
function public_users( string $visibility, string $model_name ) {
	if ( 'UserObject' === $model_name ) {
		$visibility = 'public';
	}

	return $visibility;
}
add_filter( 'graphql_object_visibility', __NAMESPACE__ . '\public_users', 10, 2 );

/**
 * Edit the error messages on user registration.
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param \WP_Error $errors A WP_Error object containing any errors encountered during registration.
 * @return \WP_Error
 */
function filter_registration_errors( \WP_Error $errors ) {
	if ( ! $errors->has_errors() ) {
		return $errors;
	}

	$new_errors_obj = new \WP_Error();
	foreach ( $errors->get_error_codes() as $error_code ) {
		switch ( $error_code ) {
			case 'empty_username':
				$error_msg = esc_html__( 'Please enter a username.', 'wds' );
				break;
			case 'invalid_username':
				$error_msg = esc_html__( 'This username is invalid because it uses illegal characters. Please enter a valid username.', 'wds' );
				break;
			case 'username_exists':
				$error_msg = esc_html__( 'This username is already registered. Please choose another one.', 'wds' );
				break;
			case 'empty_email':
				$error_msg = esc_html__( 'Please enter your email address.', 'wds' );
				break;
			case 'invalid_email':
				$error_msg = esc_html__( 'Please enter a valid email address.', 'wds' );
				break;
			case 'email_exists':
				$error_msg = esc_html__( 'This username is already registered. Please choose another one.', 'wds' );
				break;
			default:
				$error_msg = esc_html__( 'Registration failed. Please contact the admin.', 'wds' );
				break;
		}
		$new_errors_obj->add( $error_code, $error_msg );
	}
	return $new_errors_obj;
}

/**
 * Add hooks that should only occur in the context of a GraphQL Request.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function graphql_request_init() {
	add_filter( 'registration_errors', __NAMESPACE__ . '\filter_registration_errors' );
}
add_action( 'init_graphql_request', __NAMESPACE__ . '\graphql_request_init' );
