import {gql} from '@apollo/client'
import {initializeWpApollo} from '../connector'

/**
 * Get menu data from WPGraphQL
 *
 * @author WebDevStudios
 * @param {array} locations The menu locations as an array.
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

  const apolloClient = initializeWpApollo()
  const menus = await apolloClient.query({query})

  // Filter returned menus by specific location.
  const filteredMenus = filterMenusByLocation(
    menus?.data?.menus?.nodes,
    locations
  )

  return filteredMenus || []
}

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
    const wpmenu = menus.filter(function (menu) {
      return menu['locations'].includes(locationName.toUpperCase())
    })

    // Format the returned menu.
    data[locationName] = formatHeirarchialMenu(wpmenu[0]?.menuItems?.nodes)
  })

  return data
}

/**
 * Format a flat list WP nav menu into a heirarchial list.
 *
 * @author WebDevStudios
 * @see https://www.wpgraphql.com/docs/menus/#hierarchical-data
 * @param  {array} data The array containing menu data.
 * @param  {object}     Default object keys
 * @return {array}      Array containing a updated menu list.
 */
function formatHeirarchialMenu(
  data = [],
  {idKey = 'id', parentKey = 'parentId', childrenKey = 'children'} = {}
) {
  const tree = []
  const childrenOf = {}
  data.forEach((item) => {
    const newItem = {...item}
    const {[idKey]: id, [parentKey]: parentId = 0} = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem[childrenKey] = childrenOf[id]
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem)
  })
  return tree
}
