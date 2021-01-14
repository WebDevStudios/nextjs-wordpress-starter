import {gql} from '@apollo/client'
import globalPostFields from '../_partials/globalPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import archivePageInfo from '../_partials/archivePageInfo'
import seoPostFields from '../_partials/seoPostFields'

// Fragment: retrieve archive career fields.
const archiveCareerFragment = gql`
  fragment ArchiveCareerFields on Career {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
  }
`

// Query: retrieve careers archive.
const queryCareersArchive = gql`
  query GET_CAREERS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    homepageSettings {
      frontPage {
        ${seoPostFields}
      }
    }
    careers(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {orderby: {field: $orderBy, order: $order}}
    ) {
      ${archivePageInfo}
      edges {
        node {
          ...ArchiveCareerFields
        }
      }
    }
  }
  ${archiveCareerFragment}
`

export default queryCareersArchive
