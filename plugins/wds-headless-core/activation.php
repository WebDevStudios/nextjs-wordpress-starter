<?php
/**
 * Plugin activation functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_Core
 * @since 1.0.0
 */

namespace WDS_Headless_Core;

/**
 * Plugin activation callback.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function activation_callback() {
	do_action( 'wds_headless_core_activate' );

	// Save current plugin version.
	update_option( 'wds_headless_core_version', WDS_HEADLESS_CORE_VERSION );
}
