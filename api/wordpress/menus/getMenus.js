import filterByLocation from '@/api/wordpress/menus/filterByLocation'
import queryMenus from './queryMenus'

/**
 * Get menu data from WPGraphQL.
 *
 * @author WebDevStudios
 * @param {array} locations The menu locations as an array.
 * @return {array}          Returns array of menu objects.
 */
export default async function getMenus(locations = []) {
  if (!locations.length > 0) {
    return [] // Exit if empty.
  }

  // Query WP Menus.
  const menus = await queryMenus()

  // Filter returned menus by specific menu location.
  const filteredMenus = filterByLocation(menus?.data?.menus?.nodes, locations)

  return filteredMenus || []
}
