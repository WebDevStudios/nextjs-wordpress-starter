import {gql} from '@apollo/client'
import {initializeWpApollo} from '../connector'

/**
 * Filter menus array by menu location.
 *
 * @author WebDevStudios
 * @param  {array}  menus     The array of WP menus to filter.
 * @param  {array}  locations The array of locations for filtering.
 * @return {Object}           An object containing the requested locations as individual objects.
 */
function filterMenusByLocation(menus, locations) {
  const data = {}

  // Loop each menu location.
  locations.forEach((location) => {
    // Convert dashes to underscores.
    const locationName = location.replace(/-/g, '_')
    // Filter menus array by location and assign to new object.
    data[locationName] = menus.filter(function (menu) {
      return menu.node.locations.includes(locationName.toUpperCase())
    })
  })

  return data
}

export default async function getMenus(locations = []) {
  if (!locations.length > 0) {
    return [] // exit if empty
  }
  const query = gql`
    query menuQuery {
      menus {
        edges {
          node {
            menuId
            slug
            locations
            menuItems {
              edges {
                node {
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
      }
    }
  `

  const apolloClient = initializeWpApollo()
  const menus = await apolloClient.query({query})

  // Filter returned menus by location.
  const filteredMenus = filterMenusByLocation(
    menus?.data?.menus?.edges,
    locations
  )

  return filteredMenus || []
}
