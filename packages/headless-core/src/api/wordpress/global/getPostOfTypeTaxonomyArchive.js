import {initializeWpApollo} from '../client'
import {parseMenus} from '../menus'

/**
 * Retrieve post taxonomy archive of a given post type.
 *
 * @author WebDevStudios
 * @param  {string}  taxonomy   WP taxonomy type slug.
 * @param  {string}  taxonomyId WP taxonomy term slug.
 * @param  {string}  postType   WP post type.
 * @param  {object}  query      Post type archive retrieval query.
 * @param  {string}  orderBy    Order by: field.
 * @param  {string}  order      Order by: direction.
 * @param  {string}  cursor     Start/end cursor for pagination.
 * @param  {boolean} getNext    Whether to retrieve next set of posts (true) or previous set (false).
 * @param  {number}  perPage    Number of posts per page.
 * @param  {object}  client     Apollo client instance.
 * @return {object}             Object containing Apollo client instance and post type archive data or error object.
 */
export async function getPostOfTypeTaxonomyArchive(
  taxonomy,
  taxonomyId,
  postType,
  query,
  orderBy = 'DATE',
  order = 'DESC',
  cursor = null,
  getNext = true,
  perPage = 10,
  client = null
) {
  // Get/create Apollo instance.
  const apolloClient = client ?? initializeWpApollo()

  // Set up response object.
  const response = {
    apolloClient,
    posts: null,
    pagination: null,
    error: false,
    errorMessage: null
  }

  // If no query is set for given taxonomy, return error message.
  if (!query) {
    return {
      apolloClient,
      error: true,
      errorMessage: `Taxonomy \`${taxonomy}\` archives are not supported.`
    }
  }

  // Determine query variables.
  const variables = {
    id: taxonomyId,
    first: getNext ? perPage : null, // Only used for retrieving next set.
    last: getNext ? null : perPage, // Only used for retrieving previous set.
    after: getNext ? cursor : null, // Only used for retrieving next set.
    before: getNext ? null : cursor, // Only used for retrieving previous set.
    orderBy,
    order
  }

  // Execute query.
  await apolloClient
    .query({query, variables})
    .then((archive) => {
      const {menus, ...archiveData} = archive.data

      // Retrieve menus.
      response.menus = parseMenus(menus)

      const data = archiveData?.[taxonomy] ?? null

      // Get post type plural name.
      const pluralName = postTypes?.[postType]?.pluralName

      // Retrieve posts by post type.
      const {pageInfo, edges: posts} = data?.[pluralName] ?? {}

      // Set error props if data not found.
      if (!posts || !pageInfo) {
        response.error = true
        response.errorMessage = `An error occurred while trying to retrieve data for ${taxonomyId} ${taxonomy} archive.`

        return null
      }

      // Flatten posts array to include inner node post data.
      response.posts = posts.map((post) => post.node)

      // Extract pagination data.
      response.pagination = pageInfo
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message
    })

  return response
}
