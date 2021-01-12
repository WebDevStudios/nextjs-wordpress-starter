import {gql} from '@apollo/client'
import globalPostFields from '../_partials/globalPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import archivePageInfo from '../_partials/archivePageInfo'

// Fragment: retrieve archive portfolio fields.
const archivePortfolioFragment = gql`
  fragment ArchivePortfolioFields on Portfolio {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
  }
`

// Query: retrieve portfolios archive.
const queryPortfoliosArchive = gql`
  query GET_PORTFOLIOS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    portfolios(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {orderby: {field: $orderBy, order: $order}}
    ) {
      ${archivePageInfo}
      edges {
        node {
          ...ArchivePortfolioFields
        }
      }
    }
  }
  ${archivePortfolioFragment}
`

export default queryPortfoliosArchive
