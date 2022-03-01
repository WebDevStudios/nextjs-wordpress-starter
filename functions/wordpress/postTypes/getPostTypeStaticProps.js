import getPostsDateArchive from '@/functions/wordpress/posts/getPostsDateArchive'
import getFrontendPage from '@/functions/wordpress/postTypes/getFrontendPage'
import getHeadlessConfigPage from '@/functions/wordpress/postTypes/getHeadlessConfigPage'
import getPostTypeArchive from '@/functions/wordpress/postTypes/getPostTypeArchive'
import getPostTypeById from '@/functions/wordpress/postTypes/getPostTypeById'
import {algoliaIndexName} from '@/lib/algolia/connector'
import {addApolloState} from '@/lib/apolloConfig'
import frontendPageSeo from '@/lib/wordpress/_config/frontendPageSeo'
import headlessConfigPageQuerySeo from '@/lib/wordpress/_config/headlessConfigPageQuerySeo'

/**
 * Retrieve static props by post type.
 *
 * @author WebDevStudios
 * @param  {string}  params      Post params (e.g., slug).
 * @param  {string}  postType    Post Type.
 * @param  {boolean} preview     Whether requesting preview of post.
 * @param  {object}  previewData Post preview data.
 * @return {object}              Object containing post props and revalidate setting.
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

  // /* -- Handle dynamic archive display. -- */
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

  /* -- Handle date-based archives. -- */
  const year =
    Array.isArray(params?.slug) &&
    params?.slug?.[0] &&
    !isNaN(params?.slug?.[0]) &&
    parseInt(params?.slug?.[0], 10)
  const month =
    year &&
    Array.isArray(params?.slug) &&
    params?.slug?.[1] &&
    !isNaN(params?.slug?.[1]) &&
    parseInt(params?.slug?.[1], 10)
  const day =
    month &&
    Array.isArray(params?.slug) &&
    params?.slug?.[2] &&
    !isNaN(params?.slug?.[2]) &&
    parseInt(params?.slug?.[2], 10)
  const isDateArchive = postType === 'page' && (year || month || day)

  if (isDateArchive) {
    const {apolloClient, ...archiveData} = await getPostsDateArchive(
      postType,
      year ?? null,
      month ?? null,
      day ?? null
    )

    // Merge in query results as Apollo state.
    return addApolloState(apolloClient, {
      props: {
        ...archiveData,
        ...sharedProps,
        dateArchive: true,
        year: params?.slug?.[0] ?? null,
        month: params?.slug?.[1] ?? null,
        day: params?.slug?.[2] ?? null
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
    (postId === previewData?.post?.id ||
      // Compare URIs with leading and trailing slashes stripped.
      postId.replace(/^\/|\/$/g, '') ===
        previewData?.post?.uri?.replace(/^\/|\/$/g, ''))

  // Check if viewing a draft post.
  const isDraft = isCurrentPostPreview && 'draft' === previewData?.post?.status

  // Set query variables.
  const id = isDraft ? previewData.post.id : slug
  const idType = isDraft ? 'DATABASE_ID' : 'SLUG'

  // Retrieve post data.
  const {apolloClient, error, errorMessage, notFound, ...postData} =
    await getPostTypeById(
      postType,
      id,
      idType,
      isCurrentPostPreview ? 'full' : null
    )

  // Check if dealing with posts page.
  if (postType === 'page' && postData?.post?.isPostsPage) {
    // Override page content with post archive.
    const {apolloClient: archiveApolloClient, ...archiveData} =
      await getPostTypeArchive('post')

    // Merge in query results as Apollo state.
    return addApolloState(archiveApolloClient, {
      props: {
        ...archiveData,
        ...sharedProps,
        archive: true
      },
      revalidate
    })
  }

  const props = {
    ...postData,
    ...sharedProps,
    error,
    errorMessage,
    preview: isCurrentPostPreview
  }

  if ('/' === slug && notFound === true) {
    // Fallback to empty props if homepage not set in WP.
    props.post = null
    props.error = false
  } else if (notFound) {
    // Return 404 if any other page is not found.
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
