import {algoliaIndexName} from '@/api/algolia/connector'
import getPostTypeById from './getPostTypeById'
import getPostTypeArchive from './getPostTypeArchive'
import {addApolloState} from '@/api/apolloConfig'
import getMenus from '@/api/wordpress/menus/getMenus'
import config from '@/functions/config'

/**
 * Retrieve static props by post type.
 *
 * @author WebDevStudios
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
  // Get WP Nav Menus.
  const menus = await getMenus(config.menuLocations)

  // Check for dynamic archive display.
  if (!Object.keys(params).length) {
    const {apolloClient, ...archiveData} = await getPostTypeArchive(postType)

    // Add WP Nav Menus to archive.
    archiveData.menus = menus

    // Add Algolia env vars to archive.
    archiveData.algolia = {
      indexName: algoliaIndexName
    }

    // Merge in query results as Apollo state.
    return addApolloState(apolloClient, {
      props: {
        ...archiveData,
        archive: true
      },
      revalidate: 60 * 5
    })
  }

  // Handle catch-all routes.
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug

  // Retrieve post data.
  const {apolloClient, error, ...postData} = await getPostTypeById(
    postType,
    slug
  )

  const props = {...postData, error}

  // Custom handling for homepage.
  if (error) {
    // Fallback to empty props if homepage not set in WP.
    props.post = null
    props.error = false
  }

  // Set WP Nav Menus.
  props.menus = menus

  // Add Algolia env vars.
  props.algolia = {
    indexName: algoliaIndexName
  }

  // Merge in query results as Apollo state.
  return addApolloState(apolloClient, {
    props,
    revalidate: 60 * 5
  })
}
