import {gql} from '@apollo/client'
import globalPostFields from '../_partials/globalPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import archivePageInfo from '../_partials/archivePageInfo'
import defaultPageData from '../_partials/defaultPageData'

// Fragment: retrieve archive testimonial fields.
const archiveTestimonialFragment = gql`
  fragment ArchiveTestimonialFields on Testimonial {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
  }
`

// Query: retrieve testimonials archive.
const queryTestimonialsArchive = gql`
  query GET_TESTIMONIALS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    ${defaultPageData}
    testimonials(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {orderby: {field: $orderBy, order: $order}}
    ) {
      ${archivePageInfo}
      edges {
        node {
          ...ArchiveTestimonialFields
        }
      }
    }
  }
  ${archiveTestimonialFragment}
`

export default queryTestimonialsArchive
