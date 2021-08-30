---
title: Folder Structure
---

This describes the folder layout of the Next.js WordPress starter. For more
on how a Next.js project is set up, [the Next.js documentation][njsd] is
a great place to start.

[njsd]: https://nextjs.org/docs/getting-started

## `pages` and `public`

These are the folders essential to Next.js. The `public` folder contains
static files meant to be copied directly to the deployed server. The
`pages` folder contains files that are processed by Next.js according
to their name.

On the surface level, `index.js` will correspond to `/` in the deployed
website, `search.js` to `/search`, and so on. Files in brackets, such
as `[slug].js`, are dynamically interpreted by Next.js. For example,
a post titled "Example post" will be mapped by `/blog/[[slug]].js`
to `/blog/example-post` in the finished website.

## `components`

This folder contains the various React components that make up the
website. They are organized into folders based on their complexity:

1. `atoms`
2. `molecules`
3. `organisms`

Of the remaining folders, `documentation` contains information for
Storybook. The `common` folder contains components that define the
general structure of pages.

Finally, the `blocks` folder contains the components directly
responsible for displaying individual blocks from the WordPress
Block Editor. They are organized by the source of the block.

## `functions`

This folder contains useful functions for the frontend. Of note:

- `displayBlock.js` handles which Component will display for which block
- `formatBlockData.js` handles the initial processing of the blockJSON

## `lib`

This folder contains the functions for communicating with the different
APIs in the project. There is a folder for each distinct API with a
`connector.js` file for managing that connection:

- `wordpress`: for communicating with the headless WordPress install. The
  majority of work will be in this folder.
- `frontend`: for allowing the browser to communicate with the Next.js API
  endpoints. More on this setup is in the [Overview][ov] section.
- `algolia`: for communicating with the Algolia search API.

[ov]: /docs/docs/backend/index

Within the folders, files are organized by feature. A typical feature will
have a GraphQL query and a function to handle calling that query. That
function will be called by the appropriate page elsewhere in the project.

In the `wordpress` folder, there are two folders worth pointing out:

- `_partials` contains fragments of GraphQL queries that are used in
  multiple places.
- `_global` contains functions that are not tied to particular features,
  especially ones used in the creation of pages.
