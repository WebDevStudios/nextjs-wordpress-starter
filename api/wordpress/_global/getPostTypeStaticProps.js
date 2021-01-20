import {algoliaIndexName} from '@/api/algolia/connector'
import getPostTypeById from './getPostTypeById'
import getPostTypeArchive from './getPostTypeArchive'
import {addApolloState} from '@/api/apolloConfig'
import getMenus from '@/api/wordpress/menus/getMenus'
import config from '@/functions/config'
import getFrontendPage, {frontendPageSeo} from './getFrontendPage'

/**
 * Retrieve static props by post type.
 *
 * @author WebDevStudios
 * @param {string} params   Post params (e.g., slug).
 * @param {string} postType Post Type.
 * @return {object}         Object containing post props and revalidate setting.
 */
export default async function getPostTypeStaticProps(
  params,
  postType
  // preview = false, // TODO - add preview handling.
  // previewData = null
) {
  // Get WP Nav Menus.
  const menus = await getMenus(config.menuLocations)

  // Set revalidate length (seconds).
  const revalidate = 60 * 5

  // Set sharedProps.
  const sharedProps = {
    menus,
    algolia: {
      indexName: algoliaIndexName
    }
  }

  // Check for Frontend-only routes.
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

  // Check for dynamic archive display.
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

  // Handle catch-all routes.
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug

  // Retrieve post data.
  const {apolloClient, error, ...postData} = await getPostTypeById(
    postType,
    slug
  )

  const props = {
    ...postData,
    ...sharedProps,
    error
  }

  // Custom handling for homepage.
  if ('/' === slug && error) {
    // Fallback to empty props if homepage not set in WP.
    props.post = null
    props.error = false
  }

  // Merge in query results as Apollo state.
  return addApolloState(apolloClient, {
    props,
    revalidate
  })
}
