---
title: Block Handler Components
---

These components take in Gutenberg block attributes, further process the data if necessary and pass the data as props to the design system components. Block handler components should not be styled.

## Example

Here is the block handler for the core heading block (`BlockHeadings.js`).
The design system component `Heading.js` needs a string for it's `tag` prop. However, WordPress is sending a number attribute called `level`.

The block handler component is a great place to address this mismatch.

```js
export default function BlockHeadings({
  anchor,
  backgroundColorHex,
  className,
  content,
  level,
  style,
  textAlign,
  textColorHex
}) {
  const headingStyle = getBlockStyles({backgroundColorHex, textColorHex, style})

  return (
    <Heading
      className={cn(
        className,
        textAlign === 'center' ? 'text-center' : null,
        !textAlign || textAlign === 'left' ? 'text-left' : null,
        textAlign === 'right' ? 'text-right' : null
      )}
      id={anchor}
      style={headingStyle}
      tag={'h' + level}
    >
      {content}
    </Heading>
  )
}
```
