# Next.js WordPress Starter (with-expo) Branch

This branch is highly experimental and for the efforts to integrate [Expo](https://expo.io/) in our [NextJS WordPress Starter](https://github.com/WebDevStudios/nextjs-wordpress-starter/).

---

## Motivation

The motivation is to have a single repository for NextJS (Front-end) and Expo (React Native Apps) and share as much code as possible between the two.

## Getting Started

Follow the steps to setup both the [Backend](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/Backend-Setup) and [Frontend](https://github.com/WebDevStudios/nextjs-wordpress-starter/wiki/Frontend-Setup).

## Additional Steps

Edit the file `./lib/wordpress/connector.js`, on [line 6](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/634032c5376ba09d6021f002f7153e78695f36f4/lib/wordpress/connector.js#L6). Change `const wpApiUrlBase` to be the same as `WORDPRESS_URL` in your `.env`.

The reason why we do this is because `.env` isn't parsed to `process.env` in Expo. Also we don't want to expose everything in `.env` to our expo build because unlike in NextJS, non-prefixed `.env` variables are not exposed to the public browser. We only want to expose specific and safe-to-public `.env` vars in our expo.

This step is only for the meantime, we are currently looking for a better approach.

## Starting up NextJS

1. Make sure the backend is up and running.
2. Run `npm run dev` in the root of this repo.

## Starting up Expo

1. Make sure the backend is up and running.
2. Run `npm run expo:start` in the root of this repo.
3. This will automatically open up a browser dev tool where you can open the expo app in either [IOS](https://docs.expo.io/workflow/ios-simulator/) or [Android](https://docs.expo.io/workflow/android-studio-emulator/) emulator. You can read more about this [here](https://docs.expo.io/get-started/create-a-new-app/).

## Differences between this branch `with-expo` and `main`

1. `react` and `react-dom` versions. `main` uses version `17.0.2` while `with-expo` uses `16.13.1`. This is because the latest Expo React Native only supports `16.13.1` at the moment.
1. The package `@arkweid/lefthook` is removed in `with-expo` for now. Simply because it's not working properly after install all the necessary packages for Expo. We'll include it back as soon as we find the fix.

## Sneak Preview

<img src="https://user-images.githubusercontent.com/5747475/116743630-c926a200-aa2b-11eb-91e7-4d8349379bdd.png" />

<img src="https://user-images.githubusercontent.com/5747475/116743686-dcd20880-aa2b-11eb-90f4-3b9292c69795.png" />

<img src="https://user-images.githubusercontent.com/5747475/116743697-dfccf900-aa2b-11eb-820e-941bf1eabd30.png" />

<img src="https://user-images.githubusercontent.com/5747475/116743701-e22f5300-aa2b-11eb-8b72-13f85f9ef982.png" />

<img src="https://user-images.githubusercontent.com/5747475/116743708-e491ad00-aa2b-11eb-94de-ea2190d13473.png" />

