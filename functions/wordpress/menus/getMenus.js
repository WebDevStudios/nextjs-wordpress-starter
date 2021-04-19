import filterMenusByLocation from '@/functions/wordpress/menus/filterMenusByLocation'
import menuLocations from '@/lib/wordpress/_config/menuLocations'

/**
 * Get menu data from WPGraphQL.
 *
 * @author WebDevStudios
 * @param {object} menus     Query response menu data.
 * @param {Array}  locations The menu locations as an array.
 * @return {Array}           Returns array of menu objects.
 */
export default function getMenus(menus, locations = menuLocations) {
  if (!locations.length > 0) {
    return [] // Exit if empty.
  }

  // Filter returned menus by specific menu location.
  const filteredMenus = filterMenusByLocation(menus?.nodes, locations)

  return filteredMenus || []
}
