<?php
/**
 * Plugin activation functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_SEO
 * @since 1.0.0
 */

namespace WDS_Headless_SEO;

/**
 * Plugin activation callback.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function activation_callback() {
	do_action( 'wds_headless_seo_activate' );

	// Save current plugin version.
	update_option( 'wds_headless_seo_version', WDS_HEADLESS_SEO_VERSION );
}
