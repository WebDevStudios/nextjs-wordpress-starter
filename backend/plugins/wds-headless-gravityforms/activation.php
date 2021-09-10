<?php
/**
 * Plugin activation functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_GravityForms
 * @since 1.0.0
 */

namespace WDS_Headless_GravityForms;

/**
 * Plugin activation callback.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function activation_callback() {
	do_action( 'wds_headless_gravityforms_activate' );

	// Save current plugin version.
	update_option( 'wds_headless_gravityforms_version', WDS_HEADLESS_GRAVITYFORMS_VERSION );
}
