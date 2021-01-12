import {gql} from '@apollo/client'
import {initializeWpApollo} from '../connector'

/**
 * Convert slugs in location name to underscores.
 *
 * @author WebDevStudios
 * @param  {string} slug The location slug.
 * @return {string}      The updated slug.
 */
function convertMenuSlug(slug = '') {
  const newSlug = slug.replace(/-/g, '_')
  return newSlug
}

/**
 * Filter menus array by menu location.
 *
 * @author WebDevStudios
 * @param  {array}  menus     The array of WP menus to filter.
 * @param  {array}  locations The array of locations for filtering.
 * @return {Object}           An object containing the requested locations as objects.
 */
function filterMenusByLocation(menus, locations) {
  const data = {}

  // Loop each menu location.
  locations.forEach((location) => {
    const locationName = convertMenuSlug(location)
    // Filter menus by locationName.
    data[locationName] = menus.filter(function (menu) {
      return menu.node.locations.includes(locationName.toUpperCase())
    })
  })
  return data
}

export default async function getMenus(locations = []) {
  if (!locations.length > 0) {
    return false // exit if empty
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

  const allMenus = menus?.data?.menus?.edges

  const theMenus = filterMenusByLocation(allMenus, locations)

  return theMenus || []
}
