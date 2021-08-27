<?php
/**
 * Required/recommended plugins.
 *
 * @author WebDevStudios
 * @package WDS_Headless_Algolia
 * @since 1.0.0
 */

namespace WDS_Headless_Algolia;

// Require primary TGM class.
require_once 'class-tgm-plugin-activation.php';

/**
 * List of required plugins.
 *
 * @see http://tgmpluginactivation.com/configuration/
 * @author WebDevStudios
 * @since 1.0.0
 */
function register_required_plugins() {

	$plugins = [

		// Plugins only available on Github.
		[
			'name'     => 'WDS Headless Core',
			'slug'     => 'wds-headless-core',
			'source'   => 'https://github.com/WebDevStudios/nextjs-wordpress-starter',
			'required' => true,
		],
	];

	// Configuration settings.
	$config = [
		'id'           => 'wds-headless-algolia',          // Unique ID for hashing notices for multiple instances of TGMPA.
		'default_path' => '',                      // Default absolute path to bundled plugins.
		'menu'         => 'tgmpa-install-plugins', // Menu slug.
		'parent_slug'  => 'plugins.php',           // Parent menu slug.
		'capability'   => 'activate_plugins',      // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
		'has_notices'  => true,                    // Show admin notices or not.
		'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
		'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
		'is_automatic' => true,                    // Automatically activate plugins after installation or not.
		'message'      => '',                      // Message to output right before the plugins table.
	];

	tgmpa( $plugins, $config );
}
add_action( 'tgmpa_register', __NAMESPACE__ . '\register_required_plugins' );
