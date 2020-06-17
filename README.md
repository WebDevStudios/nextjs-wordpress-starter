# Next.js WordPress Example

WebDevStudios fork of the [official Next.js WordPress Example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress).

## Environments
- [WordPress Backend](https://nextjs.wpengine.com/)
- [Next.js Frontend](https://nextjs-wordpress-example.vercel.app)
- [Backend Hosting](https://my.wpengine.com/installs/nextjs)
- [Frontend Hosting & Deployments](https://vercel.com/webdevstudios/)

## Credentials
- See 1password "Next.js on WPE"
- See 1password "Next.js Environment Variables"
- To view frontend hosting dashboard, ping Greg

## Development

1. Clone the repo:

```bash
git clone git@github.com:WebDevStudios/nextjs-wordpress-example.git
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

## Development Workflow

Like any other WDS project...

1. Create a `feature` branch off `main`
2. Open a draft Pull Request on Github
3. When finished with your work, undraft, and assign to Lead Engineer for peer review
4. After peer review, PR will be merged back into `main`
5. Repeat ♻️

## Deployments

Vercel is connected to the WebDevStudios Github account. Deployment previews are available for PRs, and merges into `main` are auto deployed.
