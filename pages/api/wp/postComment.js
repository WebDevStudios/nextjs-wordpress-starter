import postCommentToPost from '@/api/wordpress/_global/postCommentToPost'

/**
 * Load more posts for an archive.
 *
 * @author WebDevStudios
 * @param {object} req Instance of http.IncomingMessage.
 * @param {object} res Instance of http.ServerResponse.
 */
export default async function postComment(req, res) {
  try {
    // Retrieve props from request query params.
    const {author, authorEmail, authorUrl, postId, content} = req.query

    const commentResponse = await postCommentToPost(
      author,
      authorEmail,
      authorUrl,
      postId,
      content
    )

    // Check for errors.
    if (commentResponse.error) {
      throw new Error(commentResponse.errorMessage)
    }

    // Remove Apollo client from return.
    delete commentResponse?.apolloClient

    res.status(200).send(commentResponse)
  } catch (error) {
    res
      .status(error?.status || 500)
      .end(
        error?.message ||
          'An error occurred while attempted to post the comment'
      )
  }
}
