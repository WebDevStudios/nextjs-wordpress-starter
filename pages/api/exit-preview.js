/**
 * Exit preview mode and redirect to homepage.
 *
 * @author WebDevStudios
 * @param {object} req Instance of http.IncomingMessage.
 * @param {object} res Instance of http.ServerResponse.
 */
export default async function exit(req, res) {
  res.clearPreviewData()
  res.writeHead(307, {Location: '/'})
  res.end()
}
