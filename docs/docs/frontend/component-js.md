---
title: JavaScript
---

This is the main component file. It should contain a default exported react [function component](https://reactjs.org/docs/components-and-props.html#function-and-class-components).

## Imports

Imports will automatically sort with Prettier if using VSCode. You can disable this by removing the following setting in `.vscode/settings.json`:

```json
"editor.codeActionsOnSave": {
    "source.organizeImports": true
}
```

## JS Doc

Components are documented with [JSDoc](https://jsdoc.app/). Add documentation comment blocks that describe your component, props, and output.

Example:

```js
/**
 * Render the Breadcrumbs component.
 *
 * @author WebDevStudios
 * @param {object} props             The component attributes as props.
 * @param {Array}  props.breadcrumbs The breadcrumb array.
 * @return {Element}                 The Breadcrumbs component.
 */
```

## PropTypes

Typechecking is done using the [PropTypes](https://github.com/facebook/prop-types) library. Be as specific as possible when documenting props. If the props are being passed down to another component with more detailed PropTypes, you shouldn't be specific as any type errors would be caught further down.

Example:

```js
import PropTypes from 'prop-types'

...

MediaText.propTypes = {
  body: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.string
  }),
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  mediaLeft: PropTypes.bool,
  title: PropTypes.string
}
```

Use `defaultProps` to set defaults so you don't always have to pass default props into the component.

Example:

```js
MediaText.defaultProps = {
  mediaLeft: false
}
```
