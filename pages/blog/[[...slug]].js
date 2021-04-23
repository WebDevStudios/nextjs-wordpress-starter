import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import Button from '@/components/atoms/Button'
import Container from '@/components/atoms/Container'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import Blocks from '@/components/molecules/Blocks'
import Card from '@/components/molecules/Card'
import Comments from '@/components/molecules/Comments'
import getPagePropTypes from '@/functions/getPagePropTypes'
import getArchivePosts from '@/functions/next-api/wordpress/archive/getArchivePosts'
import getPostTypeStaticPaths from '@/functions/wordpress/postTypes/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'

// Define route post type.
const postType = 'post'

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
export default function BlogPost({post, archive, posts, pagination}) {
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
      <Layout seo={{...post?.seo}}>
        <Container>
          {!posts || !posts.length ? (
            <p>No posts found.</p>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  title={post?.title}
                  url={post?.uri}
                  body={post?.excerpt}
                />
              ))}
            </div>
          )}
          <Button
            onClick={loadPosts}
            text="Load More"
            type="secondary"
            disabled={!pagination.hasNextPage}
          />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout seo={{...post?.seo}} hasJsonLd={true}>
      <Container>
        <article className="innerWrap">
          {!!post?.seo?.breadcrumbs && (
            <Breadcrumbs breadcrumbs={post.seo.breadcrumbs} />
          )}
          <RichText tag="h1">{post?.title}</RichText>
          <Blocks blocks={post?.blocks} />
          <Comments comments={post?.comments?.edges} postId={post.databaseId} />
        </article>
      </Container>
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
 * @param {object}  context             Context for current post.
 * @param {object}  context.params      Route parameters for current post.
 * @param {boolean} context.preview     Whether requesting preview of post.
 * @param {object}  context.previewData Post preview data.
 * @return {object}                     Post props.
 */
export async function getStaticProps({params, preview, previewData}) {
  return getPostTypeStaticProps(params, postType, preview, previewData)
}

BlogPost.propTypes = {
  ...getPagePropTypes(postType)
}
