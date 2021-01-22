import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import authorPostFields from '../_partials/authorPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import {gql} from '@apollo/client'
import defaultPageData from '../_partials/defaultPageData'

// Fragment: retrieve single testimonial fields.
const singleTestimonialFragment = gql`
  fragment SingleTestimonialFields on Testimonial {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
  }
`

// Query: retrieve testimonial by specified identifier.
const queryTestimonialById = gql`
  query GET_TESTIMONIAL_BY_ID(
    $id: ID!
    $idType: TestimonialIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    testimonial(id: $id, idType: $idType) {
      ...SingleTestimonialFields
    }
  }
  ${singleTestimonialFragment}
`

export default queryTestimonialById
