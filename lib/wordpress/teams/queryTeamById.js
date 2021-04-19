import authorPostFields from '@/lib/wordpress/_query-partials/authorPostFields'
import defaultPageData from '@/lib/wordpress/_query-partials/defaultPageData'
import featuredImagePostFields from '@/lib/wordpress/_query-partials/featuredImagePostFields'
import globalPostFields from '@/lib/wordpress/_query-partials/globalPostFields'
import seoPostFields from '@/lib/wordpress/_query-partials/seoPostFields'
import {gql} from '@apollo/client'

// Fragment: retrieve single team member fields.
const singleTeamFragment = gql`
  fragment SingleTeamFields on Team {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
    teamMemberProfile {
      location
      title
    }
  }
`

// Query: retrieve team member by specified identifier.
const queryTeamById = gql`
  query GET_TEAM_BY_ID(
    $id: ID!
    $idType: TeamIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    team(id: $id, idType: $idType) {
      ...SingleTeamFields
    }
  }
  ${singleTeamFragment}
`

export default queryTeamById
