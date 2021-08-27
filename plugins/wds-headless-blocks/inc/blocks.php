<?php
/**
 * Gutenberg block functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_Blocks
 * @since 1.0.0
 */

namespace WDS_Headless_Blocks;

/**
 * Create custom block category.
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param array  $categories Current block categories.
 * @param object $post       WP Post object.
 * @return array             Filtered block categories.
 */
function block_category( $categories, $post ) {
	return array_merge(
		$categories,
		[
			[
				'slug'  => 'WDS',
				'title' => esc_html__( 'WDS', 'wds-headless-blocks' ),
			],
		]
	);
}
add_filter( 'block_categories', __NAMESPACE__ . '\block_category', 10, 2 );
