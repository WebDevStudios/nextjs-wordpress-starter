import {gql} from '@apollo/client'
import isString from 'lodash/isString'
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
export function queryPostArchive({rootFields = null, postFields = null}) {
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
