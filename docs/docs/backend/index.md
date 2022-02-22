---
sidebar_position: 1
title: Backend Setup
---

Turning WordPress into a Headless CMS isn't straightforward, so grab a cup of ☕️ because following these steps will take ~20 minutes.

> The following instructions assume you'll be standing up a fresh local install of WordPress.

## Requirements

Make sure you have the following dependencies:

- [Composer](https://getcomposer.org/)
- [Gravity Forms](https://www.gravityforms.com/)
- [Local WP](https://localwp.com/) (or Docker or VVV or whatever you prefer as a WordPress development tool)

---

## WordPress Setup

### Step 1: Install WordPress

Create a new WordPress install. We recommend the following settings:

- Either NGINX or Apache
- PHP 7.4+
- MySQL 5.7+
- Enable SSL certificate

![screenshot of local wp](/img/screenshot-local-by-flywheel.png)

---

### Step 2: Install Plugins and Theme

Now that you've got a local WordPress install, it's time to turn it into a Headless CMS!

1. In your terminal, change directories to your new WordPress install's `/wp-content` directory, then download our [`composer.json`](https://raw.githubusercontent.com/WebDevStudios/nextjs-wordpress-starter/main/backend/composer.json).

```bash
curl -O https://raw.githubusercontent.com/WebDevStudios/nextjs-wordpress-starter/main/backend/composer.json
```

2. Install free plugins and the theme:

```bash
composer install
```

3. Install premium plugin: [Gravity Forms](https://www.gravityforms.com/).

4. Activate all plugins and theme in the WP Dashboard or use [WP CLI](https://wp-cli.org/):

```bash
wp plugin activate --all
```

```bash
wp theme activate wds-headless-theme
```

---

### Step 3: Configure `wp-config.php`

The follow constants needs to be in `wp-config.php`:

```php
define( 'HEADLESS_FRONTEND_URL', 'http://localhost:3000/' );
define( 'PREVIEW_SECRET_TOKEN', 'ANY_RANDOM_STRING');
define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'ANY_RANDOM_STRING' );
```

> To generate a random strings, we recommend using the [WordPress Salt Generator](https://api.wordpress.org/secret-key/1.1/salt/). Just copy and paste any of the generated strings into the constants above.

Learn more about setting up [wp-config.php](/docs/backend/wp-config).

---

### Step 4: Create Pages

In the WordPress Dashboard, navigate to `Pages -> Add New`

Create three blank pages named:

1. Homepage
2. Blog
3. 404

There's nothing else needed for this step.

---

### Step 5: Set Page Options

In the WordPress Dashboard, navigate to `Settings -> Reading -> "Your homepage displays"` and set static pages for Homepage and Posts page:

![screenshot](/img/screenshot-set-page-options.png)

Now navigate to `Settings -> Headless Config -> Custom Page Options` and set the custom 404 page:

![screenshot](/img/screenshot-set-404-page.png)

You should now see your Homepage, Blog, and 404 page like so:

![screenshot](/img/screenshot-set-404-page-2.png)

---

### Step 6: Set Permalinks

In the WordPress Dashboard, navigate to `Settings -> Permalinks`

1. Select the `Day and name` structure:

```text
/%year%/%monthnum%/%day%/%postname%/
```

2. Save the settings.

![screenshot of saving the settings](/img/screenshot-set-permalinks.png)

---

### Step 7: Set Menus

You'll need to create at least one menu, `Primary`. Additionally, you can create a Mobile and Footer menu. In the WordPress Dashboard, navigate to `Appearance -> Menus`

1. Menu Name: `Primary`
2. Display location: `Primary Menu`
3. Click "Save Menu"
4. Add menu items as needed

![screenshot of setting the menu](/img/screenshot-set-menus.png)

## Plugins Setup

### Update Block Registry

In order for the WP GraphQL Gutenberg plugin to create `blockJSON`, you'll need to click this button to update the block registry:

`GraphQL Gutenberg -> Update`

![screenshot of updating graphql gutenberg](/img/screenshot-activate-graphql-gutenberg.png)

### Application Password

The frontend will need to authenticate with WordPress, we can use [Application Passwords](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/).

1. `Users -> Profile -> Scroll to the bottom`
2. Enter a name, e.g, `nextjs-wordpress-starter`
3. `Click -> Add New Application Password`

Copy and paste the password into a safe location. You will need to add both your **WordPress username** and Application password to the `.env` file for the frontend. Learn more about [ENV Variables](/docs/frontend/env-variables).

![screenshot of setting application password](/img/screenshot-set-application-password.png)

---

### WP Search with Algolia

See the [WDS Headless Algolia documentation](https://webdevstudios.github.io/nextjs-wordpress-starter/docs/backend/algolia).

---

### Gravity Forms

See the [WDS Headless Gravity Forms documentation](https://webdevstudios.github.io/nextjs-wordpress-starter/docs/backend/gravity-forms).

---

## Enable Previews

To enable previews, you'll need both a `PREVIEW_SECRET_TOKEN` constant in `wp-config.php` and `WORDPRESS_PREVIEW_SECRET` ENV variable in the frontend `.env` file.

**The token can be any random string, as long as they match in both locations!**

WordPress:

```php
// wp-config.php
define('PREVIEW_SECRET_TOKEN', 'ANY_RANDOM_STRING');
```

Next.js:

```js
// .env
WORDPRESS_PREVIEW_SECRET = 'ANY_RANDOM_STRING'
```

---

## Next Steps

Now that WordPress is ready, head on over and set up the [Frontend](/docs/frontend) to continue.
