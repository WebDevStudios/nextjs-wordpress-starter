<?php
/**
 * Link/redirection functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_SEO
 * @since 1.0.0
 */

namespace WDS_Headless_SEO;

if ( ! defined( 'WPSEO_VERSION' ) ) {
	return;
}

/**
 * Replace Site URL JAMStack URL as needed.
 *
 * @author WebDevStudios
 * @since  1.0
 * @param  array $breadcrumbs Yoast SEO breadcrumbs.
 * @return array              Filtered breadcrumbs.
 */
function breadcrumb_links( array $breadcrumbs ) {
	if ( ! defined( 'HEADLESS_FRONTEND_URL' ) ) {
		return $breadcrumbs;
	}

	$base_url = rtrim( HEADLESS_FRONTEND_URL, '/' );

	// Override domain in breadcrumbs.
	return array_map(
		function( $breadcrumb ) use ( $base_url ) {
			$parsed_url        = wp_parse_url( $breadcrumb['url'] );
			$path              = $parsed_url['path'] ?? '';
			$breadcrumb['url'] = "{$base_url}{$path}";

			return $breadcrumb;
		},
		$breadcrumbs
	);
}
add_filter( 'wpseo_breadcrumb_links', __NAMESPACE__ . '\breadcrumb_links' );
