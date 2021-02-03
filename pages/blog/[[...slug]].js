import getArchivePosts from '@/api/frontend/wp/archive/getArchivePosts'
import postComment from '@/api/frontend/wp/comments/postComment'
import getPostTypeStaticPaths from '@/api/wordpress/_global/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Button from '@/components/atoms/Button'
import Text from '@/components/atoms/Inputs/Text'
import Layout from '@/components/common/Layout'
import Blocks from '@/components/molecules/Blocks'
import Card from '@/components/molecules/Card'
import Form from '@/components/molecules/Form'
import getPagePropTypes from '@/functions/getPagePropTypes'
import * as Yup from 'yup'

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
 * @return {Element} The BlogPost component.
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
        <section className="container py-20">
          {!posts || !posts.length ? (
            <p>No posts found.</p>
          ) : (
            <div className="w-1/3 grid grid-cols-1 gap-12">
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
            onClick={() => loadPosts}
            text="Load More"
            type="secondary"
            disabled={!pagination.hasNextPage}
          />
        </section>
      </Layout>
    )
  }

  return (
    <Layout seo={{...post?.seo}} hasJsonLd={true}>
      <article className="container py-40">
        <Blocks blocks={post?.blocks} />
        <div
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post?.comments ?? [])
          }}
        />

        <Form
          className="sample-form"
          id="form-1"
          title="Add a comment"
          validationSchema={Yup.object().shape({
            author: Yup.string().required('This field is required.'),
            authorEmail: Yup.string().required('This field is required.')
          })}
          onSubmit={async (values, {setSubmitting}) => {
            const {author, authorEmail, authorUrl, content} = values
            const response = await postComment(
              author,
              authorEmail,
              authorUrl,
              post.databaseId,
              content
            )
            response.error
              ? alert(response.errorMessage)
              : alert(JSON.stringify(response))
            setSubmitting(false)
          }}
        >
          <Text id="author" label="Author" isRequired type="text" />
          <Text id="authorEmail" label="Email" isRequired type="email" />
          <Text id="authorUrl" label="Website" type="url" />
          <Text id="content" label="Comment" isRequired type="text" />
        </Form>
      </article>
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
 * @return {object} Post props.
 */
export async function getStaticProps({params, preview, previewData}) {
  return getPostTypeStaticProps(params, postType, preview, previewData)
}

BlogPost.propTypes = {
  ...getPagePropTypes(postType)
}
