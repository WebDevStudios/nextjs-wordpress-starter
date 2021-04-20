import getFrontendPage from '@/functions/wordpress/postTypes/getFrontendPage'
import getHeadlessConfigPage from '@/functions/wordpress/postTypes/getHeadlessConfigPage'
import getPostTypeArchive from '@/functions/wordpress/postTypes/getPostTypeArchive'
import getPostTypeById from '@/functions/wordpress/postTypes/getPostTypeById'
import getPostTypeTaxonomyArchive from '@/functions/wordpress/postTypes/getPostTypeTaxonomyArchive'
import {algoliaIndexName} from '@/lib/algolia/connector'
import {addApolloState} from '@/lib/apolloConfig'
import archiveQuerySeo from '@/lib/wordpress/_config/archiveQuerySeo'
import frontendPageSeo from '@/lib/wordpress/_config/frontendPageSeo'
import headlessConfigPageQuerySeo from '@/lib/wordpress/_config/headlessConfigPageQuerySeo'

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

  /* -- Fallback: return error if params missing. -- */
  if (!params) {
    return '404' !== postType
      ? {
          notFound: true
        }
      : {
          props: {
            ...sharedProps
          },
          revalidate
        }
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

  /* -- Handle taxonomy archives. -- */
  if (
    Object.keys(archiveQuerySeo).includes(postType) &&
    params.slug.length > 1
  ) {
    const taxonomy = params.slug.shift() // First "slug" piece is taxonomy type.
    const taxonomySlug = params.slug.pop() // Last "slug" piece is the lowest-level taxonomy term slug.

    const {apolloClient, ...archiveData} = await getPostTypeTaxonomyArchive(
      taxonomy,
      taxonomySlug
    )

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

  /* -- Handle pages set via Additional Settings. -- */
  if (Object.keys(headlessConfigPageQuerySeo).includes(slug)) {
    const {apolloClient, ...pageData} = await getHeadlessConfigPage(slug)

    // Display 404 error page if error encountered.
    if (pageData.error && '404' !== slug) {
      return {
        notFound: true
      }
    }

    // Remove error prop.
    delete pageData?.error

    return addApolloState(apolloClient, {
      props: {
        ...pageData,
        ...sharedProps
      },
      revalidate
    })
  }

  /* -- Handle dynamic posts. -- */

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
    idType,
    isCurrentPostPreview ? 'full' : null
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

  // Display 404 error page if error encountered.
  if (props.error) {
    return {
      notFound: true
    }
  }

  // Merge in query results as Apollo state.
  return addApolloState(apolloClient, {
    props,
    revalidate
  })
}
