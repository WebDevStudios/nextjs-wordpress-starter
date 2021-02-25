import {gql, useQuery} from '@apollo/client'
import {PropTypes} from 'prop-types'

/**
 * Render the Image component.
 *
 * @author WebDevStudios
 * @param {object} props            The component properties.
 * @param {string} props.url        The full URL path of the image.
 * @return {Element}                The Image component.
 */
export default function DisplayImage({url}) {
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

  // @see https://www.apollographql.com/docs/react/data/queries/
  const {loading, error, data} = useQuery(GET_MEDIA_BY_ID, {
    variables: {url}
  })

  if (loading) return 'Loading....'
  if (error) return `Error! ${error}`

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <Image
        src={url}
        height={data?.mediaItem?.mediaDetails?.height}
        width={data?.mediaItem?.mediaDetails?.width}
      /> */}
    </>
  )
}

DisplayImage.propTypes = {
  url: PropTypes.string
}
