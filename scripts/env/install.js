const {execSync} = require('child_process')
const path = require('path')
const waitOn = require('wait-on')

const rootPath = path.join(__dirname, '..', '..')
const wpEnvPath = path.join(rootPath, 'wordpress_env')
const wpEnvConfigPath = path.join(wpEnvPath, 'wp-config.php')

function wpCli(cmd) {
  execSync(
    `docker-compose run --rm --workdir="/var/www/html" cli wp ${cmd} --allow-root`,
    {stdio: 'inherit'}
  )
}

waitOn({
  resources: [`tcp:localhost:8020`, wpEnvConfigPath]
})
  .then(() => {
    // Install WordPress.
    wpCli(
      'core install --title="WordPress Environment" --admin_user=admin --admin_password=password --admin_email=test@test.com --skip-email --url=http://localhost:8020'
    )

    wpCli('theme activate wds-headless-theme')

    wpCli('plugin activate --all')
  })
  .catch((error) => {
    console.error('error', error)
  })
