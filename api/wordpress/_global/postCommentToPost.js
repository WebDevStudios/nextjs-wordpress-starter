import {initializeWpApollo} from '../connector'
import mutationCommentToPost from '../comments/mutationCommentToPost'

/**
 * Post a comment to the given post. Follows established WordPress
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
 * @param {string} author      Name of the comment author.
 * @param {string} authorEmail Email for the comment author.
 * @param {string} authorUrl   URL/website for the comment author.
 * @param {number} postId      Database ID for the post being commented on.
 * @param {string} content     Content of the comment.
 * @return {object}            Comment data or error object.
 */
export default async function postCommentToPost(
  author,
  authorEmail,
  authorUrl,
  postId,
  content
) {
  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Set up return object.
  const response = {
    apolloClient,
    comment: null
  }

  // Determine query variables.
  const variables = {
    author,
    authorEmail,
    authorUrl,
    postId: parseInt(postId),
    content
  }

  // Execute query.
  await apolloClient
    .mutate({mutation: mutationCommentToPost, variables})
    .then((comment) => {
      const {data} = comment
      // Set error props if data not found.
      if (!data?.createComment) {
        response.error = true
        response.errorMessage = `An error occurred while trying to post the comment.`

        return null
      }

      response.comment = data.createComment.comment
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message
    })

  return response
}
