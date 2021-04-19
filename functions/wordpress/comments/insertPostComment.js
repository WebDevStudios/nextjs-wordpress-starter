import mutationInsertComment from '@/lib/wordpress/comments/mutationInsertComment'
import {initializeWpApollo} from '@/lib/wordpress/connector'

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
export default async function insertPostComment(
  token,
  postId,
  content,
  author,
  authorEmail,
  authorUrl
) {
  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Set up return object.
  const response = {
    apolloClient,
    success: false,
    comment: null
  }

  // Determine query variables.
  const variables = {
    author,
    authorEmail,
    authorUrl,
    postId: parseInt(postId, 10),
    content
  }

  // Execute query.
  await apolloClient
    .mutate({
      mutation: mutationInsertComment,
      variables,
      context: {
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      }
    })
    .then((comment) => {
      const {createComment} = comment.data

      // Set error props if data not found.
      if (!createComment) {
        response.error = true
        response.errorMessage =
          'An error occurred while trying to insert the post comment.'

        return null
      }

      response.success = createComment.success
      response.comment = createComment.comment
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message
    })

  return response
}
