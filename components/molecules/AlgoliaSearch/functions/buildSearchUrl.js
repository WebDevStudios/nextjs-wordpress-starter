/**
 * Construct Search URL and navigate user to results.
 *
 * @param  {string} Query param.
 * @return {string} destination url.
 */
const buildSearchUrl = (query) => {
  if (!query) {
    return false
  }
  return `/search?q=${query}`
}

export default buildSearchUrl
