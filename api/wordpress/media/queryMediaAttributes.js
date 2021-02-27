import {gql} from '@apollo/client'

const queryMediaAttributes = gql`
  query GET_MEDIA_ATTS($id: ID!) {
    mediaItem(id: $id, idType: DATABASE_ID) {
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

export default queryMediaAttributes
