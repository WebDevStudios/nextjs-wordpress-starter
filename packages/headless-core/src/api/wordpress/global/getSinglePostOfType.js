import parseBlocks from '../blocks/parseBlocks'
import {createWpApolloClient, initializeWpApollo} from '../client'
import {parseMenus} from '../menus'

/**
 * Retrieve single post of a given post type.
 *
 * @author WebDevStudios
 * @param  {string}          postType  WP post type.
 * @param  {number | string} id        Post identifier.
 * @param  {object}          query     Post retrieval query.
 * @param  {object}          variables Query variables.
 * @param  {string}          preview   Whether query is for a regular post view (null), a preview check (basic), or full post preview (full).
 * @return {object}                    Object containing Apollo client instance and post data or error object.
 */
export async function getSinglePostOfType(
  postType,
  id,
  query,
  variables = {},
  preview = null,
  client = null
) {
  // Get/create Apollo instance.
  const apolloClient =
    client ?? (preview ? createWpApolloClient(true) : initializeWpApollo())

  // Set up response object.
  const response = {
    apolloClient,
    error: false,
    errorMessage: null
  }

  // If no query is provided, return error message.
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
      const {menus, ...postData} = res.data

      // Retrieve menus.
      response.menus = parseMenus(menus)

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
      newPost.blocks = await parseBlocks(JSON.parse(newPost.blocksJSON) ?? [])

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
