/**
 * Construct Search URL and navigate user to results.
 *
 * @author WebDevStudios
 * @param {string} query The search query.
 * @return {string}      The search URL with search query.
 */
export default function buildSearchUrl(query) {
  if (!query) {
    return false
  }
  return `/search?q=${query}`
}
