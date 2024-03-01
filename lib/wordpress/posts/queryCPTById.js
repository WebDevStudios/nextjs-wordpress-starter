import categoriesPostFields from '@/lib/wordpress/_query-partials/categoriesPostFields'
import commentsPostFields from '@/lib/wordpress/_query-partials/commentsPostFields'
import defaultPageData from '@/lib/wordpress/_query-partials/defaultPageData'
import tagsPostFields from '@/lib/wordpress/_query-partials/tagsPostFields'
import {gql} from '@apollo/client'

// Query: retrieve post by specified identifier.

/**
 * Function used to contruct an Apollo query based on CPT.
 *
 * @param  {string} postType The post type to return.
 * @return {string}          Returns the Apollo gql query.
 */
export default function constructCPTQuery(postType) {
  const queryCPTById = gql`
  query CPT_QUERY($id: ID!) {
    ${defaultPageData}
    ${postType}(id: $id, idType: DATABASE_ID) {
      blocksJSON
      databaseId
      date
      slug
      uri
      title
      status
      featuredImage {
        node {
          altText
          sourceUrl
          databaseId
          parentId
        }
      }
      seo {
        breadcrumbs {
          text
          url
        }
        fullHead
        metaRobotsNofollow
        metaRobotsNoindex
        title
      }
    }
    ${tagsPostFields}
    ${categoriesPostFields}
    ${commentsPostFields}
  }
`
  return queryCPTById
}
