import defaultPageData from '@/lib/wordpress/_query-partials/defaultPageData'
import {gql} from '@apollo/client'

// Query: retrieve default SEO and other page data.
const queryDefaultPageData = gql`
  query GET_DEFAULT_PAGE_DATA {
    ${defaultPageData}
  }
`

export default queryDefaultPageData
