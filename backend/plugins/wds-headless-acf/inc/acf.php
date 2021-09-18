<?php
/**
 * ACF functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_ACF
 * @since 1.0.0
 */

namespace WDS_Headless_ACF;

/**
 * Customize ACF JSON loader.
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
			WDS_HEADLESS_ACF_PLUGIN_DIR . 'acf-json',
		]
	);
}
add_filter( 'acf/settings/load_json', __NAMESPACE__ . '\load_json', 10 );
