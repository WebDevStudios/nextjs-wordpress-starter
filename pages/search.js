import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Layout from '@/components/common/Layout'
import AlgoliaResults from '@/components/molecules/AlgoliaResults'
import parseQuerystring from '@/functions/parseQuerystring'
import {useRouter} from 'next/router'
import config from '@/functions/config'

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
      <AlgoliaResults config={algoliaConfig} isSearch={true} />
    </Layout>
  )
}

/**
 * Get post static props.
 *
 * @param  {Object}  context             Context for current post.
 * @param  {boolean} context.preview     Whether requesting preview of post.
 * @param  {Object}  context.previewData Post preview data.
 * @return {Object}                      Post props.
 */
export async function getStaticProps() {
  return await getPostTypeStaticProps({slug: '/'}, 'search')
}
