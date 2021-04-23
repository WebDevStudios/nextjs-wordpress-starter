import formatBlockData from '@/functions/wordpress/blocks/formatBlockData'
import getMenus from '@/functions/wordpress/menus/getMenus'
import formatDefaultSeoData from '@/functions/wordpress/seo/formatDefaultSeoData'
import {
  createWpApolloClient,
  initializeWpApollo
} from '@/lib/wordpress/connector'

/**
 * Retrieve single post.
 *
 * @author WebDevStudios
 * @param {string}          postType  WP post type.
 * @param {number | string} id        Post identifier.
 * @param {object}          query     Post retrieval query.
 * @param {object}          variables Query variables.
 * @param {string}          preview   Whether query is for a regular post view (null), a preview check (basic), or full post preview (full).
 * @return {object}                   Object containing Apollo client instance and post data or error object.
 */
export default async function processPostTypeQuery(
  postType,
  id,
  query,
  variables = {},
  preview = null
) {
  // Get/create Apollo instance.
  const apolloClient = preview
    ? createWpApolloClient(true)
    : initializeWpApollo()

  // Set up return object.
  const response = {
    apolloClient,
    error: false,
    errorMessage: null
  }

  // If no query is set for given post type, return error message.
  if (!query) {
    return {
      apolloClient,
      error: true,
      errorMessage: `Post type \`${postType}\` is not supported.`
    }
  }

  // Execute query.
  response.post = await apolloClient
    .query({query, variables})
    .then((res) => {
      const {homepageSettings, siteSeo, menus, ...postData} = res.data

      // Retrieve menus.
      response.menus = getMenus(menus)

      // Retrieve default SEO data.
      response.defaultSeo = formatDefaultSeoData({homepageSettings, siteSeo})

      // Retrieve post data.
      const post =
        postData?.[postType] ?? // Dynamic posts.
        postData?.additionalSettings?.additionalSettings?.[postType] // Settings custom page.

      // Set error props if data not found.
      if (!post) {
        response.error = true
        response.errorMessage = `An error occurred while trying to retrieve data for ${postType} "${id}."`

        return null
      }

      return post
    })
    .then(async (post) => {
      // Add slug/ID to post.
      const newPost = {
        ...post,
        slug: id
      }

      if ('basic' === preview || !post || !post?.blocksJSON) {
        return post
      }

      // Handle blocks.
      newPost.blocks = await formatBlockData(
        JSON.parse(newPost.blocksJSON) ?? []
      )

      delete newPost.blocksJSON

      return newPost
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message

      return null
    })

  return response
}
