import {CMS_URL} from '@/lib/config'

// Generic data fetcher.
export const fetcher = (...args) => fetch(...args).then((res) => res.json()) // eslint-disable-line no-undef

export const getMenuBySlug = (array = [], name = '') => {
  if (!array || !name) {
    return false
  }
  let menu = array.filter((item) => {
    return name === item.node.slug
  })
  return menu[0].node.menuItems.nodes
}

/**
 * Str replace the CMS_URL of link items.
 *
 * @param {*} url
 * @return {String} url
 */
export function convertWPURL(url = '') {
  if (!url) {
    return false
  }

  return url.replace(CMS_URL, '')
}
