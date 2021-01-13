import getPostTypeStaticPaths from '@/api/wordpress/_global/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Layout from '@/components/common/Layout'
import PropTypes from 'prop-types'

// TODO Remove BlockGravityForm once block support is added.
// TODO Remove slug based BlockGravityForm from page render.
import BlockGravityForm from '@/components/blocks/BlockGravityForm'

// Define route post type.
const postType = 'page'

/**
 * Render the Page component.
 *
 * @author WebDevStudios
 * @param {object} props      The component attributes as props.
 * @param {object} props.post Post data from WordPress.
 * @return {Element}          The Page component.
 */
export default function Page({post}) {
  return (
    <Layout
      title="Query from Yoast SEO"
      description="Query from Yoast SEO"
      noIndex={false} // query from yoast seo
      noFollow={false} // query from yoast seo
      openGraph={{
        title: 'Query from Yoast SEO',
        description: 'Query from Yoast SEO',
        images: [
          {
            url: 'Query from Yoast SEO',
            alt: 'Query from Yoast SEO'
          }
        ]
      }}
    >
      <div className="container">
        <section>
          <article>
            <h1 dangerouslySetInnerHTML={{__html: post?.title}} />
            <div
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(post?.blocks ?? [])
              }}
            />
          </article>
        </section>
        {post.slug === 'form-demo' && <BlockGravityForm {...post?.blocks[0]} />}
      </div>
    </Layout>
  )
}

/**
 * Get post static paths.
 *
 * @author WebDevStudios
 * @return {object} Object consisting of array of paths and fallback setting.
 */
export async function getStaticPaths() {
  return await getPostTypeStaticPaths(postType)
}

/**
 * Get post static props.
 *
 * @param {object} context        Context for current post.
 * @param {object} context.params Route parameters for current post.
 * @return {object}               Post props.
 */
export async function getStaticProps({params}) {
  return getPostTypeStaticProps(params, postType)
}

Page.propTypes = {
  props: PropTypes.object,
  post: PropTypes.object
}
