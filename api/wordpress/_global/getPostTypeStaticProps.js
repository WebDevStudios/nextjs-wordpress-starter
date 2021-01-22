import {algoliaIndexName} from '@/api/algolia/connector'
import getPostTypeById from './getPostTypeById'
import getPostTypeArchive from './getPostTypeArchive'
import {addApolloState} from '@/api/apolloConfig'
import getFrontendPage, {frontendPageSeo} from './getFrontendPage'

/**
 * Retrieve static props by post type.
 *
 * @author WebDevStudios
 * @param {string}  params      Post params (e.g., slug).
 * @param {string}  postType    Post Type.
 * @param {boolean} preview     Whether requesting preview of post.
 * @param {object}  previewData Post preview data.
 * @return {object}             Object containing post props and revalidate setting.
 */
export default async function getPostTypeStaticProps(
  params,
  postType,
  preview = false,
  previewData = null
) {
  // Set revalidate length (seconds).
  const revalidate = 60 * 5

  // Set sharedProps.
  const sharedProps = {
    algolia: {
      indexName: algoliaIndexName
    }
  }

  /* -- Handle Frontend-only routes. -- */
  if (Object.keys(frontendPageSeo).includes(postType)) {
    const {apolloClient, ...routeData} = await getFrontendPage(postType)

    return addApolloState(apolloClient, {
      props: {
        ...routeData,
        ...sharedProps
      },
      revalidate
    })
  }

  /* -- Handle dynamic archive display. -- */
  if (!Object.keys(params).length) {
    const {apolloClient, ...archiveData} = await getPostTypeArchive(postType)

    // Merge in query results as Apollo state.
    return addApolloState(apolloClient, {
      props: {
        ...archiveData,
        ...sharedProps,
        archive: true
      },
      revalidate
    })
  }

  /* -- Handle individual posts. -- */

  // Handle catch-all routes.
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug

  // Get post identifier (ID or slug).
  const postId = Number.isInteger(Number(slug)) ? Number(slug) : slug

  // Check if preview mode is active and valid for current post (preview and post IDs or slugs match).
  const isCurrentPostPreview =
    preview &&
    (postId === previewData?.post?.id || postId === previewData?.post?.slug)

  // Check if viewing a draft post.
  const isDraft = isCurrentPostPreview && 'draft' === previewData?.post?.status

  // Set query variables.
  const id = isDraft ? previewData.post.id : slug
  const idType = isDraft ? 'DATABASE_ID' : 'SLUG'

  // Retrieve post data.
  const {apolloClient, error, ...postData} = await getPostTypeById(
    postType,
    id,
    idType
  )

  const props = {
    ...postData,
    ...sharedProps,
    error,
    preview: isCurrentPostPreview
  }

  // Fallback to empty props if homepage not set in WP.
  if ('/' === slug && error) {
    props.post = null
    props.error = false
  }

  // Merge in query results as Apollo state.
  return addApolloState(apolloClient, {
    props,
    revalidate
  })
}
