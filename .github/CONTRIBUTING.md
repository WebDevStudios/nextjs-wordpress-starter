# Thanks for contributing — you rock! 🤘 <!-- omit in toc -->

- [Development](#development)
  - [Git Workflow](#git-workflow)
  - [Deployments](#deployments)
  - [Storybook](#storybook)
- [Coding standards](#coding-standards)
  - [Tips to help your PR get approved](#tips-to-help-your-pr-get-approved)
- [Submitting bug reports and feature requests](#submitting-bug-reports-and-feature-requests)

## Development

### Git Workflow

1. Create a `feature` branch off `staging`
2. Work locally adhereing to coding standards
3. When ready, open a draft Pull Request on Github
4. When finished, fill out the PR template and publish your PR
5. Your PR must pass assertions and deploy successfully
6. After peer review, the PR will be merged back into `staging`
7. Repeat ♻️

### Deployments

[Vercel](https://nextjs-wordpress-starter-gregrickaby.webdevstudios.vercel.app) is connected to this Github repository and will automatically build and deploy. Learn more about [Vercel + Github integration](https://vercel.com/docs/git/vercel-for-github).

### Storybook

To work with Storybook on your Local, run the following command:

```bash
yarn storybook
```

Stories are written in `.mdx` and should be placed next to the component. Learn more about [Storybook](https://storybook.js.org/).

## Coding standards

Pull requests _must pass_ all assertions and component changes will be reviewed in Chromatic prior to consideration.

### Tips to help your PR get approved

1. Make sure your code editor supports real-time linting.
2. JSDocs are important and must be completely filled out.
3. Run `yarn build && yarn start` before submitting your PR, to ensure a build will be successful
4. Be courteous

In addition to real-time linting, you could run the following commands in your terminal (these commands are also used by Husky during a commit!)

Lint JavaScript:

```bash
yarn run lint:js
```

Lint CSS:

```bash
yarn run lint:css
```

Format your code:

```bash
yarn run format
```

## Submitting bug reports and feature requests

Before submitting an issue or making a feature request, please search for existing [issues](https://github.com/WebDevStudios/nextjs-wordpress-starter/issues) or look at our [Github Discussions](https://github.com/WebDevStudios/nextjs-wordpress-starter/discussions).

If you do fill out a bug report, be sure to fill out the report completely!
