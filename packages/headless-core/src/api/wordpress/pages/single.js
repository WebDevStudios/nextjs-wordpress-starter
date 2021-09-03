import {gql} from '@apollo/client'
import isString from 'lodash/isString'
import {getSinglePostOfType} from '../global'
import {singleMenuFragment} from '../menus'

/**
 * Create single page data fragment.
 *
 * @author WebDevStudios
 * @param  {object} options    Optional fragment configuration.
 * @param  {string} pageFields Additional page fields, as template literal, to be included in fragment.
 * @return {DocumentNode}      Single page data fragment.
 */
export function singlePageFragment({pageFields}) {
  return gql`
    fragment SinglePageFields on Page {
      author {
        node {
          slug
          nickname
        }
      }
      blocksJSON
      databaseId
      date
      excerpt
      featuredImage {
        node {
          altText
          sourceUrl(size: $imageSize)
        }
      }
      slug
      status
      title
      uri
      ${isString(pageFields) ? pageFields : ''}
    }
  `
}

/**
 * Create query to retrieve page by specified identifier.
 *
 * @author WebDevStudios
 * @param  {object} options Optional query configuration.
 * @param  {string} pageFields Additional page fields, as template literal, to be included in page fragment.
 * @param  {string} rootFields Additional root-level fields, as template literal, to be included in query.
 */
export function queryPageById({rootFields = null, pageFields = null}) {
  const queryPageById = gql`
    query GET_POST_BY_ID(
      $id: ID!
      $idType: PageIdType = URI
      $imageSize: MediaItemSizeEnum = LARGE
    ) {
      menus {
        nodes {
          ...SingleMenuFields
        }
      }
      ${isString(rootFields) ? rootFields : ''}
      page(id: $id, idType: $idType) {
        ...SinglePageFields
        isPostsPage
      }
    }
    ${singlePageFragment({pageFields})}
    ${singleMenuFragment}
  `

  return queryPageById
}

/**
 * Retrieve single page by specified identifier.
 *
 * @author WebDevStudios
 * @param  {number | string} id       Post identifier.
 * @param  {string}          idType   Type of ID.
 * @param  {string}          preview  Whether query is for a regular page view (null), a preview check (basic), or full page preview (full).
 * @param  {object}          options  Optional query configuration.
 * @param  {object}          client   Apollo client instance.
 * @return {object}                   Object containing Apollo client instance and page data or error object.
 */
export async function getPage(
  id,
  idType = 'URI',
  preview = null,
  options = {},
  client = null
) {
  const query = queryPageById(options)

  const variables = {
    id,
    idType
  }

  return getSinglePostOfType('page', id, query, variables, preview, client)
}
