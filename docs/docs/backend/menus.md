---
title: Menus
---

WordPress [Navigation Menus](https://developer.wordpress.org/themes/functionality/navigation-menus/) are fully supported in the Next.js WordPress Starter.

## Registering Menus

Register nav menus like you would in any other WordPress environment. Menu items and hierarchy will be returned and accessed in Next.js using React [Context](https://reactjs.org/docs/context.html).

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
   'primary-menu' => esc_html__( 'Header Menu', 'text-domain' ),
   'footer-menu'  => esc_html__( 'Footer Menu', 'text-domain' ),
  )
 );
}
add_action( 'init', 'wds_register_my_menus' );
```
