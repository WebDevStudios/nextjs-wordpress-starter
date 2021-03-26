import {gql} from '@apollo/client'
import commentsFields from '../_partials/commentsFields'

// Mutation: Add a comment to the given post.
const mutationInsertComment = gql`
  mutation INSERT_COMMENT(
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
      success
      comment {
        ${commentsFields}
      }
    }
  }
`

export default mutationInsertComment
