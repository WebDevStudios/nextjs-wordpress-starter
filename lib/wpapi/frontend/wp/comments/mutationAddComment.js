import {gql} from '@apollo/client'
import {wpDataEndpoints} from '@/wpapi/wordpress/connector'
import commentsFields from '@/wpapi/wordpress/_partials/commentsFields'

// Mutation: Add a comment to the given post
const mutationAddComment = gql`
  mutation ADD_COMMENT(
    $author: String
    $authorEmail: String
    $authorUrl: String
    $postId: Int!
    $content: String!
  ) {
    postComment (
      author: $author,
      authorEmail: $authorEmail,
      authorUrl: $authorUrl,
      postId: $postId,
      content: $content
    ) @rest(type: "Comments", path: "${wpDataEndpoints.postComment}?{args}") {
      success
      comment {
        ${commentsFields}
      }
    }
  }
`

export default mutationAddComment
