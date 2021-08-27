# Component CSS Module

Style components using [CSS modules](https://github.com/css-modules/css-modules) and [Tailwind's `@apply` directive](https://tailwindcss.com/docs/functions-and-directives#apply).

CSS modules are scoped to the component only. This means there is no need to worry about another component's CSS conflicting and should make naming things a little easier.

[PostCSS Nested](https://github.com/postcss/postcss-nested) is installed by default to allow nesting. Be aware that the syntax is slightly different than SCSS.

## Example

```css
.component {
  @apply mb-24 bg-blue-200; /* This applies Tailwind's utility classes */

  &:hover {
    /* .component:hover {} */
  }

  &.large {
    /* .component.large {} */
  }

  & .content {
    /* .component .content {} */
  }
}
```

## Applying Classes

To apply the classes to your component first import the styles.

```jsx
import styles from './Breadcrumbs.module.css'
```

Next apply the styles to elements in your component. If applying multiple classes, use [`classnames`](https://github.com/JedWatson/classnames).

```jsx
import cn from 'classnames'
...
return (
    <section
      className={cn(
        styles.mediaText,
        mediaLeft ? styles.mediaLeft : null
      )}
    >
    ...
    </section>
)
...
```

### Gotchas

PurgeCSS will remove unused classes in order to optimize the size of CSS files. PurgeCSS looks for the full class name in your source files. As long as the full class name exists, it will not be purged. As a general rule of thumb, do not use string interpolation.

```jsx
return(
    <>
        <div className={ styles[props.color]}>...</div>                      // This will not work
        <div className={ props.color === 'blue' && styles.blue }>...</div>   // This will work
    </>
)
```
