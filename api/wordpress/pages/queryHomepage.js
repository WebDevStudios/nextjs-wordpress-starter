import {gql} from '@apollo/client'
import {singlePageFragment} from './queryPageById'

// Query: retrieve homepage.
const queryHomepage = gql`
  query GET_HOMEPAGE($imageSize: MediaItemSizeEnum = LARGE) {
    homepageSettings {
      frontPage {
        ...SinglePageFields
      }
    }
  }
  ${singlePageFragment}
`

export default queryHomepage
