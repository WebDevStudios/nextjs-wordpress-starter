---
sidebar_position: 1
title: Overview
---

The Next.js WordPress Starter comes with a robust [Storybook](https://storybook.js.org/docs/react/get-started/introduction) setup, which makes it easy to develop and test components in isolation.

## Start Storybook

To get started, run the following command::

`npm run storybook`

This should open a browser window at <http://localhost:6006/>

## Component Folder Structure

The Next.js WordPress Starter uses Atomic Design to structure its components:

```text
components
├── atoms
|  ├── Breadcrumbs
|  |  ├── Breadcrumbs.js
|  |  ├── Breadcrumbs.module.css
|  |  ├── Breadcrumbs.stories.mdx
|  |  └── index.js
├── molecules
|  ├── ...
├── organisms
|  ├── ...
```

- **/atoms**: Components that are used across multiple pages.
- **/Breadcrumbs**: The folder housing all of the Breadcrumb related files.
- **/Breadcrumbs.js**: A component that displays a list of breadcrumbs.
- **/Breadcrumbs.module.css**: A CSS module for the Breadcrumbs component.
- **/Breadcrumbs.stories.mdx**: The Storybook "story" for the Breadcrumbs component.
- **/index.js**: Contains the export for the Breadcrumbs component.

Learn more about:

- [Components](/docs/frontend/components-overview)
- [CSS Modules](/docs/frontend/component-css-module) and their use in our starter.

## MDX

MDX is the syntax Storybook Docs uses to capture long-form Markdown documentation and stories in one file. You can also write pure documentation pages in MDX and add them to Storybook alongside your stories. [Learn more](https://storybook.js.org/docs/react/api/mdx).

## Example Story

```jsx
// components/molecules/Card/Card.stories.mdx

import {Canvas, Meta, Story} from '@storybook/addon-docs/blocks'
import Card from './'

<Meta title="Components/Molecules/Card" component={Card} />

# Card

Use this component to display a card.

<Canvas>
  <Story name="Component">
    <Card
      image={{
        sourceUrl:
          'https://images.unsplash.com/photo-1610991149688-c1321006bcc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1110&q=60'
      }}
      meta="This is the meta"
      title="This is the card title"
      body="This is the card body"
      timestamp="May 29, 2021"
      ctaText="Click Here!"
      ctaUrl="https://google.com"
    />
  </Story>
</Canvas>

```

The code above will output a story at `http://localhost:6006/?path=/story/components-molecules-card--component`.

## Controls

The controls story will enable [Storybook's controls](https://storybook.js.org/docs/react/essentials/controls#gatsby-focus-wrapper). A controls story looks like:

```jsx
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

## Storybook Configuration

The Next.js WordPress Starter follows a standard Storybook configuration:

```text
.storybook
├── main.js
├── manager.js
├── preview.js
└── theme.js
```

- **/main.js**: The main Storybook configuration file.
- **/manager.js**: Configure Storybook features and behavior.
- **/preview.js**: Configure story rendering.
- **/theme.js**: Configure the Storybook theme.

[Learn more](https://storybook.js.org/docs/react/configure/overview) about configuring and extending Storybook.
