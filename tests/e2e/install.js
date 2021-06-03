const {execSync} = require('child_process')
const {existsSync, readFileSync, writeFileSync} = require('fs')
const path = require('path')
const wait_on = require('wait-on')
const {wpCli} = require('./wpCli')

/**
 * Create `.env.test` using `.env.sample` as template
 * and set the WORDPRESS_URL to 'http://localhost:8020/'.
 */
function createEnvTest() {
  // Check if `.env.test` exists.
  const envSamplePath = path.join(__dirname, '..', '..', '.env.sample')

  if (!existsSync(envSamplePath)) {
    throw Error('Unable to find .env.sample.')
  }

  // Read in `.env.sample`, edit it, then write it `.env.test`.
  const testEnvContent = readFileSync(envSamplePath, 'utf8').replace(
    /https:\/\/nextjs\.wpengine\.com/g,
    'http://localhost:8020' // This is our Docker E2E site url.
  )

  const envTestPath = path.join(__dirname, '..', '..', '.env.test')
  writeFileSync(envTestPath, testEnvContent)

  // Make sure `.env.test` was created
  if (!existsSync(envTestPath)) {
    throw Error('Unable to create .env.test')
  }
}

// Once the site is available, setup Test WordPress.
wait_on({resources: [`tcp:localhost:8020`]})
  .then(() => {
    // Install WordPress.
    wpCli(
      'core install --title="WP E2E Test" --admin_user=admin --admin_password=password --admin_email=test@test.com --skip-email --url=http://localhost:8020'
    )
  })
  .then(() => {
    // mv original `wp-content` folder to `wp-content-backup`
    execSync('mv wp-content wp-content-backup', {
      stdio: [0, 1, 2],
      cwd: path.resolve(__dirname, 'test_wordpress')
    })
  })
  .then(() => {
    // Perform git clone.
    execSync(
      'git clone https://github.com/WebDevStudios/wds-headless-wordpress.git wp-content',
      {
        stdio: [0, 1, 2],
        cwd: path.resolve(__dirname, 'test_wordpress')
      }
    )
  })
  .then(() => {
    // Install composer dependencies.
    // TODO Support for the general public soon.
    execSync('composer self-update --1 && composer install', {
      stdio: [0, 1, 2],
      cwd: path.resolve(__dirname, 'test_wordpress/wp-content')
    })
  })
  // TODO - Add this once `seed.sql` is ready.
  // .then(() => {
  //   wpCli('db import seed.sql')
  // })
  .then(() => {
    wpCli('rewrite structure "/blog/%postname%/"')
  })
  // Set custom constants
  .then(() => {
    wpCli('config set GRAPHQL_JWT_AUTH_SECRET_KEY your-secret-token')
  })
  .then(() => {
    wpCli('config set WORDPRESS_PREVIEW_SECRET ANY_RANDOM_STRING_OF_TEXT')
  })
  .then(() => {
    wpCli('config set HEADLESS_FRONTEND_URL http://localhost:8020/')
  })
  .then(createEnvTest)
