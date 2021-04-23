import Container from '@/components/atoms/Container'
import Layout from '@/components/common/Layout'
import AlgoliaResults from '@/components/molecules/AlgoliaResults'
import getPagePropTypes from '@/functions/getPagePropTypes'
import parseQuerystring from '@/functions/parseQuerystring'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import {useRouter} from 'next/router'

// Define route post type.
const postType = 'page'

/**
 * Render the Search component.
 *
 * @author WebDevStudios
 * @param {object} props      The component attributes as props.
 * @param {object} props.post Post data from WordPress.
 * @return {Element}          The Search component.
 */
export default function Search({post}) {
  const router = useRouter()
  const path = router?.asPath // URL from router.
  const query = path.includes('q=') ? parseQuerystring(path, 'q') : '' // Parse the querystring.
  const algoliaConfig = {
    query: query,
    hitsPerPage: 15
  }

  return (
    <Layout seo={{...post?.seo}}>
      <Container>
        <AlgoliaResults config={algoliaConfig} isSearch={true} />
      </Container>
    </Layout>
  )
}

/**
 * Get post static props.
 *
 * @author WebDevStudios
 * @return {object} Post props.
 */
export async function getStaticProps() {
  return await getPostTypeStaticProps(null, 'search')
}

Search.propTypes = {
  ...getPagePropTypes(postType)
}
