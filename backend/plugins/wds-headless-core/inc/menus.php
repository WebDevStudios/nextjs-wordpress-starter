<?php
/**
 * Navigation menu functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_Core
 * @since 1.0.0
 */

namespace WDS_Headless_Core;

/**
 * Register nav menus.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function register_menus() {
	register_nav_menus(
		[
			'footer-menu'  => esc_html__( 'Footer Menu' ),
			'mobile-menu'  => esc_html__( 'Mobile Menu' ),
			'primary-menu' => esc_html__( 'Primary Menu' ),
		]
	);
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\register_menus' );
