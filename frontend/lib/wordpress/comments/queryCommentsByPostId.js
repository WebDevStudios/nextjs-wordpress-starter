import archivePageInfo from '@/lib/wordpress/_query-partials/archivePageInfo'
import commentsFields from '@/lib/wordpress/_query-partials/commentsFields'
import {gql} from '@apollo/client'

// Query: retrieve comments by post databaseId.
const queryCommentsByPostId = gql`
  query GET_COMMENTS_BY_POST_ID(
    $id: ID!
    $first: Int
    $last: Int
    $after: String
    $before: String
    $order: OrderEnum = ASC
    $orderby: CommentsConnectionOrderbyEnum = COMMENT_DATE
  ) {
    comments(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {contentId: $id, order: $order, orderby: $orderby}
    ) {
      ${archivePageInfo}
      edges {
        node {
          ${commentsFields}
        }
      }
    }
  }
`

export default queryCommentsByPostId
