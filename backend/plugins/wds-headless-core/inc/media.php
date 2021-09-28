<?php
/**
 * Media functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_Core
 * @since 1.0.0
 */

namespace WDS_Headless_Core;

/**
 * Customize media settings.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function customize_media() {
	// Add custom image size.
	add_image_size( 'nineteen-twenty', 1920, 540, true );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\customize_media' );
