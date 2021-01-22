import {gql} from '@apollo/client'
import globalPostFields from '../_partials/globalPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import archivePageInfo from '../_partials/archivePageInfo'
import defaultPageData from '../_partials/defaultPageData'

// Fragment: retrieve archive event fields.
const archiveEventFragment = gql`
  fragment ArchiveEventFields on Event {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
  }
`

// Query: retrieve events archive.
const queryEventsArchive = gql`
  query GET_EVENTS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    ${defaultPageData}
    events(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {orderby: {field: $orderBy, order: $order}}
    ) {
      ${archivePageInfo}
      edges {
        node {
          ...ArchiveEventFields
        }
      }
    }
  }
  ${archiveEventFragment}
`

export default queryEventsArchive
