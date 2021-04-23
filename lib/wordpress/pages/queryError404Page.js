import defaultPageData from '@/lib/wordpress/_query-partials/defaultPageData'
import {gql} from '@apollo/client'
import {singlePageFragment} from './queryPageById'

// Query: retrieve 404 error page.
const queryError404Page = gql`
  query GET_ERROR_404_PAGE($imageSize: MediaItemSizeEnum = LARGE) {
    ${defaultPageData}
    headlessConfig {
      additionalSettings {
        error404Page {
          ... on Page {
            ...SinglePageFields
          }
        }
      }
    }
  }
  ${singlePageFragment}
`

export default queryError404Page
