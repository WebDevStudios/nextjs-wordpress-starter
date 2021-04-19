import getMenus from '@/functions/wordpress/menus/getMenus'
import formatDefaultSeoData from '@/functions/wordpress/seo/formatDefaultSeoData'
import queryPostsByCategory from '@/lib/wordpress/categories/queryPostsByCategory'
import {initializeWpApollo} from '@/lib/wordpress/connector'
import queryPostsByTag from '@/lib/wordpress/tags/queryPostsByTag'
import {postTypes} from '@/lib/wordpress/_config/postTypes'

/**
 * Retrieve post taxnomy archive.
 *
 * @author WebDevStudios
 * @param {string}  taxonomy   WP taxonomy type slug.
 * @param {string}  taxonomyId WP taxonomy term slug.
 * @param {string}  postType   WP post type.
 * @param {string}  orderBy    Order by: field.
 * @param {string}  order      Order by: direction.
 * @param {string}  cursor     Start/end cursor for pagination.
 * @param {boolean} getNext    Whether to retrieve next set of posts (true) or previous set (false).
 * @param {number}  perPage    Number of posts per page.
 * @return {object}            Object containing Apollo client instance and post archive data or error object.
 */
export default async function getPostTypeTaxonomyArchive(
  taxonomy,
  taxonomyId,
  postType = 'post',
  orderBy = 'DATE',
  order = 'DESC',
  cursor = null,
  getNext = true,
  perPage = 10
) {
  // Define single post query based on taxonomy.
  const postTypeQuery = {
    category: queryPostsByCategory,
    tag: queryPostsByTag
  }

  // Retrieve taxonomy query.
  const query = postTypeQuery?.[taxonomy] ?? null

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Set up return object.
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
      const {homepageSettings, siteSeo, menus, ...archiveData} = archive.data

      // Retrieve menus.
      response.menus = getMenus(menus)

      // Retrieve default SEO data.
      response.defaultSeo = formatDefaultSeoData({homepageSettings, siteSeo})

      const data = archiveData?.[taxonomy] ?? null

      // Get post type plural name.
      const pluralName = postTypes?.[postType]?.pluralName

      // Retrieve archive SEO.
      const archiveSeo = data?.seo

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

      // Use final breadcrumb as alternative canonical URL.
      const breadcrumb =
        archiveSeo?.breadcrumbs &&
        archiveSeo.breadcrumbs.length > 0 &&
        archiveSeo.breadcrumbs.slice(-1)[0]?.url

      // Manually create fallback taxonomy canonical URL.
      const fallback = `${response.defaultSeo?.openGraph?.url ?? ''}/${
        postTypes?.[postType]?.route
      }/${taxonomy}/${taxonomyId}`

      // Structure archive SEO.
      response.post = {
        seo: {
          ...archiveSeo,
          title:
            archiveSeo?.title ??
            `${taxonomyId} - ${response.defaultSeo?.openGraph?.siteName ?? ''}`,
          metaDesc: archiveSeo?.metaDesc ?? '',
          canonical: archiveSeo?.canonical ?? breadcrumb ?? fallback,
          metaRobotsNofollow: archiveSeo?.metaRobotsNofollow ?? 'follow',
          metaRobotsNoindex: archiveSeo?.metaRobotsNoindex ?? 'index'
        }
      }

      // Extract pagination data.
      response.pagination = pageInfo
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message
    })

  return response
}
