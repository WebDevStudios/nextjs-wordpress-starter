<?php
/**
 * Plugin deactivation functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_GravityForms
 * @since 1.0.0
 */

namespace WDS_Headless_GravityForms;

/**
 * Plugin deactivation callback.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function deactivation_callback() {
	do_action( 'wds_headless_gravityforms_deactivate' );

	// Delete plugin version.
	delete_option( 'wds_headless_gravityforms_version' );
}
