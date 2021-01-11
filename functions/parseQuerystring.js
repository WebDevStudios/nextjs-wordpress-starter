/**
 * Parse a querystring by name.
 *
 * @author WebDevStudios
 * @param {*} path The complete URL path.
 * @param {*} name The name to search.
 * @return {string} The found query value.
 */
export default function parseQuerystring(path, name) {
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
