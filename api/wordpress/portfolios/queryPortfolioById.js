import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import authorPostFields from '../_partials/authorPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import {gql} from '@apollo/client'
import defaultPageData from '../_partials/defaultPageData'

// Fragment: retrieve single portfolio fields.
const singlePortfolioFragment = gql`
  fragment SinglePortfolioFields on Portfolio {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
  }
`

// Query: retrieve portfolio by specified identifier.
const queryPortfolioById = gql`
  query GET_PORTFOLIO_BY_ID(
    $id: ID!
    $idType: PortfolioIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    portfolio(id: $id, idType: $idType) {
      ...SinglePortfolioFields
    }
  }
  ${singlePortfolioFragment}
`

export default queryPortfolioById
