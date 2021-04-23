import {initializeNextApiApollo} from '@/lib/next-api/connector'
import mutationAddComment from '@/lib/next-api/wordpress/comments/mutationAddComment'

/**
 * Add a comment to the given post. Follows established WordPress
 * behavior for posting comments:
 *
 * If this is an authenticated request (i.e. "logged in"), the `author`
 * fields will be ignored in favor of the logged-in user's information.
 *
 * If comment moderation is turned on, the `data.createComment.comment`
 * object may be `null`. This does not necessarily indicate an error;
 * the comment may be held for moderation.
 *
 * If the comment does not need manual approval, it will be returned
 * with this query.
 *
 * @author WebDevStudios
 * @param {string} token       Logged-in user auth token.
 * @param {number} postId      Database ID for the post being commented on.
 * @param {string} content     Content of the comment.
 * @param {string} author      Name of the comment author.
 * @param {string} authorEmail Email for the comment author.
 * @param {string} authorUrl   URL/website for the comment author.
 * @return {object}            Comment data or error object.
 */
export default async function processPostComment(
  token,
  postId,
  content,
  author = null,
  authorEmail = null,
  authorUrl = null
) {
  // Check data values.
  if (!postId || !parseInt(postId, 10)) {
    return {
      error: true,
      errorMessage: 'Post ID is not valid.'
    }
  }

  if (!content) {
    return {
      error: true,
      errorMessage: 'Comment content cannot be empty.'
    }
  }

  const apolloClient = initializeNextApiApollo()

  return apolloClient
    .mutate({
      mutation: mutationAddComment,
      variables: {
        token,
        author,
        authorEmail,
        authorUrl,
        postId,
        content
      }
    })
    .then(
      (response) =>
        response?.data?.postComment ?? {
          error: true,
          errorMessage: `An error occurred while attempting to process the comment.`
        }
    )
    .catch((error) => {
      return {
        error: true,
        errorMessage: error.message
      }
    })
}
