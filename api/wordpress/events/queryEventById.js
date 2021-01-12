import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import authorPostFields from '../_partials/authorPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import {gql} from '@apollo/client'

// Fragment: retrieve single event fields.
const singleEventFragment = gql`
  fragment SingleEventFields on Event {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
  }
`

// Query: retrieve event by specified identifier.
const queryEventById = gql`
  query GET_EVENT_BY_ID(
    $id: ID!
    $idType: EventIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    event(id: $id, idType: $idType) {
      ...SingleEventFields
    }
  }
  ${singleEventFragment}
`

export default queryEventById
