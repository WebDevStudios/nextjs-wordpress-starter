import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import {gql} from '@apollo/client'

// Fragment: retrieve single career fields.
const singleCareerFragment = gql`
  fragment SinglePostFields on Post {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${featuredImagePostFields}
  }
`
// Query: retrieve career by specified identifier.
const queryCareerById = gql`
  query GET_POST_BY_ID(
    $id: ID!
    $idType: PostIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    post(id: $id, idType: $idType) {
      ...SinglePostFields
    }
  }
  ${singleCareerFragment}
`

export default queryCareerById
