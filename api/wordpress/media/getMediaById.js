import {gql} from '@apollo/client'
import {PropTypes} from 'prop-types'
import {initializeWpApollo} from '../connector'

/**
 * Retrieve media details by ID.
 *
 * @author WebDevStudios
 * @param {string} url The media source url.
 * @return {object}   Object containing Apollo client instance and post data or error object.
 */
export default async function getMediaByID(url) {
  const GET_MEDIA_BY_ID = gql`
    query getMediaById($url: ID!) {
      mediaItem(id: $url, idType: SOURCE_URL) {
        mediaDetails {
          height
          width
        }
      }
    }
  `

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Set up return object.
  const response = {
    apolloClient,
    error: false,
    errorMessage: null
  }

  // Execute query.
  response.post = await apolloClient
    .query({query: GET_MEDIA_BY_ID})
    .then((res) => {
      console.log(url, res.data) // eslint-disable-line
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message

      return null
    })

  return response
}

getMediaByID.propTypes = {
  url: PropTypes.string
}
