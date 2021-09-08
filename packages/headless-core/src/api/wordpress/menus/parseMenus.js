import {wordpressConfig} from '../config'
import {formatHeirarchialMenu} from './formatHeirarchialMenu'

/**
 * Parse and format menu data from WPGraphQL.
 *
 * @author WebDevStudios
 * @param  {object} menus     Query response menu data.
 * @param  {Array}  locations The menu locations as an array.
 * @return {Array}            Returns array of menu objects.
 */
export function parseMenus(menus, locations = null) {
  const {wpMenuLocations} = wordpressConfig()

  const allowedLocations = locations ?? wpMenuLocations ?? []

  // Bail if no locations provided.
  if (!allowedLocations?.length) {
    return []
  }

  const menus = menus?.nodes ?? []
  const parsedMenus = {}

  // Filter and format menus by locations.
  allowedLocations.forEach((location) => {
    // Convert location name to GraphQL enum version (uppercase, underscores instead of dashes).
    const locationName = location.replace(/-/g, '_').toUpperCase()

    // Find menus with matching locations.
    const matches = menus.filter((menu) => {
      const menuLocations = menu?.locations ?? []

      return menuLocations.includes(locationName)
    })

    if (!matches?.length) {
      return
    }

    // Format menu items into hierarchical structure.
    parseMenus[locationName] = formatHeirarchialMenu(
      matches[0]?.menuItems?.nodes
    )
  })

  return parsedMenus
}
