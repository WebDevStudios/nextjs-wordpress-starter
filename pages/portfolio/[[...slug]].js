import getPostTypeStaticPaths from '@/api/wordpress/_global/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Layout from '@/components/common/Layout'
import Link from 'next/link'
import getArchivePosts from '@/api/frontend/wp/archive/getArchivePosts'
import getPagePropTypes from '@/functions/getPagePropTypes'

// Define route post type.
const postType = 'portfolio'

/**
 * Render the BlogPost component.
 *
 * @author WebDevStudios
 * @param {object}  props            The component attributes as props.
 * @param {object}  props.post       Post data from WordPress.
 * @param {boolean} props.archive    Whether displaying single post (false) or archive (true).
 * @param {Array}   props.posts      Array of post data from WordPress.
 * @param {object}  props.pagination Archive pagination data from WordPress.
 * @return {Element}                 The BlogPost component.
 */
export default function Portfolio({post, archive, posts, pagination}) {
  /**
   * Load more posts for archive.
   */
  async function loadPosts() {
    // TODO: use response to display next "page" of posts.
    await getArchivePosts(postType, pagination?.endCursor)
  }

  // Check for post archive.
  // TODO create generic archive component and move this check to `_app.js`.
  if (archive) {
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
            {!posts || !posts.length ? (
              <p>No posts found.</p>
            ) : (
              posts.map((post, index) => (
                <article key={index}>
                  <Link href={post.uri}>
                    <a>
                      <h1 dangerouslySetInnerHTML={{__html: post?.title}} />
                    </a>
                  </Link>
                  <div dangerouslySetInnerHTML={{__html: post?.excerpt}} />
                </article>
              ))
            )}
            {/* TODO: replace this with a component. */}
            <button onClick={loadPosts} disabled={!pagination.hasNextPage}>
              Load more
            </button>
          </section>
        </div>
      </Layout>
    )
  }

  return (
    <Layout seo={{...post.seo}} hasJsonLd={true}>
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

Portfolio.propTypes = {
  ...getPagePropTypes(postType)
}
