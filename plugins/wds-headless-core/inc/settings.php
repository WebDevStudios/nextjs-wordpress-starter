<?php
/**
 * Settings functionality.
 *
 * @see https://wordpress.org/plugins/wp-graphql/
 * @author WebDevStudios
 * @package WDS_Headless_Core
 * @since 1.0.0
 */

namespace WDS_Headless_Core;

/**
 * Customize ACF JSON loader.
 *
 * @todo Move settings out of ACF.
 * @see https://github.com/WebDevStudios/wds-headless-wordpress/issues/10
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param array $paths ACF JSON paths.
 * @return array       Filtered ACF JSON paths.
 */
function load_json( array $paths ) : array {
	return array_merge(
		$paths,
		[
			WDS_HEADLESS_CORE_PLUGIN_DIR . 'acf-json',
		]
	);
}
add_filter( 'acf/settings/load_json', __NAMESPACE__ . '\load_json', 10 );
