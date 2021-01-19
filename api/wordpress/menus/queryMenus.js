import {gql} from '@apollo/client'
import {initializeWpApollo} from '../connector'

/**
 * Query all WP Menus.
 *
 * @author WebDevStudios
 * @return {object}    Menu data or error object.
 */
export default async function queryMenus() {
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

  const menus = await apolloClient
    .query({query})
    .then((menus) => menus ?? null)
    .catch((error) => {
      return {
        isError: true,
        message: error.message
      }
    })

  if (!menus) {
    return {
      isError: true,
      message: `An error occurred while trying to get menu data"`
    }
  }

  return menus
}
