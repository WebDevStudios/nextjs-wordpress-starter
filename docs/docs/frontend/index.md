---
sidebar_position: 1
title: Setup
---

The following steps will stand up a local install of Next.js.

## Dependencies

Before you get started, make sure you have the following dependencies installed on your computer:

- [Node 14](https://nodejs.org/en/)
- [NPM 7](https://nodejs.org/en/)

## Install

**Step 1: Clone the frontend framework with `create-next-app`**

```bash
npx create-next-app \
    -e https://github.com/WebDevStudios/nextjs-wordpress-starter/tree/canary \
    --example-path frontend \
    --use-npm \
    nextjs-wordpress-starter
```

**Step 2: Change directories**

```bash
cd nextjs-wordpress-starter
```

## Setup ENV Variables

ENV variables are like constants in `wp-config.php`. They're required in order for things like authentication with WordPress and other 3rd party services.

**Step 1: Copy the [sample ENV file](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/.env.sample):**

```bash
cp .env.sample .env
```

**Step 2: Open the `.env` file in your code editor**

**Step 3: Add your credentials and save the file**

Learn more about configuring in the [ENV Var documentation](/docs/frontend/env-variables).

## Start the Development Server

You can kick-off a development server by running:

```bash
npm run dev
```

![screenshot](/img/screenshot-npm-run-dev.png)

It'll take a few seconds to compile, and then you can view the frontend at <http://localhost:3000> You did it! 👏🏻

![screenshot](/img/screenshot-frontend.png)
