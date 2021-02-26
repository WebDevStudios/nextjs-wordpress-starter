import {initializeWpApollo} from '../connector'
import queryMediaAttributes from './queryMediaAttributes'

/**
 * Retrieve media details by ID.
 *
 * @author WebDevStudios
 * @param {string} url The media source url.
 * @return {object}   Object containing Apollo client instance and post data or error object.
 */
export default async function getMediaByURL(url) {
  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Execute query.
  const media = await apolloClient
    .query({
      query: queryMediaAttributes,
      variables: {
        url: url
      }
    })
    .then((media) => media?.data?.mediaItem?.mediaDetails ?? null)
    .catch((error) => {
      return {
        isError: true,
        message: error.message
      }
    })

  return media
}
