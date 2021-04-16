import authorPostFields from '@/lib/wordpress/_partials/authorPostFields'
import categoriesPostFields from '@/lib/wordpress/_partials/categoriesPostFields'
import commentsPostFields from '@/lib/wordpress/_partials/commentsPostFields'
import defaultPageData from '@/lib/wordpress/_partials/defaultPageData'
import featuredImagePostFields from '@/lib/wordpress/_partials/featuredImagePostFields'
import globalPostFields from '@/lib/wordpress/_partials/globalPostFields'
import seoPostFields from '@/lib/wordpress/_partials/seoPostFields'
import tagsPostFields from '@/lib/wordpress/_partials/tagsPostFields'
import {gql} from '@apollo/client'

// Fragment: retrieve single post fields.
const singlePostFragment = gql`
  fragment SinglePostFields on Post {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
    ${tagsPostFields}
    ${categoriesPostFields}
    ${commentsPostFields}
  }
`
// Query: retrieve post by specified identifier.
const queryPostById = gql`
  query GET_POST_BY_ID(
    $id: ID!
    $idType: PostIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    post(id: $id, idType: $idType) {
      ...SinglePostFields
    }
  }
  ${singlePostFragment}
`

export default queryPostById
