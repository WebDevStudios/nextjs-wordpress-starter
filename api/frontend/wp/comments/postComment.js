import mutationAddComment from './mutationAddComment'
import {initializeFeApollo} from '../../connector'

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
export default async function postComment(
  author,
  authorEmail,
  authorUrl,
  postId,
  content
) {
  const apolloClient = initializeFeApollo()

  return apolloClient
    .mutate({
      mutation: mutationAddComment,
      variables: {
        author,
        authorEmail,
        authorUrl,
        postId,
        content
      }
    })
    .then(
      (response) =>
        response?.data?.createComment ?? {
          error: true,
          errorMessage: `An error occurred while trying to post the comment.`
        }
    )
    .catch((error) => {
      return {
        error: true,
        errorMessage: error.message
      }
    })
}
