# Components

`components/`

## Types of Components

### Block Handler Components

`components/blocks/`

- These are 'middleware' components that take in Gutenberg block attributes, process the data further if necessary and pass the formatted attributes as props to design system components.
- These components should not be styled and they don't need stories.

### Design System Components

`components/molecules/`

`components/atoms/`

`components/organisms/`

- These are the main components that make up the front end of the Next.js app and are organized using the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology.

#### **Component Directories**

Here are the files you'll find in each component directory:

```
/components/atoms/Button      - The button component folder is organized under atoms.
|-- Button.js                 - The main js file for the button component.
|-- Button.module.css         - The CSS module file for the button component.
|-- Button.stories.mdx        - The Storybook story for the button component.
|-- index.js                  - The default export for the button component.
```

Learn more about each file:

[JS](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/component-js)

[CSS Module](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/component-css-module)

[Story](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/component-story)
