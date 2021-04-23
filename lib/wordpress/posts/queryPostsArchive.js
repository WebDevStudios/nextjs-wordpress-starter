import archivePageInfo from '@/lib/wordpress/_query-partials/archivePageInfo'
import defaultPageData from '@/lib/wordpress/_query-partials/defaultPageData'
import featuredImagePostFields from '@/lib/wordpress/_query-partials/featuredImagePostFields'
import globalPostFields from '@/lib/wordpress/_query-partials/globalPostFields'
import seoPostFields from '@/lib/wordpress/_query-partials/seoPostFields'
import {gql} from '@apollo/client'

// Fragment: retrieve archive post fields.
export const archivePostFragment = gql`
  fragment ArchivePostFields on Post {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
  }
`

// Query partial: retrieve archive fields.
export const archivePosts = `
  posts(
    first: $first
    last: $last
    after: $after
    before: $before
    where: {orderby: {field: $orderBy, order: $order}}
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
const queryPostsArchive = gql`
  query GET_POSTS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    ${defaultPageData}
    homepageSettings {
      postsPage {
        ${seoPostFields}
      }
    }
    ${archivePosts}
  }
  ${archivePostFragment}
`

export default queryPostsArchive
