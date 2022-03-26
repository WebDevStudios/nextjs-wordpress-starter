---
title: Contributing
---

There are many ways to contribute to this project:

- Discuss [open issues](https://github.com/WebDevStudios/nextjs-wordpress-starter/issues) to help define the future of the project
- [Submit bugs](https://github.com/WebDevStudios/nextjs-wordpress-starter/issues) and help verify fixes
- Review and discuss [pull requests](https://github.com/WebDevStudios/nextjs-wordpress-starter/pulls)
- Level up the [documentation](https://webdevstudios.github.io/nextjs-wordpress-starter/docs/other/docusaurus)
- Monitor and help answer questions in [Github Discussions](https://github.com/WebDevStudios/nextjs-wordpress-starter/discussions)

## Monorepo Folder Structure

This project is a monorepo, which makes it easier to develop all the different codebases in a central location. The folder structure looks like:

```text
nextjs-wordpress-starter
├── docs
├── frontend
├── packages
├── scripts
└── tests
```

- **/docs**: The documentation for this project, powered by [Docusaurus](https://webdevstudios.github.io/nextjs-wordpress-starter/docs/other/docusaurus).
- **/frontend**: Currently, this holds the codebase for the [Next.js powered frontend](/docs/frontend/folder-structure).
- **/packages**: In the future this will house our NPM packages.
- **/scripts**: In the future this will house build scripts.
- **/tests**: In the future this will house tests.

## Submitting Issues and Feature Requests

Before submitting an issue or making a feature request, please search for existing [issues](https://github.com/WebDevStudios/nextjs-wordpress-starter/issues).

If you do file an issue, be sure to fill out the issue report completely!

## Development

### Git Workflow

1. Create a `feature` branch off `main`
2. Work locally adhering to coding standards
3. When your `feature` has been tested, open a Pull Request (PR) and fill out the PR template
4. Your PR must pass assertions and deploy successfully
5. After peer review, the PR will be merged back into `main`
6. Repeat ♻️

### Code Linting

This project has several rulesets and uses ESLint, Prettier, and Stylelint to enforce standards. In addition to real-time linting, you could run the following commands in your terminal.

First change directories into either `/frontend` or `/docs`

Lint your code:

```bash
npm run lint
```

Format your code:

```bash
npm run format
```

> These commands are also used in a pre-commit hook.

### Tips to help your PR get approved

1. Make sure your code editor supports real-time linting and has the [recommended extensions](https://webdevstudios.github.io/nextjs-wordpress-starter/docs/other/recommended-extensions) installed
2. [JSDocs](https://jsdoc.app/) are required for all JavaScript functions
3. Run `npm run build && npm run start` before submitting your PR, to ensure a successful build
4. Be courteous in your communication

### Preview Deployments

[Vercel](https://vercel.com/webdevstudios/nextjs-wordpress-starter) is connected to this Github repository and will automatically build and deploy a unique URL for each Pull Request. Learn more about [Vercel + Github integration](https://vercel.com/docs/git/vercel-for-github).

## Storybook

To work with Storybook on your Local, change directories into `/frontend` and run the following command:

```bash
npm run storybook
```

Stories are written in `.mdx` and should be placed next to the component.

[Learn how to write stories for this starter](https://webdevstudios.github.io/nextjs-wordpress-starter/docs/storybook).

---

Thanks for contributing — you rock! 🤘
