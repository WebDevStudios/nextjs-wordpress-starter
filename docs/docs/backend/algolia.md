---
title: Algolia
---

This document will explain how to enable Algolia with the Next.js Wordpress Starter.

## Prerequisites

You will need to have the following WordPress plugins installed:

- [An account with Algolia](https://www.algolia.com/)
- [WP Search with Algolia](https://wordpress.org/plugins/wp-search-with-algolia/)
- [WDS Headless Algolia](https://packagist.org/packages/webdevstudios/wds-headless-algolia)

> These plugins should have been installed when you ran `composer install` during the initial [Backend Setup](/docs/backend#step-2-install-theme-and-plugins).

## Backend Setup

### Create an account with Algolia

Before you can complete this step, you need to sign-up for a free account at [Algolia.com](https://www.algolia.com/).

After you sign up for an account, create a new "app" and then click on "API Keys".

![screenshot](/img/screenshot-setup-algolia-account.png)

### Configure credentials

Copy your API keys into the WP Search with Algolia Settings Page:

`Algolia Search --> Settings`

![screenshot](/img/screenshot-set-algolia-creds.png)

You can name the _Index name prefix_ to whatever you'd like.

### Push Content to Algolia

1. Navigate to `Algolia Search --> Search Page`
2. Click the blue button to `"Re-index search page records"`

![screenshot](/img/screenshot-set-algolia-creds.png)

## Frontend Setup

### API Connection

Algolia integration relies on three [ENV Vars](/docs/frontend/env-variables) to populate required Algolia variables. These variables are required to access and maintain the connection to Algolia.

- **Index Name**: This is the full name of the index to search and pull records from.
- **Application ID**: This is your unique application identifier. It's used to identify you when using Algolia's API.
- [**Search Only Key**](https://www.algolia.com/doc/guides/security/api-keys/#search-only-api-key): This is the public API key to use in your frontend code. This key is only usable for search queries and sending data to the Insights API.

Both `Application ID` and `Search Only Key` can be found under `Dashboard > API Keys` in your Algolia account.

Once successfully connected, both site search and search results will be populated from your Algolia indice.
