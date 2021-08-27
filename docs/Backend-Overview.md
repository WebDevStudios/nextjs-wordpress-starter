# Introduction <!-- omit in toc -->

This describes how information is passed to and from the frontend, through Next.js,
back to WordPress.

## Table of Contents <!-- omit in toc -->

- [Overall Architecture](#overall-architecture)
- [Handling dynamic data](#handling-dynamic-data)

## Overall Architecture

Next.js, as used in this starter, is not a purely static site. Functions in
the `/public/api` folder are executed on the Next.js "server" where the
frontend is hosted, giving them access to all the environment variables
available to the build process.

```
/-----------\
| WordPress |
\-----------/
      |
~~~~~~~~~~~~~
      |
/-----------\
|  Next.js  |
\-----------/
      |
/-----------\
|  Browser  |
\-----------/
```

## Handling dynamic data

Occasionally, the browser will need to make a request for data. This includes
loading additional posts on archive pages and posting WordPress comments.
Because the browser may not have access to WordPress (if WordPress is behind a
firewall or other authorization mechanism), any dynamic information for the
browser must pass through a Next.js function.

Functions and methods to be executed in the browser are found in the `/lib/frontend`
folder. The actual endpoints are in `/public/api`.

The basic steps for creating a feature using dynamic data are:

1. Create a [Next.js API Route][njs] that will handle the request to WordPress.
   This page can and should use functions available to a normal Next.js page,
	 including using functions in `/lib/wordpress`.
2. Add the new API route to `wpDataEndpoints` in `/lib/wordpress/connector.js`
3. Create a new GraphQL query and corresponding function in
   `/lib/frontend/wp`. Follow the other features there as an example, particularly
	 the use of `@rest()` in the GraphQL query
4. Use this frontend function in the actual displayed page.

[njs]: https://nextjs.org/docs/api-routes/introduction
