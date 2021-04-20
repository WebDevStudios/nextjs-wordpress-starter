import getPostTypeById from '@/functions/wordpress/postTypes/getPostTypeById'
import {wpPreviewSecret} from '@/lib/wordpress/connector'
import {postTypes} from '@/lib/wordpress/_config/postTypes'

/**
 * Provide post preview functionality.
 *
 * @author WebDevStudios
 * @param {object} req Instance of http.IncomingMessage.
 * @param {object} res Instance of http.ServerResponse.
 * @return {object} Redirects to appropriate post route on success, returns response error object otherwise.
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

    const {post, error, errorMessage} = await getPostTypeById(
      post_type,
      id,
      'DATABASE_ID',
      'basic'
    )

    // Handle response errors.
    if (error) {
      throw new Error(errorMessage)
    }

    // Set page preview data and enable preview mode.
    res.setPreviewData({
      post: {
        id: post.databaseId,
        slug: post.slug,
        status: post.status
      }
    })

    const baseRoute = postTypes?.[post_type]?.route ?? ''

    // Redirect to post dynamic route.
    res.redirect(
      `${baseRoute ? `/${baseRoute}` : ''}/${post.slug || post.databaseId}`
    )
  } catch (error) {
    return res.status(error?.status || 401).json({
      message:
        error?.message ||
        'An error occurred while attempting to view post preview'
    })
  }
}
