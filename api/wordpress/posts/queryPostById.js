import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import authorPostFields from '../_partials/authorPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import tagsPostFields from '../_partials/tagsPostFields'
import categoriesPostFields from '../_partials/categoriesPostFields'

const {gql} = require('@apollo/client')

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
  }
`
// Query: retrieve post by specified identifier.
const queryPostById = gql`
  query GET_POST_BY_SLUG(
    $id: ID!
    $idType: PostIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    post(id: $id, idType: $idType) {
      ...SinglePostFields
    }
  }
  ${singlePostFragment}
`

export default queryPostById
