# Introduction <!-- omit in toc -->

Next.js has robust support for ENV variables. ENV variables are for storing sensitive information like API credentials and global settings. Learn more about ENV Variable support in [Next.js](https://nextjs.org/docs/basic-features/environment-variables).

**Important! Never commit `.env` files into your Git repository!**

## Table of Contents <!-- omit in toc -->

- [.env.sample](#envsample)
- [List of ENV variables](#list-of-env-variables)
- [Add ENV Variables to Frontend Hosting](#add-env-variables-to-frontend-hosting)

## .env.sample

This project contains a sample .env file. It's recommended that you [add ENV variables to your hosting environment](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/Frontend-Setup#pull-env-variables-from-vercel), such as Vercel and pull them down vs. maintaining a local copy.

## List of ENV variables

```text
# Tells Next.js we're in development mode. You do not need a Vercel account for this.
VERCEL_ENV="development"
```

```text
# Allows Node to work with local, self-signed certificates.
NODE_TLS_REJECT_UNAUTHORIZED="0"
```

```text
# Your WordPress URL.
WORDPRESS_URL="https://nextjs.wpengine.com/"
```

```text
# This needs to match the WORDPRESS_PREVIEW_SECRET constant in wp-config.php. It can be any random string of text.
WORDPRESS_PREVIEW_SECRET="ANY_RANDOM_STRING_OF_TEXT"
```

```text
# Your WordPress username.
WORDPRESS_APPLICATION_USERNAME="YOUR_WORDPRESS_USERNAME"
```

```text
# Your WordPress application password. Requires WordPress 5.6 and above. See https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/
WORDPRESS_APPLICATION_PASSWORD="YOUR_GENERATED_APPLICATION_PASSWORD"
```

```text
# Your Algolia index name.
NEXT_PUBLIC_ALGOLIA_INDEX_NAME="YOUR_ALGOLIA_INDEX_NAME"
```

```text
# Your Algolia application ID.
NEXT_PUBLIC_ALGOLIA_APPLICATION_ID="YOUR_ALGOLIA_APP_ID"
```

```text
# Your Algolia search only key.
NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_KEY="YOUR_ALGOLIA_SEARCH_ONLY_KEY"
```

```text
# The external URL's that your images are hosted on.
# See https://nextjs.org/docs/basic-features/image-optimization#domains
NEXT_PUBLIC_IMAGE_DOMAINS="nextjs.wpengine.com, nextjsdevstart.wpengine.com, nextjswp.test"
```

```text
# Your WordPress URL.
NEXTAUTH_URL="https://nextjs.wpengine.com/"
```

## Add ENV Variables to Frontend Hosting

Eventually, you'll need to add your ENV Variables to your host. The host needs these variables in order to run a build.

List of hosts:

- [Vercel](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/Add-ENV-Variables-to-Vercel)
