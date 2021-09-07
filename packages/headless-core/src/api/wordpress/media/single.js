import {initializeWpApollo} from '../client'

// Query: retrieve media item data.
export const queryMediaItem = gql`
  query GET_MEDIA_Item($id: ID!) {
    mediaItem(id: $id, idType: DATABASE_ID) {
      altText
      mediaItemUrl
      mediaDetails {
        height
        width
        sizes {
          height
          name
          sourceUrl
          width
        }
      }
    }
  }
`

/**
 * Retrieve media item details by ID.
 *
 * @author WebDevStudios
 * @param  {number} id     The media's database ID.
 * @param  {object} client Apollo client instance.
 * @return {object}        Object containing Apollo client instance and post data or error object.
 */
export async function getMediaItem(id, client = null) {
  // Bail if no ID provided.
  if (!id) {
    return {}
  }

  // Get/create Apollo instance.
  const apolloClient = client ?? initializeWpApollo()

  // Execute query.
  const media = await apolloClient
    .query({
      query: queryMediaItem,
      variables: {
        id: id
      }
    })
    .then((media) => media?.data?.mediaItem ?? null)
    .catch((error) => {
      return {
        isError: true,
        message: error.message
      }
    })

  return media
}
