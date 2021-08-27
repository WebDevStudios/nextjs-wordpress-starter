# Component Story

[Storybook](https://storybook.js.org/docs/react/get-started/introduction) makes it easy to develop and test components in isolation. Run storybook locally with `npm run storybook`. Storybook will look through component directories for `.mdx` stories and runs by default on `:6006`.

[Storybook MDX Docs](https://storybook.js.org/docs/react/api/mdx).

## Example Story

```md
import {Canvas, Meta, Story} from '@storybook/addon-docs/blocks'
import MediaText from './'

<Meta title="Components/Molecules/MediaText" component={MediaText} />

# MediaText

Use this to display media and text in a 50/50 layout.

<Canvas>
  <Story name="Component">
    <MediaText
      title="New Designs"
      body="Our amazing new design is here! Get it while it's hot, it won't be hot for long... uh oh, already cooling."
      image={{
        url:
          'https://images.unsplash.com/photo-1610991149688-c1321006bcc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1110&q=60',
        alt: 'Some alt text'
      }}
      cta={{icon: 'arrowRight', text: 'Take a look'}}
    />
  </Story>
</Canvas>
```

The code above will output a story at `:6006/?path=/docs/components-molecules-mediatext`.

## Controls

The controls story will enable [Storybook's controls](https://storybook.js.org/docs/react/essentials/controls#gatsby-focus-wrapper). A controls story looks like this.

```md
## Controls

Play around with `<Button />` props in the [Canvas tab of the Controls story](?path=/story/design-system-atoms-button--controls).

export const Template = (args) => <Button {...args} />

<Canvas>
  <Story
    name="Controls"
    args={{
      text: 'This is a link button',
      url: 'https://example.com',
      urlExternal: false,
      tag: 'button',
      fluid: false
    }}
  >
    {Template.bind({})}
  </Story>
</Canvas>
```
