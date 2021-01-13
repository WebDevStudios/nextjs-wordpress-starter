import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Layout from '@/components/common/Layout'
import AlgoliaResults from '@/components/molecules/AlgoliaResults'
import parseQuerystring from '@/functions/parseQuerystring'
import {useRouter} from 'next/router'
import config from '@/functions/config'

/**
 * Render the Search component.
 *
 * @author WebDevStudios
 * @return {Element} The Search component.
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
 * @return {object} Post props.
 */
export async function getStaticProps() {
  return await getPostTypeStaticProps({slug: '/'}, 'search')
}
