import queryError404Page from '../pages/queryError404Page'
import processPostTypeQuery from './processPostTypeQuery'

// Define single page query based on page name.
export const customPageQuery = {
  404: queryError404Page
}

/**
 * Retrieve single page set via Additional Settings.
 *
 * @author WebDevStudios
 * @param {string} page Custom page name in settings.
 * @return {object}     Object containing Apollo client instance and post data or error object.
 */
export default async function getSettingsCustomPage(page) {
  // Retrieve page query.
  const query = customPageQuery?.[page] ?? null

  return processPostTypeQuery('page', page, query)
}
