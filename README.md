# Next.js WordPress Starter

Our fork of the [official Next.js WordPress Example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress). Used as a starter for headless WordPress projects.

👉 https://nextjs-wordpress-starter.vercel.app

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. Your Success is Our Mission."></a>

## Table of Contents
  - [Preface](#preface)
  - [Frontend Development (Next.js)](#frontend-development-nextjs)
    - [Install Frontend](#install-frontend)
  - [Backend Info (WordPress)](#backend-info-wordpress)
  - [Workflow](#workflow)
    - [Git Workflow](#git-workflow)
    - [Deployments](#deployments)
    - [Git and hosting](#git-and-hosting)
    - [Credentials](#credentials)
  - [Contributing](#contributing)

---

## Preface

You will need the following installed on your computer:

- [Node 12+](https://nodejs.org/en/)
- [NPM 6+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

The following frontend technologies are used on this project:

- [TailwindCSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [PostCSS](https://postcss.org/)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

The WordPress backend is running [WPGraphQL](https://github.com/wp-graphql/wp-graphql). So familiarity with writing [GraphQL](https://graphql.org/) queries is helpful.

---

## Frontend Development (Next.js)

The following instructions will standup a local install of the frontend. It queries data from the WordPress backend via GraphQL. Authentication happens via environment variable `.env.local`.

### Install Frontend

Clone the repo:

```bash
git clone git@github.com:WebDevStudios/nextjs-wordpress-starter.git
```

Install dependencies:

```bash
yarn
```

Create an environment variable:

```bash
cp .env.local.example .env.local
```

*Find the environment variable credentials from `1password --> Next.js Environment Variables`. Copy & paste those credentials into `.env.local`*

Start the development server:

```bash
yarn start
```
The frontend will be available at http://localhost:3000

---

## Backend Info (WordPress)

A vanilla WordPress install hosted at [WP Engine](https://nextjs.wpengine.com) with the following plugins are installed:

**Advanced Custom Fields Pro** - At WebDevStudios we leverage ACF to handle custom post meta and [ACF Blocks](https://www.advancedcustomfields.com/resources/blocks/).

**reSmush.it Image Optimizer** - Keeps image sizes small by optimizing them on upload.

**WDS SSO** - Used as our internal single-sign on service.

**WP GraphQL, WP GraphiQL, and WP GraphQL JWT Authentication** - GraphQL is installed on the WordPress backend and the endpoint is: `https://nextjs.wpengine.com/graphql`

You can use GrapiQL to build queries in the [WordPress Dashboard](https://nextjs.wpengine.com/wp-admin/admin.php?page=wp-graphiql%2Fwp-graphiql.php). Those queries can be copied and pasted right into the Next.js Frontend. You can view the current list of GraphQL queries in [/lib/api.js](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/lib/api.js) JWT Authentication allows the frontend to talk to the backend.

**WP Migrate DB Pro** - Used for moving database and files between environments.

**There is no frontend for WordPress**, but it is running [wd_s](https://github.com/WebDevStudios/wd_s). wd_s houses `/acf-json` and other functions for building ACF Blocks. *If you try to view the WordPress frontend, you will be redirected back to the WordPress dashboard.*

---

## Workflow

Contributing to this project is a lot like any other WDS project...

### Git Workflow

1. Create a `feature` branch off `main`
2. Open a draft Pull Request on Github
3. When finished with your work, undraft, and assign to Lead Engineer for peer review
4. After peer review, PR will be merged back into `main`
5. Repeat ♻️

### Deployments

Vercel is connected to the WebDevStudios Github account. Deployment previews are available for PRs, and merges into `main` are auto deployed.

### Git and hosting
- Backend Hosting https://my.wpengine.com/installs/nextjs
- Frontend Hosting https://vercel.com/webdevstudios/
- Frontend code repo https://github.com/WebDevStudios/nextjs-wordpress-starter
- Backend code repo N/A

### Credentials
- See 1password "Next.js on WPE"
- See 1password "Next.js Environment Variables"
- To view frontend hosting dashboard, ping Greg

## Contributing

Your contributions and support tickets are welcome.
