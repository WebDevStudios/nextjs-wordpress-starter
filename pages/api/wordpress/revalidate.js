/**
 * On-demand post revalidation.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation
 * @author WebDevStudios
 * @param {object} req Instance of http.IncomingMessage.
 * @param {object} res Instance of http.ServerResponse.
 */
export default async function revalidate(req, res) {
  // Check for a valid secret.
  if (req.body.secret !== process.env.WORDPRESS_PREVIEW_SECRET) {
    return res.status(401).json({
      message:
        'Invalid secret. Please check your .env file or the POST request.'
    })
  }

  // Check for a valid post slug.
  if (!req.body.slug) {
    return res.status(400).json({
      message: 'A slug is required to revalidate the cache.'
    })
  }

  // Try to revalidate the post cache.
  try {
    await res.unstable_revalidate(req.body.slug)
    return res.status(200).json({
      message: `Success! The cache for ${req.body.slug} was successfully revalidated.`
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
}
