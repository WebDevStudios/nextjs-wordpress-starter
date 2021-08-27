# Introduction <!-- omit in toc -->

Turning WordPress into a Headless CMS isn't straightforward, so grab a cup of coffee because following these steps will take 20-30 minutes.

> \***\*Note: The following instructions assume you'll be standing up a fresh local.\*\***

## Table of Contents <!-- omit in toc -->

- [Dependencies](#dependencies)
- [Setup WordPress](#setup-wordpress)
  - [Step 1: Create a new site in Local](#step-1-create-a-new-site-in-local)
  - [Step 2: Clone the WDS Headless WordPress repo](#step-2-clone-the-wds-headless-wordpress-repo)
  - [Step 3: Activate the WDS Headless theme](#step-3-activate-the-wds-headless-theme)
  - [Step 4: Install Plugins](#step-4-install-plugins)
    - [With TGM Plugin Activation](#with-tgm-plugin-activation)
    - [With Composer](#with-composer)
    - [Activate all the plugins:](#activate-all-the-plugins)
    - [Update WP GraphQL Gutenberg](#update-wp-graphql-gutenberg)
  - [Step 5: Configure `wp-config.php`](#step-5-configure-wp-configphp)
  - [Step 6: Create Pages](#step-6-create-pages)
  - [Step 7: Set Page Options](#step-7-set-page-options)
  - [Step 8: Set Permalinks](#step-8-set-permalinks)
  - [Step 9: Set Menus](#step-9-set-menus)
- [Setup Application Password](#setup-application-password)
- [Setup WP Search with Algolia](#setup-wp-search-with-algolia)
  - [Push Content to Algolia](#push-content-to-algolia)
- [Setup Gravity **Forms**](#setup-gravity-forms)
- [Enable Previews](#enable-previews)
- [Next Steps](#next-steps)

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

![screenshot](https://dl.dropbox.com/s/1hkfo6ncdlepf82/Screen%20Shot%202021-02-17%20at%2015.10.42.png?dl=0)

### Step 2: Clone the [WDS Headless WordPress repo](https://github.com/WebDevStudios/wds-headless-wordpress)

You'll need to change directories into your new WordPress install, remove `wp-content`, and clone the repo.

> Note: This step will erase the `/wp-content` directory and replace it with the contents of our repo. If you're using a fresh install, this is fine. If not, make sure you have a backup of your data!

```bash
rm -rf wp-content && git clone https://github.com/WebDevStudios/wds-headless-wordpress.git wp-content
```

### Step 3: Activate the WDS Headless theme

`Appearance --> Themes --> WDS Headless --> Activate`

![screenshot](https://dl.dropbox.com/s/8ukcjy78qzm53pt/Screen%20Shot%202021-02-23%20at%2008.32.26.png?dl=0)

### Step 4: Install Plugins

There are **two** possible ways to install plugins, via TGM Plugin Activation or Composer.

#### Option 1: With TGM Plugin Activation

The TGM library can install most of the WordPress plugins needed in a single click.

After activating the theme, Click --> `Begin installing Plugins`

![screenshot](https://dl.dropbox.com/s/94pqj40fv34mc6a/Screen%20Shot%202021-02-23%20at%2008.27.16.png?dl=0)

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

Learn more about [working with Composer](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/manage-plugins-with-composer).

#### Activate all the plugins:

![screenshot](https://dl.dropbox.com/s/unljbimz3xj9oh6/Screen%20Shot%202021-02-17%20at%2010.46.28.png?dl=0)

#### Update WP GraphQL Gutenberg

In order for WP GraphQL Gutenberg plugin to create `blockJSON`, you'll need to click this button to update the block registry:

`GraphQL Gutenberg --> Update`

![screenshot](https://dl.dropbox.com/s/s3fib8b2e954f4c/Screen%20Shot%202021-02-23%20at%2008.38.37.png?dl=0)

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

Learn more about setting up [wp-config.php](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/wp-config).

### Step 6: Create Pages

You will need to create three pages:

`Pages --> Add New`

1. Homepage
2. Blog
3. 404

### Step 7: Set Page Options

Set static pages:

`Settings --> Reading --> "Your homepage displays"`

![screenshot](https://dl.dropbox.com/s/6oh0gooklogvkon/Screen%20Shot%202021-02-17%20at%2009.19.27.png?dl=0)

Set the custom 404 page:

`Headless Config --> Options`

![screenshot](https://dl.dropbox.com/s/jvo0go66j2pqgp1/Screen%20Shot%202021-02-17%20at%2009.21.20.png?dl=0)

You should now see your Homepage, Blog, and 404 page like so:

![screenshot](https://dl.dropbox.com/s/gm2b7lyxmuwtkq6/Screen%20Shot%202021-02-17%20at%2009.33.09.png?dl=0)

### Step 8: Set Permalinks

`Settings --> Permalinks --> Custom Structure`

The custom structure needs to be: `/blog/%postname%/`

![screenshot](https://dl.dropbox.com/s/y2q2bm5fsnx4724/Screen%20Shot%202021-02-17%20at%2009.23.05.png?dl=0)

### Step 9: Set Menus

You'll need to create at least one menu, `Primary`. Additionally, you can create a Mobile and Footer menu.

`Appearance --> Menus`

1. Menu Name: `Primary`
2. Display location: `Primary Menu`
3. Click "Save Menu"
4. Add menu items as needed

![screenshot](https://dl.dropbox.com/s/3826fd6pvnthb8s/Screen%20Shot%202021-04-12%20at%2013.21.51.png?dl=0)

## Setup Application Password

The frontend will need to authenticate with WordPress for some things, luckily, we can use the new [Application Passwords](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/) that come with WordPress 5.6+

1. `Users --> Profile --> Scroll to the bottom`
2. Enter a name, e.g, `nextjs-wordpress-starter`
3. `Click --> Add New Application Password`

Copy and paste the password into a safe location. You will need to add both your **WordPress username** and Application password to the `.env` file for the frontend. Learn more about [ENV Variables](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/env-variables).

![screenshot](https://dl.dropbox.com/s/8lwi51hv9n0hxpe/Screen%20Shot%202021-02-17%20at%2015.05.56.png?dl=0)

## Setup WP Search with Algolia

Before you can complete this step, you need to sign-up for a free account at [Algolia.com](https://www.algolia.com/).

After you sign up for an account, create a new "app" and then click on "API Keys".

![screenshot](https://dl.dropbox.com/s/kgpbybafpip3e20/Screen%20Shot%202021-02-17%20at%2014.58.22.png?dl=0)

Copy your API keys into the WP Search w/ Algolia Settings Page:

`Algolia Search --> Settings`

![screenshot](https://dl.dropbox.com/s/s572bifcpasmp8m/Screen%20Shot%202021-02-17%20at%2014.55.03.png?dl=0)

You can name the `Index name prefix` whatever you'd like.

### Push Content to Algolia

1. Navigate to `Algolia Search --> Search Page`
2. Click the blue button to `"Re-index search page records"`

![screenshot](https://dl.dropbox.com/s/gpirmrtnuzfsf0m/Screen%20Shot%202021-02-17%20at%2015.15.26.png?dl=0)

## Setup Gravity **Forms**

You need to enable the Gravity Forms REST-API:

`Forms --> Settings --> REST API --> Check "Enabled"`

![screenshot](https://dl.dropbox.com/s/j358aux9lbm10du/Screen%20Shot%202021-02-17%20at%2015.02.25.png?dl=0)

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

Now that WordPress is ready, head on over and set up the [Frontend](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/Frontend-Setup) to continue.
