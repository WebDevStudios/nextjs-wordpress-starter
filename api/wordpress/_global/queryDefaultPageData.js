import {gql} from '@apollo/client'
import defaultPageData from '../_partials/defaultPageData'

// Query: retrieve default SEO and other page data.
const queryDefaultPageData = gql`
  query GET_DEFAULT_SEO {
    ${defaultPageData}
  }
`

export default queryDefaultPageData
