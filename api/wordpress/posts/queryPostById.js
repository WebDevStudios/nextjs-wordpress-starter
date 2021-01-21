import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import authorPostFields from '../_partials/authorPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import tagsPostFields from '../_partials/tagsPostFields'
import categoriesPostFields from '../_partials/categoriesPostFields'
import {gql} from '@apollo/client'
import defaultSeoFields from '../_partials/defaultSeoFields'
import commentsPostFields from '../_partials/commentsPostFields'

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
    ${defaultSeoFields}
    post(id: $id, idType: $idType) {
      ...SinglePostFields
    }
  }
  ${singlePostFragment}
`

export default queryPostById
