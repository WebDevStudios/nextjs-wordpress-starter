import {CMS_URL} from '@/lib/config'

/**
 * Str replace the CMS_URL of link items
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
