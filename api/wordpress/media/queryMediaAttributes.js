import {gql} from '@apollo/client'
const queryMediaAttributes = gql`
  query GET_MEDIA_ATTS($url: ID!) {
    mediaItem(id: $url, idType: SOURCE_URL) {
      mediaDetails {
        height
        width
      }
    }
  }
`
export default queryMediaAttributes
