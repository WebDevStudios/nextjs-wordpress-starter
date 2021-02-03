import getArchivePosts from '@/api/frontend/wp/archive/getArchivePosts'
import postComment from '@/api/frontend/wp/comments/postComment'
import getPostTypeStaticPaths from '@/api/wordpress/_global/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import Container from '@/components/atoms/Container'
import Text from '@/components/atoms/Inputs/Text'
import Layout from '@/components/common/Layout'
import Blocks from '@/components/molecules/Blocks'
import Form from '@/components/molecules/Form'
import getPagePropTypes from '@/functions/getPagePropTypes'
import Link from 'next/link'
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
        <Container>
          <section>
            {!posts || !posts.length ? (
              <p>No posts found.</p>
            ) : (
              posts.map((post, index) => (
                <article key={index}>
                  <Link href={post?.uri}>
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
        </Container>
      </Layout>
    )
  }

  return (
    <Layout seo={{...post?.seo}} hasJsonLd={true}>
      <Container>
        <article>
          {!!post?.seo?.breadcrumbs && (
            <Breadcrumbs breadcrumbs={post.seo.breadcrumbs} />
          )}
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
 * @return {object} Post props.
 */
export async function getStaticProps({params, preview, previewData}) {
  return getPostTypeStaticProps(params, postType, preview, previewData)
}

BlogPost.propTypes = {
  ...getPagePropTypes(postType)
}
