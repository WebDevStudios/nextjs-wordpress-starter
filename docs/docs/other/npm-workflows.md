---
title: NPM Workflows
---

The `/packages` directory contains a number of NPM packages that are part of the core functionality of the project. These packages are listed under the [WebDevStudios organization](https://www.npmjs.com/org/webdevstudios).

## Testing Locally

Instead of publishing a new release every time you make changes, use `npm link` to create a symlink to the package on your local. This allows you to test your changes without having to publish a release before it's ready.

It's a two step process. First, you create a symlink to the latest version of the package:

```bash
cd packages/headless-core
```

```bash
npm link
```

Second, use the symlink in another project:

```bash
cd examples/basic
```

```bash
npm link @webdevstudios/headless-core
```

Finally, you can install the package and test:

```bash
npm i @webdevstudios/headless-core
```

After your testing checks out, you can safely publish to NPM. [Learn more about NPM link](https://docs.npmjs.com/cli/v7/commands/npm-link).

---

## Publishing to NPM

### Log into NPM

Before logging in, you must have an account on [npmjs.com](https://npmjs.com/) and be part of the WebDevStudios organization.

```bash
npm adduser
```

Follow the prompts and enter your username, password, and two-factor authentication code (if enabled). [Learn more about NPM adduser](https://docs.npmjs.com/cli/v7/commands/npm-adduser).

### Bump the version

Open the `package.json` file and bump the `version` number. For example, if the current version is `1.0.0-main.1`, then the next version will be `1.0.0-main.2`.

### Publish a Release

If you're publishing a **stable release**:

```bash
npm publish --tag=latest --access=public
```

If you're publishing a **prerelease**:

```bash
npm publish --tag=next --access=public
```

[Learn more about NPM publish](https://docs.npmjs.com/cli/v7/commands/npm-publish).

### Unpublish a Release

If something goes wrong with the release, you can unpublish it. For example, if `1.0.0-main.2` is not working the following will remove it from NPM's registry:

```bash
npm unpublish @webdevstudios/headless-core@1.0.0-main.2
```

[Learn more about NPM unpublish](https://docs.npmjs.com/cli/v7/commands/npm-unpublish).
