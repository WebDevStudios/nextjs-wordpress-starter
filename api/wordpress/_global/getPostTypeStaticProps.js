import getPostTypeById from './getPostTypeById'

/**
 * Retrieve static props by post type.
 *
 * @param  {string}  params      Post params (e.g., slug).
 * @param  {string}  postType    Post Type.
 * @param  {boolean} preview     Whether requesting preview of post.
 * @param  {?Object} previewData Post preview data.
 * @return {Object}              Object containing post props and revalidate setting.
 */
export default async function getPostTypeStaticProps(
  params,
  postType
  // preview = false, // TODO - add preview handling.
  // previewData = null
) {
  // Handle catch-all routes.
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug

  // Retrieve post data.
  const post = await getPostTypeById(postType, slug)

  return {
    props: {
      post
    },
    revalidate: 60 * 5
  }
}
