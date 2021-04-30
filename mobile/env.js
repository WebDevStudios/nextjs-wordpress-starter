/**
 * Not all vars from Next.js' `.env` are needed in our expo.
 * And some are sensitive that shouldn't be included in our expo build.
 * That's why we set these manually here.
 * `.env` isn't available in expo.
 */
 export default function SetEnvVars() {
  process.env.WORDPRESS_URL = 'http://nextjswp.test/'
}
