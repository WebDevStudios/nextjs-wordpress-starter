import getPostTypeById from '@/functions/wordpress/postTypes/getPostTypeById'
import {wpPreviewSecret} from '@/lib/wordpress/connector'

/**
 * Provide post preview functionality.
 *
 * @author WebDevStudios
 * @param  {object} req Instance of http.IncomingMessage.
 * @param  {object} res Instance of http.ServerResponse.
 * @return {object}     Redirects to appropriate post route on success, returns response error object otherwise.
 */
export default async function preview(req, res) {
  try {
    const {token, id, slug, post_type} = req.query

    // Verify preview secret token.
    if (
      !token ||
      !wpPreviewSecret ||
      token !== wpPreviewSecret ||
      (!id && !slug)
    ) {
      throw new Error('Invalid token')
    }

    // Ensure first letter of post type is lowercase to match GraphQL.
    const postType = post_type
      ? post_type.charAt(0).toLowerCase() + post_type.slice(1)
      : ''

    const {post, error, errorMessage} = await getPostTypeById(
      postType,
      id,
      'DATABASE_ID',
      'basic'
    )

    // Handle response errors.
    if (error) {
      throw new Error(errorMessage)
    }

    const previewData = {
      post: {
        id: post.databaseId,
        slug: post.slug,
        status: post.status,
        uri: post.uri,
        postType: postType
      }
    }

    // Set page preview data and enable preview mode.
    res.setPreviewData(previewData)

    // Redirect to post dynamic route.
    res.redirect(
      post.slug && post.uri && post.uri.indexOf('?page_id=') === -1
        ? post.uri
        : `../../../preview/${post.databaseId}`
    )
  } catch (error) {
    return res.status(error?.status || 401).json({
      message:
        error?.message ||
        'An error occurred while attempting to view post preview'
    })
  }
}
