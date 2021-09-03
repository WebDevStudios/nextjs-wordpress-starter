import {gql} from '@apollo/client'
import isString from 'lodash/isString'
import {getPostOfTypeTaxonomyArchive} from '../global'
import {archivePostFragment} from './archive'

/**
 * Create query to retrieve post category archive.
 *
 * @author WebDevStudios
 * @param  {object} options                Optional query configuration.
 * @param  {string} options.postFields     Additional post fields, as template literal, to be included in post fragment.
 * @param  {string} options.categoryFields Additional category fields, as template literal, to be included in category query.
 * @param  {string} options.rootFields     Additional root-level fields, as template literal, to be included in query.
 * @return {DocumentNode}                  Post category archive query.
 */
export function queryPostCategoryArchive({
  rootFields = null,
  categoryFields = null,
  postFields = null
}) {
  return gql`
    query GET_POST_CATEGORY_ARCHIVE(
      $first: Int
      $last: Int
      $after: String
      $before: String
      $orderBy: PostObjectsConnectionOrderbyEnum = DATE
      $order: OrderEnum = DESC
      $imageSize: MediaItemSizeEnum = THUMBNAIL
      $id: ID!
      $idType: CategoryIdType = SLUG
    ) {
      menus {
        nodes {
          ...SingleMenuFields
        }
      }
      ${isString(rootFields) ? rootFields : ''}
      category(id: $id, idType: $idType) {
        ${isString(categoryFields) ? categoryFields : ''}
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
 * Retrieve post category archive.
 *
 * @author WebDevStudios
 * @param  {string}  categoryId WP category slug.
 * @param  {string}  orderBy    Order by: field.
 * @param  {string}  order      Order by: direction.
 * @param  {string}  cursor     Start/end cursor for pagination.
 * @param  {boolean} getNext    Whether to retrieve next set of posts (true) or previous set (false).
 * @param  {number}  perPage    Number of posts per page.
 * @param  {object}  options    Optional query configuration.
 * @param  {object}  client     Apollo client instance.
 * @return {object}             Object containing Apollo client instance and post archive data or error object.
 */
export function getPostCategoryArchive(
  categoryId,
  orderBy = 'DATE',
  order = 'DESC',
  cursor = null,
  getNext = true,
  perPage = 10,
  options = {},
  client = null
) {
  const query = queryPostCategoryArchive(options)

  return getPostOfTypeTaxonomyArchive(
    'category',
    categoryId,
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
