import getPostTypeStaticPaths from '@/api/wordpress/_global/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Layout from '@/components/common/Layout'
import BlockGravityForm from '@/components/blocks/BlockGravityForm'
import getPagePropTypes from '@/functions/getPagePropTypes'

// TODO Remove BlockGravityForm once block support is added.
// TODO Remove slug based BlockGravityForm from page render.

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
    <Layout seo={{...post.seo}}>
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
 * @author WebDevStudios
 * @param {object} context        Context for current post.
 * @param {object} context.params Route parameters for current post.
 * @return {object}               Post props.
 */
export async function getStaticProps({params}) {
  return getPostTypeStaticProps(params, postType)
}

Page.propTypes = {
  ...getPagePropTypes(postType)
}
