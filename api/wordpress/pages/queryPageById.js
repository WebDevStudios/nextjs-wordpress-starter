import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import authorPostFields from '../_partials/authorPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import {gql} from '@apollo/client'
import defaultSeoFields from '../_partials/defaultSeoFields'

// Fragment: retrieve single page fields.
export const singlePageFragment = gql`
  fragment SinglePageFields on Page {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
  }
`

// Query: retrieve page by specified identifier.
const queryPageById = gql`
  query GET_PAGE_BY_ID(
    $id: ID!
    $idType: PageIdType = URI
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultSeoFields}
    page(id: $id, idType: $idType) {
      ...SinglePageFields
      isPostsPage
    }
  }
  ${singlePageFragment}
`

export default queryPageById
