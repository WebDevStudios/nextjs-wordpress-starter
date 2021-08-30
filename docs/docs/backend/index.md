---
sidebar_position: 1
title: Setup
---

Turning WordPress into a Headless CMS isn't straightforward, so grab a cup of coffee because following these steps will take 20-30 minutes.

> \***\*Note: The following instructions assume you'll be standing up a fresh local.\*\***

## Dependencies

Before you get started, make sure you have the following dependencies installed on your computer:

- [Local WP](https://localwp.com/)
- [Composer](https://getcomposer.org/) v1

You will also need the following premium WordPress plugins:

- [Advanced Custom Fields Pro](https://www.advancedcustomfields.com/pro/)
- [Gravity Forms](https://www.gravityforms.com/)

## Setup WordPress

### Step 1: Create a new site in Local

Using [Local's user interface](https://localwp.com/), follow the instructions to create a new WordPress install.

- NGINX or Apache
- PHP 7.4 or 8
- MySQL 5 or 8

![screenshot](/img/screenshot-local-by-flywheel.png)

### Step 2: Clone the [WDS Headless WordPress repo](https://github.com/WebDevStudios/wds-headless-wordpress)

You'll need to change directories into your new WordPress install, remove `wp-content`, and clone the repo.

> Note: This step will erase the `/wp-content` directory and replace it with the contents of our repo. If you're using a fresh install, this is fine. If not, make sure you have a backup of your data!

```bash
rm -rf wp-content && git clone https://github.com/WebDevStudios/wds-headless-wordpress.git wp-content
```

### Step 3: Activate the WDS Headless theme

`Appearance --> Themes --> WDS Headless --> Activate`

![screenshot](/img/screenshot-headless-theme.png)

### Step 4: Install Plugins

There are **two** possible ways to install plugins, via TGM Plugin Activation or Composer.

#### Option 1: With TGM Plugin Activation

The TGM library can install most of the WordPress plugins needed in a single click.

After activating the theme, Click --> `Begin installing Plugins`

![screenshot](/img/screenshot-tgm-theme.png)

#### Option 2: With Composer

Instead of using the TGM library, you can use Composer to download all WordPress plugins. Make sure you're in the `/wp-content` directory:

```bash
cd wp-content
```

Because WDS relies heavy on commercial plugins like ACF Pro and Gravity Forms, we have split the installation in two, one for WebDevStudios team members:

```bash
composer self-update --1 && composer install
```

And one for the general public:

```bash
composer self-update --1 && COMPOSER=composer-public.json composer install
```

Members of the public can use all normal composer commands, but they all must be prefixed with `COMPOSER=composer-public.json`. Functionality for ACF and GravityForms will be reduced or absent.

Learn more about [working with Composer](/docs/docs/learn/manage-plugins-with-composer).

#### Activate all the plugins

![screenshot](/img/screenshot-activate-all-plugins.png)

#### Update WP GraphQL Gutenberg

In order for WP GraphQL Gutenberg plugin to create `blockJSON`, you'll need to click this button to update the block registry:

`GraphQL Gutenberg --> Update`

![screenshot](/img/screenshot-activate-graphql-gutenberg.png)

### Step 5: Configure `wp-config.php`

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

Learn more about setting up [wp-config.php](/docs/docs/backend/wp-config).

### Step 6: Create Pages

You will need to create three pages:

`Pages --> Add New`

1. Homepage
2. Blog
3. 404

### Step 7: Set Page Options

Set static pages:

`Settings --> Reading --> "Your homepage displays"`

![screenshot](/img/screenshot-set-page-options.png)

Set the custom 404 page:

`Headless Config --> Options`

![screenshot](/img/screenshot-set-404-page.png)

You should now see your Homepage, Blog, and 404 page like so:

![screenshot](/img/screenshot-set-404-page-2.png)

### Step 8: Set Permalinks

`Settings --> Permalinks --> Custom Structure`

The custom structure needs to be: `/blog/%postname%/`

![screenshot](/img/screenshot-set-permalinks.png)

### Step 9: Set Menus

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

Copy and paste the password into a safe location. You will need to add both your **WordPress username** and Application password to the `.env` file for the frontend. Learn more about [ENV Variables](/docs/docs/frontend/env-variables).

![screenshot](/img/screenshot-set-application-password.png)

## Setup WP Search with Algolia

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

## Setup Gravity **Forms**

You need to enable the Gravity Forms REST-API:

`Forms --> Settings --> REST API --> Check "Enabled"`

![screenshot](/img/screenshot-setup-gravity-forms.png)

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

Now that WordPress is ready, head on over and set up the [Frontend](/docs/docs/frontend/index) to continue.
