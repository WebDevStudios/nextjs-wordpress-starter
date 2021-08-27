# Introduction <!-- omit in toc -->

The following steps will stand up a local install of Next.js.

## Table of Contents <!-- omit in toc -->

- [Dependencies](#dependencies)
- [Install](#install)
- [Setup ENV Variables](#setup-env-variables)
- [Start the Development Server](#start-the-development-server)
- [Next Steps](#next-steps)

## Dependencies

Before you get started, make sure you have the following dependencies installed on your computer:

- [Node 14](https://nodejs.org/en/)
- [NPM 7](https://nodejs.org/en/)

## Install

**Step 1: Clone the repo**

```bash
git clone git@github.com:WebDevStudios/nextjs-wordpress-starter.git
```

**Step 2: Change directories**

```bash
cd nextjs-wordpress-starter
```

**Step 3: Install dependencies**

```bash
npm i --legacy-peer-deps
```

## Setup ENV Variables

ENV variables are like constants in `wp-config.php`. They're required in order for things like authentication with WordPress and other 3rd party services.

**Step 1: Copy the [sample ENV file](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/.env.sample):**

```bash
cp .env.sample .env
```

**Step 2: Open the `.env` file in your code editor**

**Step 3: Add your credentials and save the file**

Learn more about configuring in the [ENV Var documentation](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/env-variables).

## Start the Development Server

You can kick-off a development server by running:

```bash
npm run dev
```

![screenshot](https://dl.dropbox.com/s/wqsqtc2pnj8pv2v/Screen%20Shot%202021-02-17%20at%2015.32.46.png?dl=0)

It'll take a few seconds to compile, and then you can view the frontend at <http://localhost:3000>  You did it! 👏🏻

![screenshot](https://dl.dropbox.com/s/pa3ru8gv6pama8y/Screen%20Shot%202021-02-17%20at%2015.26.30.png?dl=0)

## Next Steps

Now that you have a working local, head over the [Frontend Development Overview](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/frontend-overview) docs to get start developing with the Next.js WordPress Starter.
