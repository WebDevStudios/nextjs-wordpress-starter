---
title: Custom Post Types
---

Our Next.js starter supports Custom Post Types, and includes a sample CPT ([Team](https://nextjs-wordpress-starter.vercel.app/team)) as a place to get started.

## Workflow

1. Register a Custom Post Type
2. Create a new folder in the `/pages` directory of the Next.js WordPress Starter
3. Name the folder to match your CPT slug (e.g, if your CPT slug was `products`, name the folder `/products`)
4. Create a [catch-all route file](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes) named `[[...slug]].js`
5. Build your query inside `/products/[[...slug]].js]`
