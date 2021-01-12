/**
 * Retrieve environment-specific var.
 *
 * @author WebDevStudios
 * @param  {string} varName  Environment variable.
 * @param  {bool}   isPublic Whether var is public.
 * @return {string}          Env var value.
 */
export default function getEnvVar(varName, isPublic = false) {
  const prefix = isPublic ? 'NEXT_PUBLIC_' : ''

  // If var missing or currently in Vercel "dev" (local), use local settings.
  if (!process.env.VERCEL_ENV || 'development' === process.env.VERCEL_ENV) {
    return process.env[`${prefix}LOCAL_${varName}`]
  }

  // Prod / main / default.
  if (
    'production' === process.env.VERCEL_ENV ||
    'preview' !== process.env.VERCEL_ENV
  ) {
    return process.env[`${prefix}PROD_${varName}`]
  }

  // Switch between staging and develop in Vercel "preview" env.
  switch (process.env.VERCEL_GITHUB_COMMIT_REF) {
    case 'staging':
      return process.env[`${prefix}STAGING_${varName}`]
    case 'develop':
    default:
      return process.env[`${prefix}DEV_${varName}`]
  }
}

/**
 * Parse a querystring by name.
 *
 * @author WebDevStudios
 * @param {string} path URL path.
 * @param {string} name The name to match.
 */
export function parseQuerystring(path, name) {
  if (!path || !name) {
    return false
  }
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  var results = regex.exec(path)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
