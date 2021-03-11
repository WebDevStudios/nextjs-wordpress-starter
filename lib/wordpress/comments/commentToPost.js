import {initializeWpApollo} from '../connector'
import mutationCommentToPost from './mutationCommentToPost'

/**
 * @param postId
 * @param content
 * @param token
 */
export default async function commentToPost(postId, content, token) {
  if (!token) {
    return {
      error: true,
      errorMessage: 'Please try to login again.'
    }
  }

  const apolloClient = initializeWpApollo()

  return apolloClient
    .mutate({
      mutation: mutationCommentToPost,
      variables: {
        postId,
        content
      },
      context: {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    })
    .then((response) => {
      return response
    })
    .catch((error) => error)
}
