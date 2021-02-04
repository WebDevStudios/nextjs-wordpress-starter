import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import authorPostFields from '../_partials/authorPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import {gql} from '@apollo/client'
import defaultPageData from '../_partials/defaultPageData'

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
      facebookUrl
      githubUrl
      instagramUrl
      linkedinUrl
      location
      websiteUrl
      twitterUrl
      title
      wordpressorgProfileUrl
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
