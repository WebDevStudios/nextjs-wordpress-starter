import Layout from '@/components/common/Layout'
import AlgoliaResults from '@/components/molecules/AlgoliaResults'
import parseQuerystring from '@/functions/parseQuerystring'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'
import config from '@/functions/config'

// TODO: Pass Algolia indexName via props from ENV vars.

/**
 * The Search component displays the search page.
 */
export default function Search() {
  const router = useRouter()
  const path = router?.asPath // URL from router.
  const query = path.includes('q=') ? parseQuerystring(path, 'q') : '' // Parse the querystring.
  const algoliaConfig = {
    query: query,
    hitsPerPage: 15
  }

  return (
    <Layout title={config.siteTitle} description={config.siteDescription}>
      <AlgoliaResults
        indexName="wds_dev_searchable_posts"
        config={algoliaConfig}
        isSearch={true}
      />
    </Layout>
  )
}
