# Contributing <!-- omit in toc -->

## Introduction

Thanks for contributing — you rock! 🤘

Before getting started, please [view the wiki](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki) and read the following documentation.

---

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Submitting Issues and Feature Requests](#submitting-issues-and-feature-requests)
- [Development](#development)
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

### Git Workflow

1. Create a `feature` branch off `main`
2. Work locally adhering to coding standards
3. When ready, open a draft Pull Request on Github
4. When finished, fill out the PR template and publish your PR
5. Your PR must pass assertions and deploy successfully
6. After peer review, the PR will be merged back into `main`
7. Repeat ♻️

### PR Preview Deployments

[Vercel](https://vercel.com/webdevstudios/nextjs-wordpress-starter) is connected to this Github repository and will automatically build and deploy a unique URL for each Pull Request.

Learn more about [Vercel + Github integration](https://vercel.com/docs/git/vercel-for-github).

### Code Linting

This project has several rulesets and uses ESLint, Prettier, and Stylelint to enforce standards.

In addition to real-time linting, you could run the following commands in your terminal. These commands are also used by Lefthook during a commit.

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
