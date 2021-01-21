import formatDefaultSeoData from '@/functions/formatDefaultSeoData'
import {initializeWpApollo} from '../connector'
import queryDefaultPageData from './queryDefaultPageData'
import getMenus from '../menus/getMenus'

// Define SEO for Frontend routes.
export const frontendPageSeo = {
  search: {
    title: 'Search',
    description: 'Search page'
  }
}

/**
 * Retrieve data for Frontend-only route (i.e., page does not exist in WordPress).
 *
 * @author WebDevStudios
 * @param {string} route Frontend route.
 * @return {object}      Object containing Apollo client instance and post data or error object.
 */
export default async function getFrontendPage(route) {
  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Set up return object.
  const response = {
    apolloClient,
    error: false,
    errorMessage: null
  }

  // Execute query.
  response.post = await apolloClient
    .query({query: queryDefaultPageData})
    .then((res) => {
      const {homepageSettings, siteSeo, menus} = res.data

      // Retrieve menus.
      response.menus = getMenus(menus)

      // Retrieve default SEO data.
      response.defaultSeo = formatDefaultSeoData({homepageSettings, siteSeo})

      // Set route SEO.
      return {
        seo: {
          title: `${frontendPageSeo?.[route]?.title} - ${
            response.defaultSeo?.openGraph?.siteName ?? ''
          }`,
          metaDesc: frontendPageSeo?.[route]?.description,
          canonical: `${response.defaultSeo?.openGraph?.url ?? ''}/${route}`
        }
      }
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message

      return null
    })

  return response
}
