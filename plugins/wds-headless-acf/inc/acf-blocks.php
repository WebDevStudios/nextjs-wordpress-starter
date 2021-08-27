<?php
/**
 * ACF block functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_ACF
 * @since 1.0.0
 */

namespace WDS_Headless_ACF;

if ( ! class_exists( 'acf_pro' ) ) {
	return;
}

/**
 * Register custom ACF Blocks.
 *
 * Note: This is an ACF Pro only feature!
 *
 * @see https://www.advancedcustomfields.com/resources/blocks/
 * @author WebDevStudios
 * @since 1.0.0
 */
function acf_blocks_init() {
	$supports = [
		'align'  => 'none',
		'anchor' => false,
		'mode'   => false,
	];

	// Media Text block.
	acf_register_block_type(
		[
			'name'            => 'acf-media-text',
			'title'           => esc_html__( 'ACF Media Text', 'wds-headless-acf' ),
			'description'     => esc_html__( 'A block to display media and text in a 50/50 layout.', 'wds-headless-acf' ),
			'render_callback' => '',
			'category'        => 'wds-content',
			'icon'            => 'images-alt2',
			'keywords'        => [ 'media', 'text', 'button', 'wds' ],
			'mode'            => 'edit',
			'enqueue_assets'  => '',
			'align'           => 'wide',
			'supports'        => $supports,
		]
	);
}
add_action( 'acf/init', __NAMESPACE__ . '\acf_blocks_init' );
