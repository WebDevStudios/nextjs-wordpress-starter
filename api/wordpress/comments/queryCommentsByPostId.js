import {gql} from '@apollo/client'
import archivePageInfo from '../_partials/archivePageInfo'
import commentsFields from '../_partials/commentsFields'

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
      ${commentsFields}
    }
  }
`

export default queryCommentsByPostId
