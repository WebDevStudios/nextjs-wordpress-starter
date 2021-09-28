---
title: Internal Documentation for WDS
---

The following information pertains to internal tools and workflows required to maintain the Next.js WordPress Starter project.

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

![screenshot](/img/screenshot-github-actions.png)

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
   ![screenshot](/img/screenshot-wpe-prod-release.png)
5. Click "Preview copy" and a modal will appear to let you verify the options
6. Click "Copy environment"
