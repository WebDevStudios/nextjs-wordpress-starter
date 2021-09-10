<?php
/**
 * Plugin deactivation functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_Blocks
 * @since 1.0.0
 */

namespace WDS_Headless_Blocks;

/**
 * Plugin deactivation callback.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function deactivation_callback() {
	do_action( 'wds_headless_blocks_deactivate' );

	// Delete plugin version.
	delete_option( 'wds_headless_blocks_version' );
}
