# Introduction <!-- omit in toc -->

This starter uses a few 3rd party services. Learn more...

## Table of Contents <!-- omit in toc -->

- [Algolia](#algolia)
- [Chromatic](#chromatic)
- [Vercel](#vercel)
- [WP Engine](#wp-engine)

### Algolia

<https://www.algolia.com/>

We use the [WP Search with Algolia](https://wordpress.org/plugins/wp-search-with-algolia/) to push content indicies from WordPress to Algolia. You will need to set up a (free) account and place your API credentials in the frontend `.env` file _and_ in the WordPress plugin settings.

### Chromatic

<https://www.chromatic.com/>

Chromatic automates gathering UI feedback, visual testing, and documentation, so developers can iterate faster with less manual work. You will need to update both [`package.json`](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/staging/package.json#L34) and [`chromatic.yml`](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/staging/.github/workflows/chromatic.yml) with your Chromatic API key in order to automate builds.

### Vercel

<https://vercel.com/>

Vercel is the company behind Next.js and offers a platform _[that was built for deploying](https://vercel.com/solutions/nextjs)_ Next.js apps.

Vercel has a generous free tier and offers support for both serverless functions (required if using incremental static regeneration) and [`next/image`](https://nextjs.org/docs/api-reference/next/image). Something neither Netlify nor Cloudflare support.

### WP Engine

<https://wpengine.com>

We're a partner with WP Engine and love their managed WordPress hosting options. That said, while hosting your headless WordPress install on WP Engine is recommended, it is not required.
