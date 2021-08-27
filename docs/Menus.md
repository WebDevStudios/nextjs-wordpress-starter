# Introduction <!-- omit in toc -->

WordPress [Navigation Menus](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/wp-menus) are accessed in NextJS using React [Context](https://reactjs.org/docs/context.html).

## Table of Contents <!-- omit in toc -->

- [MenuContext](#menucontext)
- [Example](#example)
- [Data Structure](#data-structure)

## MenuContext

`MenuContext` is a React [Context](https://reactjs.org/docs/context.html) object that stores menu data without having to pass it down through the component tree as props.

Storing menu data as context allows menu data to be available in all components by simply importing the `MenuContext` object directly in the component.

## Example

```JS
import {MenuContext} from '@/components/common/MenuProvider'
import {useContext} from 'react'

/**
 * Render the Header component.
 *
 * @author WebDevStudios
 * @return {Element} The Header component.
 */
export default function Header() {
  const {menus} = useContext(MenuContext)
  return (
    <Navigation menu={menus?.primary_menu} />
  )
}
```

`MenuContext` returns all registered WordPress menus, so you'll to need to dig down into the object to access a specific menu.

**Note**: [Menu](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/wp-menus) slugs containing dashes (`-`) will be converted to underscores (`_`) in the application.

## Data Structure

The `MenuContext` object will contain data on all registered menus as nested objects.

```JSON
{
  "primary_menu":[],
  "footer_menu":[]
}
```

Each menu will contain an array of menu items with a nested `children` array (if required).

```JSON
{
  "primary_menu":[
	{
	  "label": "Homepage",
	  "path": "/",
	},
	{
	  "label": "About",
	  "path": "/about-us",
	  "children":[
				{
              "label":"Leadeship",
              "path": "about-us/leadeship",
            },
            {
              "label":"Our Team",
              "path": "about-us/our-team",
            },
				{
              "label":"Services",
              "path": "about-us/services",
            }
	  ]
	},
	{
	  "label": "Contact",
	  "path": "/contact",
	},
  ],
  "footer_menu":[]
}
```

**Note:** To access data of a specific menu you must access the object directly.

```JS
const {menus} = useContext(MenuContext)
const primary = menus?.primary_menu;
```
