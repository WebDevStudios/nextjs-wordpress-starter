# Contributing <!-- omit in toc -->

## Introduction

Thanks for contributing — you rock! 🤘

Before getting started, please [view the wiki](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki) and read the following documentation.

---

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Submitting Issues and Feature Requests](#submitting-issues-and-feature-requests)
- [Development](#development)
  - [Environments and Primary Branches](#environments-and-primary-branches)
    - [Next.js (Frontend)](#nextjs-frontend)
    - [WordPress (Backend)](#wordpress-backend)
  - [Git Workflow](#git-workflow)
  - [PR Preview Deployments](#pr-preview-deployments)
  - [Code Linting](#code-linting)
  - [Tips to help your PR get approved](#tips-to-help-your-pr-get-approved)
- [Storybook](#storybook)

---

## Submitting Issues and Feature Requests

Before submitting an issue or making a feature request, please search for existing [issues](https://github.com/WebDevStudios/nextjs-wordpress-starter/issues) or look at our [Github Discussions](https://github.com/WebDevStudios/nextjs-wordpress-starter/discussions).

If you do file an issue, be sure to fill out the report completely!

---

## Development

### Environments and Primary Branches

There are several environments when working with Headless WordPress, both for the Frontend and the Backend.

#### Next.js (Frontend)

- [Vercel Prod](https://nextjs-wordpress-starter.vercel.app/) - `main` branch - Auto deploy
- [Vercel Develop](https://nextjs-wordpress-starter-develop.vercel.app/) - `develop` branch - Auto deploy
- Vercel Preview - Auto generated with each branch and PR.

#### WordPress (Backend)

- [WP Engine Prod](https://nextjs.wpengine.com/wp-admin/) - `main` branch - Manual releases only
- [WP Engine Dev](https://nextjsdevstart.wpengine.com/wp-admin/) - `develop` branch - Auto deploy [via Buddy](https://app.buddy.works/webdevstudios/wds-headless-wordpress/pipelines)

> Note: The WordPress install has a seperate [Github Repo](https://github.com/WebDevStudios/wds-headless-wordpress).

### Git Workflow

1. Create a `feature` branch off `main`
2. Work locally adhering to coding standards
3. Merge your `feature` into `develop` to test on [WPE Dev environment](https://nextjsdevstart.wpengine.com/wp-admin/)
4. When your `feature` has been tested on WPE Dev, open a Pull Request (PR) and fill out the PR template
5. Your PR must pass assertions and both Vercel and Chromatic need to complete a preview deployment successfully
6. After peer review, the PR will be merged back into `main`
7. Repeat ♻️

### PR Preview Deployments

[Vercel](https://vercel.com/webdevstudios/nextjs-wordpress-starter) and [Chromatic](https://www.chromatic.com/) are connected to this Github repository and will automatically build and deploy a unique URL for each Pull Request.

Learn more about [Vercel + Github](https://vercel.com/docs/git/vercel-for-github) and [Chromatic + Github](https://www.chromatic.com/features/publish) integrations.

### Code Linting

This project has several rulesets and uses ESLint, Prettier, and Stylelint to enforce standards.

In addition to real-time linting, you could run the following commands in your terminal.

> These commands are also used in a pre-commit hook.

Lint JavaScript:

```bash
npm run lint:js
```

Lint CSS:

```bash
npm run lint:css
```

Format your code:

```bash
npm run format
```

### Tips to help your PR get approved

1. Make sure your code editor supports real-time linting and has the [recommended extensions](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/recommended-extensions) installed
2. [JSDocs](https://jsdoc.app/) are required for all JavaScript functions
3. Run `npm run build && npm run start` before submitting your PR, to ensure a successful build
4. Be courteous in your communications

---

## Storybook

To work with Storybook on your Local, run the following command:

```bash
npm run storybook
```

Stories are written in `.mdx` and should be placed next to the component.

[Learn how to write stories for this starter](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/component-story).

---
