import {gql} from '@apollo/client'
import defaultPageData from '../_partials/defaultPageData'
import {archivePostFragment, archivePosts} from '../posts/queryPostsArchive'
import seoPostFields from '../_partials/seoPostFields'

// Query: retrieve posts category archive.
const queryPostsByCategory = gql`
  query GET_POSTS_BY_CATEGORY(
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
    ${defaultPageData}
    category(id: $id, idType: $idType) {
      ${seoPostFields}
      ${archivePosts}
    }
  }
  ${archivePostFragment}
`

export default queryPostsByCategory
