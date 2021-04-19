import commentsFields from '@/lib/wordpress/_query-partials/commentsFields'
import {gql} from '@apollo/client'

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
