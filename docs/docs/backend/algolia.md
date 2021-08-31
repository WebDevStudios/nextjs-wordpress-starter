---
title: Algolia
---

This document will explain how to enable Algolia with the Next.js Starter.

## Backend

Before you can complete this step, you need to sign-up for a free account at [Algolia.com](https://www.algolia.com/).

After you sign up for an account, create a new "app" and then click on "API Keys".

![screenshot](/img/screenshot-setup-algolia-account.png)

Copy your API keys into the WP Search w/ Algolia Settings Page:

`Algolia Search --> Settings`

![screenshot](/img/screenshot-set-algolia-creds.png)

You can name the `Index name prefix` whatever you'd like.

### Push Content to Algolia

1. Navigate to `Algolia Search --> Search Page`
2. Click the blue button to `"Re-index search page records"`

![screenshot](/img/screenshot-set-algolia-creds.png)

### WDS Headless Algolia Plugin

Install the WDS Headless Algolia plugin by uploading [wds-headless-algolia.zip](https://nextjs.wpengine.com/downloads/wds-headless-algolia.zip) or as a [Composer dependency](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/243686e8bb1957a57a8d7bdb341c8ca452786754/composer.json#L33).

## Frontend

### API Connection

Algolia integration relies on three [ENV Vars](/docs/frontend/env-variables) to populate required Algolia variables. These variables are required to access and maintain the connection to Algolia.

- **Index Name**: This is the full name of the index to search and pull records from.
- **Application ID**: This is your unique application identifier. It's used to identify you when using Algolia's API.
- [**Search Only Key**](https://www.algolia.com/doc/guides/security/api-keys/#search-only-api-key): This is the public API key to use in your frontend code. This key is only usable for search queries and sending data to the Insights API.

Both `Application ID` and `Search Only Key` can be found under `Dashboard > API Keys` in your Algolia account.

Once successfully connected, both site search and search results will be populated from your Algolia indice.
