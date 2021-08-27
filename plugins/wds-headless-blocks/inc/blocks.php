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

/**
 * Customize block support.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function customize_block_support() {
	// Reset available font size presets to only "normal" (16px).
	add_theme_support(
		'editor-font-sizes',
		[
			[
				'name' => 'Normal',
				'size' => 16,
				'slug' => 'normal',
			],
		]
	);
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\customize_block_support' );
