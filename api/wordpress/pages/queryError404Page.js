import {gql} from '@apollo/client'
import {singlePageFragment} from './queryPageById'
import defaultPageData from '../_partials/defaultPageData'

// Query: retrieve 404 error page.
const queryError404Page = gql`
  query GET_ERROR_404_PAGE($imageSize: MediaItemSizeEnum = LARGE) {
    ${defaultPageData}
    additionalSettings {
      additionalSettings {
        page: error404Page {
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
