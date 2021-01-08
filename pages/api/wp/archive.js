import getPostTypeArchive from '@/api/wordpress/_global/getPostTypeArchive'

/**
 * Load more posts for an archive.
 *
 * @param  {Object} req Instance of http.IncomingMessage.
 * @param  {Object} res Instance of http.ServerResponse.
 */
export default async function archive(req, res) {
  // Retrieve props from request body.
  const {postType, orderBy = 'DATE', order = 'DESC', cursor = null} = req.body

  return await getPostTypeArchive(postType, orderBy, order, cursor).then(
    (posts) => {
      res.end(JSON.stringify(posts))
    }
  )
}
