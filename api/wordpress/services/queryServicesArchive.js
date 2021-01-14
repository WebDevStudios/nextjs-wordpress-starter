import {gql} from '@apollo/client'
import globalPostFields from '../_partials/globalPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import archivePageInfo from '../_partials/archivePageInfo'
import seoPostFields from '../_partials/seoPostFields'

// Fragment: retrieve archive service fields.
const archiveServiceFragment = gql`
  fragment ArchiveServiceFields on Service {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
  }
`

// Query: retrieve services archive.
const queryServicesArchive = gql`
  query GET_SERVICES_ARCHIVE(
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
    services(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {orderby: {field: $orderBy, order: $order}}
    ) {
      ${archivePageInfo}
      edges {
        node {
          ...ArchiveServiceFields
        }
      }
    }
  }
  ${archiveServiceFragment}
`

export default queryServicesArchive
