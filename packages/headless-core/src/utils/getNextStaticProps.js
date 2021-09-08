import {getPostArchive} from '../api'
import {addApolloState} from '../api/client'
import {getGlobalData} from '../api/wordpress/global'
import {getPage} from '../api/wordpress/pages/single'
import {getPostCategoryArchive} from '../api/wordpress/posts/categoryArchive'
import {getPost} from '../api/wordpress/posts/single'
import {getPostTagArchive} from '../api/wordpress/posts/tagArchive'
import {getHeadlessConfigPage} from '../api/wordpress/settings/headlessConfig'

/**
 * Retrieve static props by post type.
 *
 * @author WebDevStudios
 * @param  {string}  params      Post params (e.g., slug).
 * @param  {string}  postType    Post Type.
 * @param  {boolean} preview     Whether requesting preview of post.
 * @param  {object}  previewData Post preview data.
 * @param  {object}  options     Optional query configuration.
 * @param  {object}  client      Apollo client instance.
 * @return {object}              Object containing post props and revalidate setting.
 */
export async function getNextStaticProps(
  params,
  postType,
  preview = false,
  previewData = null,
  options = {},
  client = null
) {
  // Set revalidate length (seconds).
  const revalidate = 60 * 5

  /* -- Fallback: return error if params missing. -- */
  if (!params) {
    return {
      notFound: true
    }
  }

  /* -- Handle frontend-only routes. -- */
  if (params?.frontend) {
    const {apolloClient, ...globalData} = await getGlobalData(client)

    return addApolloState(apolloClient, {
      props: {
        ...globalData
      },
      revalidate
    })
  }

  /* -- Handle post archive display. -- */
  if (params?.archive) {
    const {apolloClient, ...archiveData} = await getPostArchive(
      null,
      null,
      null,
      null,
      null,
      options,
      client
    )

    return addApolloState(apolloClient, {
      props: {
        ...archiveData,
        archive: true
      },
      revalidate
    })
  }

  /* -- Handle post taxonomy archive display. -- */
  if (params?.category) {
    // Retrieve category slug (last item in category array).
    const categorySlug = [...params.uri].pop()
    const {apolloClient, ...categoryArchiveData} = await getPostCategoryArchive(
      categorySlug
    )

    return addApolloState(apolloClient, {
      props: {
        ...categoryArchiveData,
        archive: true
      },
      revalidate
    })
  } else if (params?.tag) {
    const {apolloClient, ...tagArchiveData} = await getPostTagArchive(
      params.uri
    )

    return addApolloState(apolloClient, {
      props: {
        ...tagArchiveData,
        archive: true
      },
      revalidate
    })
  }

  /* -- Handle headless config pages. -- */
  if (params?.configPage) {
    const page = params.configPage
    const {apolloClient, ...pageData} = await getHeadlessConfigPage(
      page,
      options,
      client
    )

    // Display 404 error page if error encountered.
    if (pageData.error && page !== 'error404Page') {
      return {
        notFound: true
      }
    }

    // Remove error prop.
    delete pageData?.error

    return addApolloState(apolloClient, {
      props: {
        ...pageData
      },
      revalidate
    })
  }

  /* -- Handle dynamic posts. -- */

  // Return 404 page if post type not supported.
  if (!['page', 'post'].includes(postType)) {
    return {
      notFound: true
    }
  }

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
  const idType = isDraft ? 'DATABASE_ID' : null

  // Retrieve post data.
  const {apolloClient, error, ...postData} =
    postType === 'page'
      ? await getPage(
          id,
          idType,
          isCurrentPostPreview ? 'full' : null,
          options,
          client
        )
      : await getPost(
          id,
          idType,
          isCurrentPostPreview ? 'full' : null,
          options,
          client
        )

  const props = {
    ...postData,
    error,
    preview: isCurrentPostPreview
  }

  // Fallback: empty props if homepage not set in WP.
  if (slug === '/' && error) {
    props.post = null
    props.error = false
  }

  // Display 404 page if error encountered.
  if (props.error) {
    return {
      notFound: true
    }
  }

  return addApolloState(apolloClient, {
    props,
    revalidate
  })
}
