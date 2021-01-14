import {gql} from '@apollo/client'
import {initializeWpApollo} from '../connector'
import filterByLocation from '@/api/wordpress/menus/filterByLocation'

// TODO: Rebakah to look at the way this query is set up in terms of file structure

/**
 * Get menu data from WPGraphQL.
 *
 * @author WebDevStudios
 * @param {Array} locations The menu locations as an array.
 * @return {Array}          Returns an array of menu objects.
 */
export default async function getMenus(locations = []) {
  if (!locations.length > 0) {
    return [] // exit if empty
  }
  const query = gql`
    query menuQuery {
      menus {
        nodes {
          locations
          menuItems {
            nodes {
              id
              parentId
              label
              path
              target
              title
            }
          }
        }
      }
    }
  `

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Execute query.
  const menus = await apolloClient.query({query})

  // Filter returned menus by specific location.
  const filteredMenus = filterByLocation(menus?.data?.menus?.nodes, locations)

  return filteredMenus || []
}
