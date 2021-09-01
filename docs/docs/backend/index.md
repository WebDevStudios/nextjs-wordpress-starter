---
sidebar_position: 1
title: Setup
---

Turning WordPress into a Headless CMS isn't straightforward, so grab a cup of ☕️ because following these steps will take 20-30 minutes.

> The following instructions assume you'll be standing up a fresh local.

## Dependencies

Before you get started, make sure you have the following dependencies installed on your computer:

- [Local WP](https://localwp.com/)
- [Composer](https://getcomposer.org/) v1

You may also want the following premium WordPress plugins:

- [Advanced Custom Fields Pro](https://www.advancedcustomfields.com/pro/)
- [Gravity Forms](https://www.gravityforms.com/)

## Setup WordPress

### Step 1: Create a new site in Local

Using [Local's user interface](https://localwp.com/), follow the instructions to create a new WordPress install.

- NGINX or Apache
- PHP 7.4 or 8
- MySQL 5 or 8

![screenshot](/img/screenshot-local-by-flywheel.png)

### Step 2: Install plugins and theme

There are **two** possible ways to install plugins, via WP Admin or Composer.

#### Option 1: Via WP Admin

1. Download the WDS Headless theme and plugins:

   - [WDS Headless Theme](https://nextjs.wpengine.com/downloads/wds-headless-theme.zip)
   - WDS Headless Plugins:
     - [WDS Headless Core](https://nextjs.wpengine.com/downloads/wds-headless-core.zip) (Required)
     - [WDS Headless Blocks](https://nextjs.wpengine.com/downloads/wds-headless-blocks.zip) (Recommended, for additional Gutenberg editor customizations)
     - [WDS Headless ACF](https://nextjs.wpengine.com/downloads/wds-headless-acf.zip) (Optional, only if using Advanced Custom Fields – some functionality requires premium version)
     - [WDS Headless Algolia](https://nextjs.wpengine.com/downloads/wds-headless-algolia.zip) (Optional, only if using WP Search with Algolia)
     - [WDS Headless Gravity Forms](https://nextjs.wpengine.com/downloads/wds-headless-gravityforms.zip) (Optional, only if using Gravity Forms)
     - [WDS Headless SEO](https://nextjs.wpengine.com/downloads/wds-headless-seo.zip) (Optional, only if using Yoast SEO)

2. Upload and activate the WDS Headless Theme (Appearance > Themes > Add New > Upload Theme > select `wds-headless-theme.zip`)

3. Upload and activate the WDS Headless plugins (Plugins > Add New > Upload Plugin > select plugin `.zip` file)

4. Once the WDS Headless theme and plugin(s) are activated, the TGM library can install most of the additional plugins that are required or recommended, in a single click. After activation, Click `Begin installing Plugins`

![screenshot](/img/screenshot-tgm-theme.png)

#### Option 2: Via Composer

1. Change directories into your new WordPress install's `wp-content` directory then create a `composer.json` file, using the [WDS Headless Starter Composer setup as an example](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/243686e8bb1957a57a8d7bdb341c8ca452786754/composer.json).

```bash
cd wp-content && touch composer.json
```

> The WDS Headless `composer.json` contains dependencies that are premium WP plugins. If you intend to use these plugins, you will need to either update the package paths to point to your own package locations or install those plugins via WP admin. Remove any dependencies from your `composer.json` that you will not be using or do not have access to.

Learn more about [working with Composer](/docs/learn/manage-plugins-with-composer).

1. Install plugins and themes:

```bash
composer self-update --1 && composer install
```

3. Activate all plugins via WP admin or [WP CLI](https://wp-cli.org/):

```bash
wp plugin activate --all
```

#### Update WP GraphQL Gutenberg Block Registry

In order for WP GraphQL Gutenberg plugin to create `blockJSON`, you'll need to click this button to update the block registry:

`GraphQL Gutenberg --> Update`

![screenshot](/img/screenshot-activate-graphql-gutenberg.png)

### Step 3: Configure `wp-config.php`

The follow constants needs to be in `wp-config.php`:

```php
// The URL of the Next.js WordPress Starter.
define( 'HEADLESS_FRONTEND_URL', 'http://localhost:3000/' );
```

```php
// Any random string.
define( 'PREVIEW_SECRET_TOKEN', 'ANY_RANDOM_STRING');
```

```php
// https://www.wpgraphql.com/extenstion-plugins/wpgraphql-jwt-authentication/
define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'your-secret-token' );
```

Learn more about setting up [wp-config.php](/docs/backend/wp-config).

### Step 4: Create Pages

You will need to create three pages:

`Pages --> Add New`

1. Homepage
2. Blog
3. 404

### Step 5: Set Page Options

Set static pages:

`Settings --> Reading --> "Your homepage displays"`

![screenshot](/img/screenshot-set-page-options.png)

Set the custom 404 page:

`Headless Config --> Options`

![screenshot](/img/screenshot-set-404-page.png)

You should now see your Homepage, Blog, and 404 page like so:

![screenshot](/img/screenshot-set-404-page-2.png)

### Step 6: Set Permalinks

`Settings --> Permalinks --> Custom Structure`

The custom structure needs to be: `/blog/%postname%/`

![screenshot](/img/screenshot-set-permalinks.png)

### Step 7: Set Menus

You'll need to create at least one menu, `Primary`. Additionally, you can create a Mobile and Footer menu.

`Appearance --> Menus`

1. Menu Name: `Primary`
2. Display location: `Primary Menu`
3. Click "Save Menu"
4. Add menu items as needed

![screenshot](/img/screenshot-set-menus.png)

## Setup Application Password

The frontend will need to authenticate with WordPress for some things, luckily, we can use the new [Application Passwords](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/) that come with WordPress 5.6+

1. `Users --> Profile --> Scroll to the bottom`
2. Enter a name, e.g, `nextjs-wordpress-starter`
3. `Click --> Add New Application Password`

Copy and paste the password into a safe location. You will need to add both your **WordPress username** and Application password to the `.env` file for the frontend. Learn more about [ENV Variables](/docs/frontend/env-variables).

![screenshot](/img/screenshot-set-application-password.png)

## Setup WP Search with Algolia (Optional)

See the [WDS Headless Algolia documentation](https://webdevstudios.github.io/nextjs-wordpress-starter/docs/backend/algolia).

## Setup Gravity Forms (Optional)

See the [WDS Headless Gravity Forms documentation](https://webdevstudios.github.io/nextjs-wordpress-starter/docs/backend/gravity-forms).

## Enable Previews

To enable previews, you'll need both a `WORDPRESS_PREVIEW_SECRET` constant in `wp-config.php` and `WORDPRESS_PREVIEW_SECRET` ENV variable in the frontend `.env` file.

**The token can be any random string, as long as they match in both locations!**

WordPress:

```php
// wp-config.php
define('WORDPRESS_PREVIEW_SECRET', 'ANY_RANDOM_STRING');
```

Next.js:

```js
// .env
WORDPRESS_PREVIEW_SECRET = 'ANY_RANDOM_STRING'
```

## Next Steps

Now that WordPress is ready, head on over and set up the [Frontend](/docs/frontend/index) to continue.
