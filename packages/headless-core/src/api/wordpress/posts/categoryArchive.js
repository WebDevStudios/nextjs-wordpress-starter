import {gql} from '@apollo/client'
import isString from 'lodash/isString'
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
