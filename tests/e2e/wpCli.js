const {execSync} = require('child_process')

/**
 * Runs WP-CLI commands in the Docker environment.
 *
 * @param {string} cmd The WP-CLI command to run.
 */
function wpCli(cmd) {
  execSync(
    `docker-compose run --rm --workdir="/var/www/html" cli wp ${cmd} --allow-root`,
    {
      stdio: 'inherit'
    }
  )
}

exports.wpCli = wpCli
