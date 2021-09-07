import {gql} from '@apollo/client'
import isString from 'lodash/isString'
import {getPostOfTypeArchive} from '../global/getPostOfTypeArchive'
import {singleMenuFragment} from '../menus'

/**
 * Create archive post data fragment.
 *
 * @author WebDevStudios
 * @param  {object} options            Optional fragment configuration.
 * @param  {string} options.postFields Additional post fields, as template literal, to be included in fragment.
 * @return {DocumentNode}              Archive post data fragment.
 */
export function archivePostFragment({postFields}) {
  return gql`
    fragment ArchivePostFields on Post {
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
      ${isString(postFields) ? postFields : ''}
    }
  `
}

/**
 * Create query to retrieve post archive.
 *
 * @author WebDevStudios
 * @param  {object} options            Optional query configuration.
 * @param  {string} options.postFields Additional post fields, as template literal, to be included in post fragment.
 * @param  {string} options.rootFields Additional root-level fields, as template literal, to be included in query.
 * @return {DocumentNode}              Post archive query.
 */
export function queryPostArchive({postFields = null, rootFields = null}) {
  return gql`
    query GET_POST_ARCHIVE(
      $first: Int
      $last: Int
      $after: String
      $before: String
      $orderBy: PostObjectsConnectionOrderbyEnum = DATE
      $order: OrderEnum = DESC
      $imageSize: MediaItemSizeEnum = THUMBNAIL
    ) {
      menus {
        nodes {
          ...SingleMenuFields
        }
      }
      ${isString(rootFields) ? rootFields : ''}
      posts(
        first: $first
        last: $last
        after: $after
        before: $before
        where: {orderby: {field: $orderBy, order: $order}}
      ) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            ...ArchivePostFields
          }
        }
      }
    }
    ${archivePostFragment({postFields})}
    ${singleMenuFragment}
  `
}

/**
 * Retrieve post archive.
 *
 * @author WebDevStudios
 * @param  {string}  orderBy Order by: field.
 * @param  {string}  order   Order by: direction.
 * @param  {string}  cursor  Start/end cursor for pagination.
 * @param  {boolean} getNext Whether to retrieve next set of posts (true) or previous set (false).
 * @param  {number}  perPage Number of posts per page.
 * @param  {object}  options Optional query configuration.
 * @param  {object}  client  Apollo client instance.
 * @return {object}          Object containing Apollo client instance and post archive data or error object.
 */
export async function getPostArchive(
  orderBy = 'DATE',
  order = 'DESC',
  cursor = null,
  getNext = true,
  perPage = 10,
  options = {},
  client = null
) {
  const query = queryPostArchive(options)

  return getPostOfTypeArchive(
    'post',
    query,
    orderBy,
    order,
    cursor,
    getNext,
    perPage,
    client
  )
}
