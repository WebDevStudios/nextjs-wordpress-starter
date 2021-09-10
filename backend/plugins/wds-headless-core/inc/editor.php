<?php
/**
 * Page/post editor functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_Core
 * @since 1.0.0
 */

namespace WDS_Headless_Core;

/**
 * Customize settings for the page/post editor.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
function customize_editor() {
	// Add support for post thumbnails.
	add_theme_support( 'post-thumbnails' );

	// Add excerpts to pages.
	add_post_type_support( 'page', 'excerpt' );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\customize_editor' );

/**
 * Wrap WYSIWYG embed in a div wrapper for responsive
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param string $html HTML string.
 * @param string $url  Current URL.
 * @param string $attr Embed attributes.
 * @param string $id   Post ID.
 * @return string
 */
function embed_wrapper( $html, $url, $attr, $id ) {
	return '<div class="iframe-wrapper">' . $html . '</div>';
}
add_filter( 'embed_oembed_html', __NAMESPACE__ . '\embed_wrapper', 10, 4 );
