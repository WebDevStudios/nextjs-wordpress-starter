import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import authorPostFields from '../_partials/authorPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import {gql} from '@apollo/client'
import defaultSeoFields from '../_partials/defaultSeoFields'

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
    ${defaultSeoFields}
    testimonial(id: $id, idType: $idType) {
      ...SingleTestimonialFields
    }
  }
  ${singleTestimonialFragment}
`

export default queryTestimonialById
