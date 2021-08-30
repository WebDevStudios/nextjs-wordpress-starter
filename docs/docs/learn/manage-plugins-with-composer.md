---
title: Managing WordPress Plugins
---

This explains how to install and update the plugins for this starter with Composer.

> Note: Currently, this project only supports Composer v1

## The Basics

[Full Composer documentation][cmp-docs] is on their website.

**NOTICE: There are two composer files that are part of this starter**: `composer.json` and `composer-public.json`. The default `composer.json` file references commercial plugins (ACF Pro, GravityForms, Yoast Premium) that only WDS employees have access to. To use the "public" composer file uses free plugins, prefix ALL composer commands with `COMPOSER=composer-public.json`

Example: `COMPOSER=composer-public.json composer self-update --1 && composer install`

[cmp-docs]: https://getcomposer.org/doc/01-basic-usage.md

Once you've pulled down the repo into your `wp-content` folder, navigate there
and run

```bash
composer self-update --1 && composer install
```

This will install the plugins at the exact version that is running on WP Engine.

## Semantic Versioning

Composer-installed libraries and plugins can be listed with version constraints
in `composer.json`. [Composer documentation has a full page on it][cmp-vers], but
the most common notations are:

- **No symbol**: locks the library at that specific version. Must be explicitly
  changed.
- **Tilde `~`**: allows upgrading the last digit in the version. For example, a
  plugin at `~1.2.3` could be upgraded to any version beginning with `1.2.`.
- **Carat `^`**: allows upgrading up to the first digit in the version. For example,
  a plugin at `^1.2.3` could be upgraded to any version beginning with `1.`.

[cmp-vers]: https://getcomposer.org/doc/articles/versions.md

## Updating plugins

To update a specific plugin within the version constraints listed, run

```bash
composer update [PLUGIN NAME]
```

where `[PLUGIN NAME]` is the name of the plugin as it appears in the `composer.json`
file.

The command

```bash
composer update
```

without a plugin specified will update all plugins within the constraints.

To update a plugin outside of the listed constraints (such as when a plugin installed
at `1.2.3` needs to be updated to `2.0.0`), first change the version listed in
`composer.json`, then run the `update` command as seen above.

**This will change the `composer.lock` file. You should check this file into Git.**
This way, any other users in the repository will be able to use the new version.

## Installing plugins

WordPress plugins can be installed via Composer from three sources:

- [WordPress Packagist][wpkg], a Composer-compatible repository
  for plugins in the [WordPress.org directory][wporg].
- [WebDevStudios packages][wdspk], a Composer-compatible repository for non-public
  plugins available for WDS projects. _Available for WDS only_
- Individual Git repos. These repos must be listed in the `repositories` section of
  `composer.json`.

[wpkg]: https://wpackagist.org
[wporg]: https://wordpress.org/plugins/
[wdspk]: https://packages.wdslab.com

To install a plugin from these sources, add the fully qualified name to the `require`
section of `composer.json` along with the version constraint you want. Then run
`composer update` as listed above.

Composer will install the plugin source code, but it must still be activated in the
WordPress admin.
