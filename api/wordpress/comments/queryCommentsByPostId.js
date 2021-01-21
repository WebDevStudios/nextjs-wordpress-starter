import {gql} from '@apollo/client'
import archivePageInfo from '../_partials/archivePageInfo'

// Fragment: retrieve comment fields.
const commentFragment = gql`
  fragment CommentFields on Comment {
    databaseId
    content(format: RENDERED)
    parentDatabaseId
    approved
    id
    date
    parentId
    commentId
    type
  }
`

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
          ...CommentFields
        }
      }
    }
  }
  ${commentFragment}
`

export default queryCommentsByPostId
