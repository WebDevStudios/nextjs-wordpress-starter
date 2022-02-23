/**
 * Check if link is the active page.
 *
 * @author WebDevStudios
 * @see https://nextjs.org/docs/api-reference/next/router#router-object
 * @param  {string}  asPath The path shown in the browser without the configured basePath or locale.
 * @param  {string}  path   The name to search.
 * @return {boolean}        Is path active.
 */
export default function isLinkActive(asPath, path) {
  if (!asPath || !path) {
    return false
  }

  if (path.length > 1) {
    const checkSubStr = new RegExp(path)
    return checkSubStr.test(asPath)
  }

  return path === asPath
}
