<?php
/**
 * Plugin deactivation functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_SEO
 * @since 1.0.0
 */

namespace WDS_Headless_SEO;

/**
 * Plugin deactivation callback.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function deactivation_callback() {
	do_action( 'wds_headless_seo_deactivate' );

	// Delete plugin version.
	delete_option( 'wds_headless_seo_version' );
}
