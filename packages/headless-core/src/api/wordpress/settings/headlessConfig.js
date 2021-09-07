import {gql} from '@apollo/client'
import {getSinglePostOfType} from '../global'
import {singleMenuFragment} from '../menus'
import {singlePageFragment} from '../pages/single'

/**
 * Create query to retrieve headless config.
 *
 * @author WebDevStudios
 * @param  {object} options            Optional query configuration.
 * @param  {string} options.pageFields Additional page fields, as template literal, to be included in page fragment.
 * @param  {string} options.rootFields Additional root-level fields, as template literal, to be included in query.
 * @return {DocumentNode}              Headless config query.
 */
export function queryError404Page({pageFields = null, rootFields = null}) {
  const queryError404Page = gql`
    query GET_HEADLESS_CONFIG {
      headlessConfig {
        additionalSettings {
          error404Page {
            ... on Page {
              ...SinglePageFields
            }
          }
        }
      }
      menus {
        nodes {
          ...SingleMenuFields
        }
      }
      ${isString(rootFields) ? rootFields : ''}
    }
    ${singlePageFragment({pageFields})}
    ${singleMenuFragment}
  `

  return queryError404Page
}

/**
 * Retrieve single page set via Headless Config.
 *
 * @author WebDevStudios
 * @param  {string} page    Custom page name.
 * @param  {object} options Optional query configuration.
 * @param  {object} client  Apollo client instance.
 * @return {object}         Object containing Apollo client instance and page data or error object.
 */
export async function getHeadlessConfigPage(page, options = {}, client = null) {
  let query = null

  switch (page) {
    case 'error404Page':
      query = queryError404Page(options)
      break
  }

  return getSinglePostOfType('page', page, query, null, null, client)
}
