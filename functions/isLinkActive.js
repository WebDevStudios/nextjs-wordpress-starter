/**
 * Check if link is the active page.
 *
 * @author WebDevStudios
 * @see https://nextjs.org/docs/api-reference/next/router#router-object
 * @param {string} asPath The path shown in the browser without the configured basePath or locale.
 * @param {string} path   The name to search.
 * @return {boolean}      Is path active.
 */
export default function isLinkActive(asPath, path) {
  if (!asPath || !path) {
    return false
  }

  // TODO: Add functionality to check if link is in the full URL path.
  // e.g. /portfolio /portfolio/cambells-soup

  return asPath === stripTrailingSlash(path)
}

/**
 * Remove the last trailing slash from a URL path.
 *
 * @author WebDevStudios
 * @param {string} str The string to search and remove trailing slash.
 * @return {string}    The formatted string.
 */
function stripTrailingSlash(str) {
  if (str.substr(-1) === '/' && str.length > 1) {
    return str.substr(0, str.length - 1)
  }
  return str
}
