# Next.js WordPress Starter

WebDevStudios fork of the [official Next.js WordPress Example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress). Used as our starter for Next.js frontend projects.

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. Your Success is Our Mission."></a>

## Table of Contents
- [Environments](#environments)
- [Credentials](#credentials)
- [Frontend Development (Next.js)](#frontend-development-nextjs)
  - [Workflow](#workflow)
  - [Deployments](#deployments)
- [Backend Development (WordPress)](#backend-development-wordpress)
  - [WordPress Plugins](#wordpress-plugins)
    - [Advanced Custom Fields Pro](#advanced-custom-fields-pro)
    - [reSmush.it Image Optimizer](#resmushit-image-optimizer)
    - [WDS SSO](#wds-sso)
    - [WP GraphQL, WP GraphiQL, and WP GraphQL JWT Authentication](#wp-graphql-wp-graphiql-and-wp-graphql-jwt-authentication)
    - [WP Migrate DB Pro](#wp-migrate-db-pro)
  - [WordPress Theme](#wordpress-theme)
    - [wd_s](#wd_s)

## Environments
- [WordPress Backend](https://nextjs.wpengine.com/) (WPE)
- [Backend Hosting](https://my.wpengine.com/installs/nextjs) (WPE)
- [Next.js Frontend](https://nextjs-wordpress-starter.vercel.app) (Vercel)
- [Frontend Hosting & Deployments](https://vercel.com/webdevstudios/) (Vercel)

## Credentials
- See 1password "Next.js on WPE"
- See 1password "Next.js Environment Variables"
- To view frontend hosting dashboard, ping Greg

## Frontend Development (Next.js)

1. Clone the repo:

```bash
git clone git@github.com:WebDevStudios/nextjs-wordpress-starter.git
```

2. Install dependencies:

```bash
yarn install
```

3. Create environment variable:

```bash
cp .env.local.example .env.local
```
4. Paste in the info from 1password into `.env.local`

5. Start the development server:

```bash
yarn start
```
The site will be available at http://localhost:3000

### Workflow

Like any other WDS project...

1. Create a `feature` branch off `main`
2. Open a draft Pull Request on Github
3. When finished with your work, undraft, and assign to Lead Engineer for peer review
4. After peer review, PR will be merged back into `main`
5. Repeat ♻️

### Deployments

Vercel is connected to the WebDevStudios Github account. Deployment previews are available for PRs, and merges into `main` are auto deployed.

## Backend Development (WordPress)

At this time, there is not yet a seperate git repository for the WordPress backend. The backend is hosted at [WP Engine](https://nextjs.wpengine.com).

### WordPress Plugins

#### Advanced Custom Fields Pro

At WebDevStudios we leverage ACF to handle custom post meta and [ACF Blocks](https://www.advancedcustomfields.com/resources/blocks/).

#### reSmush.it Image Optimizer

Keeps image sizes small by optimizing them on upload.

#### WDS SSO

Used as our internal single-sign on service.

#### WP GraphQL, WP GraphiQL, and WP GraphQL JWT Authentication

GraphQL is installed on the WordPress backend and the endpoint is: `https://nextjs.wpengine.com/graphql`

You can use GrapiQL to build queries in the [WordPress Dashboard](https://nextjs.wpengine.com/wp-admin/admin.php?page=wp-graphiql%2Fwp-graphiql.php). Those queries can be copied and pasted right into the Next.js Frontend. You can view the current list of GraphQL queries in [/lib/api.js](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/lib/api.js)

JWT Authentication allows the frontend to talk to the backend.

#### WP Migrate DB Pro

Used for moving database and files between environments.

### WordPress Theme

There is no frontend for WordPress, but there is a theme for added functionality, as if it were another plugin. If you try to view the WordPress frontend, you will be redirected back to the WordPress dashboard.

#### wd_s

[wd_s](https://github.com/WebDevStudios/wd_s) houses `/acf-json` and other functions for building ACF Blocks.
