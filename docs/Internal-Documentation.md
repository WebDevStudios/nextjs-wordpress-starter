# Introduction

The following information pertains to internal tools and workflows required to maintain this Starter.

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
  - [WDS Headless WordPress](#wds-headless-wordpress)
  - [WP Engine](#wp-engine)
  - [Assertions](#assertions)
  - [Chromatic](#chromatic)
  - [Migrate DB Pro](#migrate-db-pro)
  - [Algolia](#algolia)
  - [Copy WP Engine Environments](#copy-wp-engine-environments)

## WDS Headless WordPress

There is a Github repo for WordPress. This repo manages plugins and the headless theme. Future projects should probably mimic this setup:

<https://github.com/WebDevStudios/wds-headless-wordpress>

**Note: There is no frontend for WordPress**-- but it is running a headless theme which houses `/acf-json` and other headless-related functions.

## WP Engine

There are 2 WordPress environments on WP Engine:

- [Develop](https://nextjsdevstart.wpengine.com/wp-admin/)
- [Production](https://nextjs.wpengine.com/wp-admin)

Use the orange "WebDevStudios Login" button to log in.

## Assertions

Assertions (linting) occurs via Github Actions and is triggered on either a pull request or a manually.

To trigger a manual run via your local:

```bash
gh run list --workflow=assertions.yml
```

> Note: This requires the Github CLI

To trigger a manual run via GUI:

![screenshot](https://dl.dropbox.com/s/oh3oi3sutpamz2c/Screen%20Shot%202021-04-16%20at%2007.52.04.png?dl=0)

## Chromatic

This project supports UI review via Chromatic via Github Actions triggered on a pull request.

View this project's [Chromatic](https://chromatic.com/library?appId=5fe0becf19ad53002147b034&branch=staging) by logging in with your WDS Github account.

### 1Password

All of the credentials are in the following vault:

```text
1Password --> Next.js Starter
```

## Migrate DB Pro

You can use Migrate DB Pro to pull databases and files. Please see 1password for credentials

## Algolia

The login and API credentials are in password.

## Copy WP Engine Environments

WP Engine supports [copying environments](https://wpengine.com/support/copy-site/). This should be done at the end of two week sprints (or as needed).

**The following steps will copy Develop to Staging:**

1. Log into the WP Engine [User Portal](https://my.wpengine.com/sites)
2. Click on [Nextjsstgstart](https://my.wpengine.com/installs/nextjsstgstart)
3. In the top right corner, click the "Copy environment" button
4. Select the options:
   ![screenshot](https://dl.dropbox.com/s/uvzm2trqbgbpyky/Screen%20Shot%202020-12-21%20at%2011.19.34%20AM.png?dl=0)
5. Click "Preview copy" and a modal will appear to let you verify the options
6. Click "Copy environment"
