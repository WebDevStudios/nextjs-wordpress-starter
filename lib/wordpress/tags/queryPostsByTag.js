import {gql} from '@apollo/client'
import defaultPageData from '../_partials/defaultPageData'
import {archivePostFragment, archivePosts} from '../posts/queryPostsArchive'
import seoPostFields from '../_partials/seoPostFields'

// Query: retrieve posts tag archive.
const queryPostsByTag = gql`
  query GET_POSTS_BY_TAG(
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
    ${defaultPageData}
    tag(id: $id, idType: $idType) {
      ${seoPostFields}
      ${archivePosts}
    }
  }
  ${archivePostFragment}
`

export default queryPostsByTag
