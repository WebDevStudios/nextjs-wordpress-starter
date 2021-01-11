import {gql} from '@apollo/client'
import {wpDataEndpoints} from '@/api/wordpress/connector'

// Query: retrieve archive posts by post type.
const queryArchivePosts = gql`
  query GET_ARCHIVE_POSTS(
    $postType: String!
    $cursor: String!
    $orderBy: String = DATE
    $order: String = DESC
  ) {
    archive(
      postType: $postType
      cursor: $cursor
      orderBy: $orderBy
      order: $order
    ) @rest(type: "Archive", path: "${wpDataEndpoints.archive}?{args}") {
      pagination
      posts
    }
  }
`

export default queryArchivePosts
