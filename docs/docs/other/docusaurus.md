---
title: Docusaurus
---

The documentation website is powered by [Docusaurus](https://docusaurus.io/) and served from Github Pages.

## Content Workflow

1. Create a new branch off `canary` (e.g,. `feature/my-doc-update`)
2. From the root of the project, run `npm run dev:docs` to start a local server
3. Add or edit markdown files in the `docs/` directory
4. Commit your changes and push to Github
5. Open a Pull Request and mark it as ready for review

## NPM Scripts

You can run the following commands from the root of the project:

| Command                | Result                                                    |
| ---------------------- | --------------------------------------------------------- |
| `npm run dev:docs`     | Start a local dev server                                  |
| `npm run lint:docs `   | Format and lint markdown files                            |
| `npm run build:docs`   | Run a build locally                                       |
| `npm run serve:docs `  | Serve a statically generated version of the docs locally  |
| `npm run publish:docs` | Publish the docs to Github Pages (used by Github Actions) |

## Github Actions

This repo uses a [Github Action](https://github.com/WebDevStudios/nextjs-wordpress-starter/tree/canary/.github/workflows) which automatically publishes changes to Github Pages.

### Key Pair

The Github Action requires a key pair to be set up.

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Copy the public key and add it to `Github Repo --> Settings --> Deploy Keys`. The Private Key will be added as an ENV variable (see below).

### ENV Variables

The following ENV variables are required by `npm run publish:docs` command. They must be added to `Github Repo --> Settings --> Secrets --> Actions`

| ENV Variable           | Definition                                 |
| ---------------------- | ------------------------------------------ |
| `GH_PAGES_PRIVATE_KEY` | Private key used to deploy to Github Pages |
| `GIT_USER_EMAIL`       | Email address used to commit to Github.    |
| `GIT_USER_NAME`        | Name used to commit to Github              |
