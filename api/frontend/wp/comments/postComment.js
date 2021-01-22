import mutationAddComent from './mutationAddComment'
import {initializeFeApollo} from '../../connector'

/**
 * Retrieve next page of posts for post type archive.
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
    .query({
      query: mutationAddComent,
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
