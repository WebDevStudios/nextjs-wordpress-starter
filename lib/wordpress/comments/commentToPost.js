import {initializeWpApollo} from '../connector'
import mutationCommentToPost from './mutationCommentToPost'

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
 * @param {string} token       Logged-in user's auth token. Set to `null` if the user is not logged.
 * @param {number} postId      Database ID for the post being commented on.
 * @param {string} content     Comment content.
 * @param {string} author      Guest commentor's name.
 * @param {string} authorEmail Guest commentor's email.
 * @param {string} authorUrl   Guest commentor's website url.
 * @return {object}            Comment data or error object.
 */
export default async function commentToPost(
  token = null,
  postId = 0,
  content = '',
  author = '',
  authorEmail = '',
  authorUrl = ''
) {
  if (!postId) {
    return {
      error: true,
      errorMessage: 'Provide a valid post id.'
    }
  }

  if (!content) {
    return {
      error: true,
      errorMessage: 'Please insert a comment'
    }
  }

  let variables = {
    postId,
    content
  }

  if (author) variables.author = author
  if (authorEmail) variables.authorEmail = authorEmail
  if (authorUrl) variables.authorUrl = authorUrl

  const apolloClient = initializeWpApollo()

  return apolloClient
    .mutate({
      mutation: mutationCommentToPost,
      variables,
      context: {
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      }
    })
    .then((response) => {
      return response
    })
    .catch((error) => error)
}
