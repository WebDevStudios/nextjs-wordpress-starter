import archiveData from '@/lib/wordpress/_query-partials/archiveData'
import defaultPageData from '@/lib/wordpress/_query-partials/defaultPageData'
import featuredImagePostFields from '@/lib/wordpress/_query-partials/featuredImagePostFields'
import globalPostFields from '@/lib/wordpress/_query-partials/globalPostFields'
import {gql} from '@apollo/client'

// Fragment: retrieve archive team fields.
const archiveTeamFragment = gql`
  fragment ArchiveTeamFields on Team {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
  }
`

// Query: retrieve teams archive.
const queryTeamsArchive = gql`
  query GET_TEAMS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    ${defaultPageData}
    teams(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {orderby: {field: $orderBy, order: $order}}
    ) {
      ${archiveData}
      edges {
        node {
          ...ArchiveTeamFields
        }
      }
    }
  }
  ${archiveTeamFragment}
`

export default queryTeamsArchive
