import archivePageInfo from '@/lib/wordpress/_query-partials/archivePageInfo'
import defaultPageData from '@/lib/wordpress/_query-partials/defaultPageData'
import seoPostFields from '@/lib/wordpress/_query-partials/seoPostFields'
import {gql} from '@apollo/client'
import {archivePostFragment} from './queryPostsArchive'

// Query partial: retrieve archive fields.
export const dateArchivePosts = `
  posts(
    first: $first
    last: $last
    after: $after
    before: $before
    where: {dateQuery: {year: $year, month: $month, day: $day}, orderby: {field: $orderBy, order: $order}, notIn: $notIn}
  ) {
    ${archivePageInfo}
    edges {
      node {
        ...ArchivePostFields
      }
    }
  }
`

// Query: retrieve posts archive.
const queryPostsDateArchive = gql`
  query GET_POSTS_DATE_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $year: Int
    $month: Int
    $day: Int
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $notIn: [ID] = []
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    homepageSettings {
      postsPage {
        ${seoPostFields}
      }
    }
    ${dateArchivePosts}
  }
  ${archivePostFragment}
`

export default queryPostsDateArchive
