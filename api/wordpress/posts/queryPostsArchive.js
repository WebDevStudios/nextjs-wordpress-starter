import {gql} from '@apollo/client'
import globalPostFields from '../_partials/globalPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'

// Fragment: retrieve archive post fields.
const archivePostFragment = gql`
  fragment ArchivePostFields on Post {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
  }
`

// Query: retrieve posts archive.
const queryPostsArchive = gql`
  query GET_POSTS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    posts(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {orderby: {field: $orderBy, order: $order}}
    ) {
      edges {
        node {
          ...ArchivePostFields
        }
      }
    }
  }
  ${archivePostFragment}
`

export default queryPostsArchive
