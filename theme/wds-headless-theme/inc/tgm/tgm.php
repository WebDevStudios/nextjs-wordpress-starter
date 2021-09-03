<?php
/**
 * Theme functionality.
 *
 * @author WebDevStudios
 * @package wds-headless-theme
 * @since 1.0.0
 */

// Require primary TGM class.
require_once 'class-tgm-plugin-activation.php';

/**
 * List of required plugins.
 *
 * @see http://tgmpluginactivation.com/configuration/
 * @author WebDevStudios
 * @since 1.0.0
 */
function wds_register_required_plugins() {

	$plugins = [

    // WDS Headless plugins.
		[
			'name'     => 'WDS Headless Core',
			'slug'     => 'wds-headless-core',
			'source'   => 'https://nextjs.wpengine.com/downloads/wds-headless-core.zip',
			'required' => true,
		],
    [
			'name'     => 'WDS Headless ACF',
			'slug'     => 'wds-headless-acf',
			'source'   => 'https://nextjs.wpengine.com/downloads/wds-headless-acf.zip',
		],
    [
			'name'     => 'WDS Headless Algolia',
			'slug'     => 'wds-headless-algolia',
			'source'   => 'https://nextjs.wpengine.com/downloads/wds-headless-algolia.zip',
		],
    [
			'name'     => 'WDS Headless Blocks',
			'slug'     => 'wds-headless-blocks',
			'source'   => 'https://nextjs.wpengine.com/downloads/wds-headless-blocks.zip',
		],
    [
			'name'     => 'WDS Headless Gravity Forms',
			'slug'     => 'wds-headless-gravityforms',
			'source'   => 'https://nextjs.wpengine.com/downloads/wds-headless-gravityforms.zip',
		],
    [
			'name'     => 'WDS Headless SEO',
			'slug'     => 'wds-headless-seo',
			'source'   => 'https://nextjs.wpengine.com/downloads/wds-headless-seo.zip',
		],

		// Plugins from the WordPress Plugin Repository.
		[
			'name'        => 'Advanced Custom Fields',
			'slug'        => 'advanced-custom-fields',
			'is_callable' => 'acf',
			'required'    => true,
		],
		[
			'name' => 'Custom Post Type UI',
			'slug' => 'custom-post-type-ui',
		],
		[
			'name' => 'Gutenberg',
			'slug' => 'gutenberg',
		],
	];

	// Configuration settings.
	$config = [
		'id'           => 'wds',                   // Unique ID for hashing notices for multiple instances of TGMPA.
		'default_path' => '',                      // Default absolute path to bundled plugins.
		'menu'         => 'tgmpa-install-plugins', // Menu slug.
		'parent_slug'  => 'themes.php',            // Parent menu slug.
		'capability'   => 'edit_theme_options',    // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
		'has_notices'  => true,                    // Show admin notices or not.
		'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
		'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
		'is_automatic' => true,                    // Automatically activate plugins after installation or not.
		'message'      => '',                      // Message to output right before the plugins table.
	];

	tgmpa( $plugins, $config );
}
add_action( 'tgmpa_register', 'wds_register_required_plugins' );