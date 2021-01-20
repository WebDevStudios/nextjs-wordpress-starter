import {gql} from '@apollo/client'
import defaultSeoFields from '../_partials/defaultSeoFields'

// Query: retrieve default SEO data.
const queryDefaultSeo = gql`
  query GET_DEFAULT_SEO {
    ${defaultSeoFields}
  }
`

export default queryDefaultSeo
