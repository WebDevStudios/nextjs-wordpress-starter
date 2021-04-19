import insertPostComment from '@/functions/wordpress/comments/insertPostComment'

/**
 * Add comment to WP post.
 *
 * @author WebDevStudios
 * @param {object} req Instance of http.IncomingMessage.
 * @param {object} res Instance of http.ServerResponse.
 */
export default async function comment(req, res) {
  try {
    // Retrieve props from request query params.
    const {author, authorEmail, authorUrl, postId, content, token} = req.query

    // Basic check to see if the referer matches the host.
    // This is trivially easy to bypass, but it's a first step.
    if (
      !req.headers.referer ||
      !req.headers.referer.includes(req.headers.host)
    ) {
      throw new Error('Unauthorized access')
    }

    const commentResponse = await insertPostComment(
      token,
      postId,
      content,
      author,
      authorEmail,
      authorUrl
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
          'An error occurred while trying to insert the post comment'
      )
  }
}
