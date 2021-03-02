import {wpApiUrlBase} from '@/lib/wordpress/connector'

/**
 * Load more posts for an archive.
 *
 * @author WebDevStudios
 * @param {object} req Instance of http.IncomingMessage.
 * @param {object} res Instance of http.ServerResponse.
 */
export default function getWPUrl(req, res) {
  res.status(200).send({wpApiUrlBase})
}
