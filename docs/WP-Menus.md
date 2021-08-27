# Introduction <!-- omit in toc -->

WordPress [Navigation Menus](https://developer.wordpress.org/themes/functionality/navigation-menus/) are fully supported in the NextJS starter.

## Table of Contents <!-- omit in toc -->

- [Registering Menus](#registering-menus)

## Registering Menus

Register nav menus like you would in any other WordPress envrionment. Menu items and heirarchy will be returned and accessed in NextJS using React [Context](https://reactjs.org/docs/context.html).

```php
/**
 * Register the theme nav menus.
 *
 * @author WebDevStudios
 * @since 1.0
 */
function wds_register_my_menus() {
	register_nav_menus(
		array(
			'primary-menu' => __( 'Header Menu' ),
			'footer-menu'  => __( 'Footer Menu' ),
		)
	);
}
add_action( 'init', 'wds_register_my_menus' );
```
