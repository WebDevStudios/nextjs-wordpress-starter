import {gql} from '@apollo/client'

const queryMediaAttributes = gql`
  query GET_MEDIA_ATTS($id: ID!) {
    mediaItem(id: $id, idType: DATABASE_ID) {
      altText
      caption(format: RAW)
      description(format: RAW)
      mediaItemUrl
      title(format: RAW)
      uri
      mediaDetails {
        height
        width
        sizes {
          file
          fileSize
          height
          mimeType
          name
          sourceUrl
          width
        }
      }
    }
  }
`

export default queryMediaAttributes
