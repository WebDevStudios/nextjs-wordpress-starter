import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import {gql} from '@apollo/client'

// Fragment: retrieve single career fields.
const singleCareerFragment = gql`
  fragment SingleCareerFields on Career {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${featuredImagePostFields}
  }
`

// Query: retrieve career by specified identifier.
const queryCareerById = gql`
  query GET_CAREER_BY_ID(
    $id: ID!
    $idType: CareerIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    career(id: $id, idType: $idType) {
      ...SingleCareerFields
    }
  }
  ${singleCareerFragment}
`

export default queryCareerById
