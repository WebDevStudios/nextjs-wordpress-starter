import {gql} from '@apollo/client'
import isString from 'lodash/isString'
import {getPostOfTypeTaxonomyArchive} from '../global'
import {singleMenuFragment} from '../menus'
import {archivePostFragment} from './archive'

/**
 * Create query to retrieve post tag archive.
 *
 * @author WebDevStudios
 * @param  {object} options            Optional query configuration.
 * @param  {string} options.postFields Additional post fields, as template literal, to be included in post fragment.
 * @param  {string} options.tagFields  Additional tag fields, as template literal, to be included in tag query.
 * @param  {string} options.rootField  Additional root-level fields, as template literal, to be included in query.
 * @return {DocumentNode}              Post tag archive query.
 */
export function queryPostTagArchive({
  rootFields = null,
  tagFields = null,
  postFields = null
}) {
  return gql`
    query GET_POST_TAG_ARCHIVE(
      $first: Int
      $last: Int
      $after: String
      $before: String
      $orderBy: PostObjectsConnectionOrderbyEnum = DATE
      $order: OrderEnum = DESC
      $imageSize: MediaItemSizeEnum = THUMBNAIL
      $id: ID!
      $idType: TagIdType = SLUG
    ) {
      menus {
        nodes {
          ...SingleMenuFields
        }
      }
      ${isString(rootFields) ? rootFields : ''}
      tag(id: $id, idType: $idType) {
        ${isString(tagFields) ? tagFields : ''}
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
    }
    ${archivePostFragment({postFields})}
    ${singleMenuFragment}
  `
}

/**
 * Retrieve post tag archive.
 *
 * @author WebDevStudios
 * @param  {string}  tagId   WP tag slug.
 * @param  {string}  orderBy Order by: field.
 * @param  {string}  order   Order by: direction.
 * @param  {string}  cursor  Start/end cursor for pagination.
 * @param  {boolean} getNext Whether to retrieve next set of posts (true) or previous set (false).
 * @param  {number}  perPage Number of posts per page.
 * @param  {object}  options Optional query configuration.
 * @param  {object}  client  Apollo client instance.
 * @return {object}          Object containing Apollo client instance and post archive data or error object.
 */
export function getPostTagArchive(
  tagId,
  orderBy = 'DATE',
  order = 'DESC',
  cursor = null,
  getNext = true,
  perPage = 10,
  options = {},
  client = null
) {
  const query = queryPostTagArchive(options)

  return getPostOfTypeTaxonomyArchive(
    'tag',
    tagId,
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
