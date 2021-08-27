# Introduction <!-- omit in toc -->

This document will explain how to enable Algolia in the NextJS application.

## Table of Contents <!-- omit in toc -->

- [API Connection](#api-connection)

## API Connection

Algolia integration relies on three [ENV Vars](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/env-variables) to populate required Algolia variables. These variables are required to access and maintain the connection to Algolia.

- **Index Name**: This is the full name of the index to search and pull records from.
- **Application ID**: This is your unique application identifier. It's used to identify you when using Algolia's API.
- [**Search Only Key**](https://www.algolia.com/doc/guides/security/api-keys/#search-only-api-key): This is the public API key to use in your frontend code. This key is only usable for search queries and sending data to the Insights API.

Both `Application ID` and `Search Only Key` can be found under `Dashboard > API Keys` in your Algolia account.

Once successfully connected, both site search and search results will be populated from your Algolia indice.
