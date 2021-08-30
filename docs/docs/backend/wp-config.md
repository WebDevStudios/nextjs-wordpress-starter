---
title: wp-config.php
---

There are three constants required in `wp-config.php` to help the Next.js work with WordPress.

## Table of Contents <!-- omit in toc -->

- [HEADLESS_FRONTEND_URL](#headless_frontend_url)
- [PREVIEW_SECRET_TOKEN](#preview_secret_token)
- [GRAPHQL_JWT_AUTH_SECRET_KEY](#graphql_jwt_auth_secret_key)

## HEADLESS_FRONTEND_URL

The `HEADLESS_FRONTEND_URL` constant will forward users in the WordPress dashboard to the Next.js frontend when clicking certain links, like Preview.

This need to be whatever your Next.js frontend is-- and could be different depending on your environment setup.

For example, on your local it would be:

```php
// local wp-config.php
define('HEADLESS_FRONTEND_URL', 'http://localhost:3000/');
```

On production, your URL probably needs to point at the production version of the frontend:

```php
// production wp-config.php
define('HEADLESS_FRONTEND_URL', 'https://mywebsite.com');
```

## PREVIEW_SECRET_TOKEN

The `PREVIEW_SECRET_TOKEN` is so Next.js can authenticate with WordPress in order to show post and page previews. It can be any random string, as long as it matches the `WORDPRESS_PREVIEW_SECRET` [ENV variable](/docs/docs/frontend/env-variables#list-of-env-variables) on the frontend.

```php
// Any random string
define('PREVIEW_SECRET_TOKEN', 'ANY_RANDOM_STRING');
```

## GRAPHQL_JWT_AUTH_SECRET_KEY

The `GRAPHQL_JWT_AUTH_SECRET_KEY allows the frontend to auth with the backend. Learn more about setting up the [WPGraphQL JWT plugin](https://www.wpgraphql.com/extenstion-plugins/wpgraphql-jwt-authentication/).

```php
define('GRAPHQL_JWT_AUTH_SECRET_KEY', 'YOUR_JWT_SECRET_KEY');
```
