import defaultSeoFields from './defaultSeoFields'
import allMenus from './allMenus'

/**
 * Query partial: retrieve default data for all frontend pages.
 */
const defaultPageData = `
  ${defaultSeoFields}
  ${allMenus}
`

export default defaultPageData
