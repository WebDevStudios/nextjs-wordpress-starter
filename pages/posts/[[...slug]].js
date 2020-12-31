import Layout from '@/components/common/Layout'
import {Info} from '@/components/molecules/Alert'
import PropTypes from 'prop-types'
import getPostTypeStaticPaths from '@/api/wordpress/_global/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Link from 'next/link'

// Define route post type.
const postType = 'post'

/**
 * The BlogPost component displays an individual blog post via dynamic routing.
 *
 * @author WebDevStudios
 * @param  {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */
export default function BlogPost({post, posts, archive}) {
  // Check for post archive.
  // TODO create generic archive component and move this check to `_app.js`.
  if (archive) {
    return (
      <Layout title="Blog">
        <div className="container">
          <section>
            {!posts || !posts.length ? (
              <p>No posts found.</p>
            ) : (
              posts.map((post, index) => (
                <>
                  <article key={index}>
                    <Link href={post.uri}>
                      <a>
                        <h1 dangerouslySetInnerHTML={{__html: post?.title}} />
                      </a>
                    </Link>
                    <div dangerouslySetInnerHTML={{__html: post?.excerpt}} />
                  </article>
                  <hr />
                </>
              ))
            )}
          </section>
        </div>
      </Layout>
    )
  }

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
            <div
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(post?.blocks ?? [])
              }}
            />
          </article>
        </section>
      </div>
    </Layout>
  )
}

/**
 * Get post static paths.
 *
 * @author WebDevStudios
 * @return {Object} Object consisting of array of paths and fallback setting.
 */
export async function getStaticPaths() {
  return await getPostTypeStaticPaths(postType)
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
  return getPostTypeStaticProps(params, postType)
}

BlogPost.propTypes = {
  post: PropTypes.object,
  posts: PropTypes.array,
  archive: PropTypes.bool
}
