import {gql} from '@apollo/client'
import commentsFields from '../_partials/commentsFields'

// Mutation: Add a comment to the given post
const mutationCommentToPost = gql`
  mutation ADD_COMMENT(
    $author: String
    $authorEmail: String
    $authorUrl: String
    $postId: Int!
    $content: String!
  ) {
    createComment (
      input: {
        author: $author,
        authorEmail: $authorEmail,
        authorUrl: $authorUrl,
        commentOn: $postId,
        content: $content
      }
    ) {
      comment {
        ${commentsFields}
      }
    }
  }
`

export default mutationCommentToPost
