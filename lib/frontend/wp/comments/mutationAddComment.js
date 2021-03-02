import {wpDataEndpoints} from '@/lib/wordpress/connector'
import commentsFields from '@/lib/wordpress/_partials/commentsFields'
import {gql} from '@apollo/client'

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
