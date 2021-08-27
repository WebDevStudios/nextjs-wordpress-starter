# Block Handler Components

These components take in Gutenberg block attributes, further process the data if necessary and pass the data as props to the design system components. Block handler components should not be styled.

## Example

Here is the block handler for a Hero block created with Lazy Blocks. Because the `backgroundImage` is a url formatted JSON string, we need to decode and parse it as JSON for the Hero component. The block handler component is a good place to do this.

```js
export default function LzbBlockHero({attributes}) {
  attributes = {
    ...attributes,
    backgroundImage: JSON.parse(decodeURIComponent(attributes.backgroundImage))
  }

  return (
    <>
      {attributes ? (
        <Hero {...attributes} />
      ) : (
        'There was a problem with attributes in BlockHero.js.'
      )}
    </>
  )
}
```
