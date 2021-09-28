<?php
/**
 * Plugin activation functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_Blocks
 * @since 1.0.0
 */

namespace WDS_Headless_Blocks;

/**
 * Plugin activation callback.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function activation_callback() {
	do_action( 'wds_headless_blocks_activate' );

	// Save current plugin version.
	update_option( 'wds_headless_blocks_version', WDS_HEADLESS_BLOCKS_VERSION );
}
