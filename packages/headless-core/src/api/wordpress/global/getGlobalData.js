import {gql} from '@apollo/client'
import {initializeWpApollo} from '../client'
import {parseMenus, singleMenuFragment} from '../menus'

// Query: retrieve global site data.
export const queryGlobalData = gql`
  query GET_GLOBAL_SITE_DATA {
    menus {
      nodes {
        ...SingleMenuFields
      }
    }
  }
  ${singleMenuFragment}
`

/**
 * Retrieve global site data (e.g., menus). Used for frontend pages that don't exist in WordPress (e.g., user login).
 *
 * @author WebDevStudios
 * @param  {object} client Apollo client instance.
 * @return {object}        Object containing Apollo client instance and site data or error object.
 */
export async function getGlobalData(client = null) {
  // Get/create Apollo instance.
  const apolloClient = client ?? initializeWpApollo()

  // Set up response object.
  const response = {
    apolloClient,
    error: false,
    errorMessage: null
  }

  // Execute query.
  await apolloClient
    .query({query: queryGlobalData})
    .then((res) => {
      const {menus} = res.data

      // Retrieve menus.
      response.menus = parseMenus(menus)
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message

      return null
    })

  return response
}
