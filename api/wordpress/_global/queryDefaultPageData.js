import {gql} from '@apollo/client'
import defaultSeoFields from '../_partials/defaultSeoFields'
import allMenus from '../_partials/allMenus'

// Query: retrieve default SEO and other page data.
const queryDefaultPageData = gql`
  query GET_DEFAULT_SEO {
    ${defaultSeoFields}
    ${allMenus}
  }
`

export default queryDefaultPageData
