import getPostTypeStaticPaths from '@/api/wordpress/_global/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Layout from '@/components/common/Layout'
import {BlogJsonLd} from 'next-seo'
import Link from 'next/link'
import PropTypes from 'prop-types'
import getArchivePosts from '@/api/frontend/wp/archive/getArchivePosts'

// Define route post type.
const postType = 'post'

/**
 * The BlogPost component displays an individual blog post via dynamic routing.
 *
 * @author WebDevStudios
 * @param  {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */
export default function BlogPost({post, archive, posts, pagination}) {
  /**
   * Load more posts for archive.
   */
  async function loadPosts() {
    const response = await getArchivePosts(postType, pagination?.endCursor)

    // TODO: use response to display next "page" of posts.
    console.log(response)
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
      <BlogJsonLd
        url="Query from Yoast SEO"
        title="Query from Yoast SEO"
        images={['Query from Yoast SEO']}
        datePublished="Query from Yoast SEO"
        dateModified="Query from Yoast SEO"
        authorName="Query from Yoast SEO"
        description="Query from Yoast SEO"
      />
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
  archive: PropTypes.bool,
  pagination: PropTypes.object
}
