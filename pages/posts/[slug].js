import Layout from '@/components/common/Layout'
import {Info} from '@/components/molecules/Alert'
import PropTypes from 'prop-types'
import getPostTypeStaticPaths from '@/api/wordpress/_global/getPostTypeStaticPaths'
import getPostTypeById from '@/api/wordpress/_global/getPostTypeById'

export default function BlogPost({post}) {
  return (
    <Layout title={post?.title} description={post?.excerpt}>
      <div className="container">
        <Info>
          The content below is sourced from the WordPress REST-API.{' '}
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation">
            Learn more about SSG.
          </a>
        </Info>

        <section>
          <article>
            <h1 dangerouslySetInnerHTML={{__html: post?.title}} />
            <div dangerouslySetInnerHTML={{__html: post?.blocksJSON}} />
          </article>
        </section>
      </div>
    </Layout>
  )
}

/**
 * Get post static paths.
 *
 * @return {Object} Object consisting of array of paths and fallback setting.
 */
export async function getStaticPaths() {
  return await getPostTypeStaticPaths('post')
}

/**
 * Get post static props.
 *
 * @param  {Object}  context             Context for current post.
 * @param  {Object}  context.params      Route parameters for current post.
 * @param  {boolean} context.preview     Whether requesting preview of post.
 * @param  {Object}  context.previewData Post preview data.
 * @return {Object}                      Post props.
 */
export async function getStaticProps({params}) {
  const post = await getPostTypeById('post', params.slug)

  return {props: {post: post?.data?.post ?? null}}
}

BlogPost.propTypes = {
  post: PropTypes.object
}
