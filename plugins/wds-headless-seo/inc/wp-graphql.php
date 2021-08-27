<?php
/**
 * WP GraphQL settings.
 *
 * @see https://wordpress.org/plugins/wp-graphql/
 * @author WebDevStudios
 * @package WDS_Headless_SEO
 * @since 1.0.0
 */

namespace WDS_Headless_SEO;

use WPSEO_Options;

/**
 * Add archive SEO field to CPT archive queries in GraphQL.
 *
 * @author WebDevStudios
 * @since 1.0
 * @return void
 */
function register_archive_seo() {
	if ( ! class_exists( 'WPSEO_Options' ) ) {
		return;
	}

	register_graphql_object_type(
		'ArchiveSeo',
		[
			'description' => esc_html__( 'Archive SEO data', 'wds-headless-seo' ),
			'fields'      => [
				'title'              => [ 'type' => 'String' ],
				'metaDesc'           => [ 'type' => 'String' ],
				'metaRobotsNoindex'  => [ 'type' => 'String' ],
				'metaRobotsNofollow' => [ 'type' => 'String' ],
				'canonical'          => [ 'type' => 'String' ],
			],
		]
	);

	// Get post types that support archives (will not include "post" PT).
	$post_types = get_post_types(
		[
			'has_archive' => true,
		],
		'objects'
	);

	// Bail if we don't have an array of post types.
	if ( empty( $post_types ) || ! is_array( $post_types ) ) {
		return;
	}

	// Register GraphQL field on each post type's plural/archive connection.
	foreach ( $post_types as $post_type => $post_type_object ) {
		if ( ! $post_type_object->show_in_graphql || ! $post_type_object->graphql_single_name ) {
			break;
		}

		$pt_singular = ucfirst( $post_type_object->graphql_single_name );

		register_graphql_field(
			"RootQueryTo{$pt_singular}Connection",
			'archiveSeo',
			[
				'type'        => 'ArchiveSeo',
				'description' => sprintf(
					/* translators: the post type label. */
					__( 'The Yoast SEO data of the %s post type archive', 'wds-headless-seo' ),
					$post_type_object->label
				),
				'resolve'     => function () use ( $post_type, $post_type_object ) {
					// Surface info: https://developer.yoast.com/blog/yoast-seo-14-0-using-yoast-seo-surfaces/.
					/* We would ideally use this surface to determine meta title and desc, but the surface is not pulling the correct meta for those fields (as of Yoast 15.9.2, it seems to be pulling some default archive meta title and a blank desc). */
					$archive_seo = YoastSEO()->meta->for_post_type_archive( $post_type );

					// Retrieve Yoast SEO options for archive title and desc instead.
					$wpseo_options = WPSEO_Options::get_instance();
					$title         = $wpseo_options->get( "title-ptarchive-{$post_type}" );
					$description   = $wpseo_options->get( "metadesc-ptarchive-{$post_type}", $archive_seo->description );

					/* Manually replace title vars that won't get caught in next step (e.g., pt_single, pt_plural) -- these appear to be "advanced" vars that require a single post to be passed, rather than a post type object. */
					$title = str_ireplace( '%%pt_single%%', $post_type_object->labels->singular_name, $title );
					$title = str_ireplace( '%%pt_plural%%', $post_type_object->labels->name, $title );

					// Replace standard title vars with post type object.
					$title = wpseo_replace_vars( $title, $post_type_object );

					return [
						'title'              => wp_gql_seo_format_string( $title ?? $archive_seo->title ),
						'metaDesc'           => wp_gql_seo_format_string( $description ),
						'metaRobotsNoindex'  => $archive_seo->robots['index'],
						'metaRobotsNofollow' => $archive_seo->robots['follow'],
						'canonical'          => $archive_seo->canonical,
					];
				},
			]
		);
	}
}
add_action( 'graphql_register_types', __NAMESPACE__ . '\register_archive_seo' );
