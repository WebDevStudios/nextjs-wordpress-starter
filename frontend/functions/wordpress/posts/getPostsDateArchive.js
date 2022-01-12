import getMenus from '@/functions/wordpress/menus/getMenus'
import formatDefaultSeoData from '@/functions/wordpress/seo/formatDefaultSeoData'
import formatManualSeoMeta from '@/functions/wordpress/seo/formatManualSeoMeta'
import {initializeWpApollo} from '@/lib/wordpress/connector'
import queryPostsDateArchive from '@/lib/wordpress/posts/queryPostsDateArchive'
import dayjs from 'dayjs'

/**
 * Retrieve posts date-based archive.
 *
 * @author WebDevStudios
 * @param  {string}  postType WP post type.
 * @param  {number}  year     Date query: year.
 * @param  {number}  month    Date query: month.
 * @param  {number}  day      Date query: day.
 * @param  {string}  orderBy  Order by: field.
 * @param  {string}  order    Order by: direction.
 * @param  {string}  cursor   Start/end cursor for pagination.
 * @param  {boolean} getNext  Whether to retrieve next set of posts (true) or previous set (false).
 * @param  {number}  perPage  Number of posts per page.
 * @param  {Array}   exclude  Post IDs to exclude.
 * @return {object}           Object containing Apollo client instance and post archive data or error object.
 */
export default async function getPostsDateArchive(
  postType,
  year = null,
  month = null,
  day = null,
  orderBy = 'DATE',
  order = 'DESC',
  cursor = null,
  getNext = true,
  perPage = 10,
  exclude = []
) {
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

  // Determine query variables.
  const variables = {
    first: getNext ? perPage : null, // Only used for retrieving next set.
    last: getNext ? null : perPage, // Only used for retrieving previous set.
    after: getNext ? cursor : null, // Only used for retrieving next set.
    before: getNext ? null : cursor, // Only used for retrieving previous set.
    orderBy,
    order,
    year,
    month,
    day
  }

  // Conditionally add excluded IDs if provided.
  if (exclude?.length) {
    variables.notIn = exclude
  }

  // Execute query.
  await apolloClient
    .query({query: queryPostsDateArchive, variables})
    .then((archive) => {
      const {
        generalSettings,
        homepageSettings,
        siteSeo,
        menus,
        ...archiveData
      } = archive.data

      // Retrieve menus.
      response.menus = getMenus(menus)

      // Retrieve default SEO data.
      response.defaultSeo = formatDefaultSeoData({
        homepageSettings,
        siteSeo
      })

      const data = archiveData?.posts ?? null

      // Set error props if data not found.
      if (!data?.edges || !data?.pageInfo) {
        response.error = true
        response.errorMessage =
          'An error occurred while trying to retrieve data for posts date archive.'

        return null
      }

      // Flatten posts array to include inner node post data.
      response.posts = data.edges.map((post) => post.node)

      // Set archive title, route.
      let formattedDate = ''
      let title = ''
      let route = ''

      if (day && month && year) {
        formattedDate = dayjs(`${year}-${month}-${day}`).format('MMMM D, YYYY')
        title = `Day: ${formattedDate}`
        route = `${year}/${month}/${day}`
      } else if (month && year) {
        formattedDate = dayjs(`${year}-${month}`).format('MMMM YYYY')
        title = `Month: ${formattedDate}`
        route = `${year}/${month}`
      } else {
        formattedDate = year
        title = `Year: ${year}`
        route = `${year}`
      }

      // Determine SEO.
      response.post = {
        seo: formatManualSeoMeta(formattedDate, route, {
          generalSettings,
          siteSeo
        }),
        title
      }

      // Extract pagination data.
      response.pagination = data.pageInfo
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message
    })

  return response
}
