import queryPostById from '../posts/queryPostById'
import {initializeApollo} from '../connector'
import queryPageById from '../pages/queryPageById'
import {isHierarchicalPostType} from './postTypes'
import formatBlockData from '@/functions/formatBlockData'

/**
 * Retrieve single post by specified identifier.
 *
 * @author WebDevStudios
 * @param  {string}        postType WP post type.
 * @param  {Number|string} id       Post identifier.
 * @param  {string}        idType   Type of ID.
 * @return {Object}                 Object containing Apollo client instance and post data or error object.
 */
export default async function getPostTypeById(postType, id, idType = 'SLUG') {
  // Define single post query based on post type.
  const postTypeQuery = {
    page: queryPageById,
    post: queryPostById
  }

  // Check if post type is hierarchical.
  const isHierarchical = isHierarchicalPostType(postType)

  // Fix default ID type for hierarchical posts.
  idType = !isHierarchical || 'SLUG' !== idType ? idType : 'URI'

  // Retrieve post type query.
  const query = postTypeQuery?.[postType] ?? null

  // Get/create Apollo instance.
  const apolloClient = initializeApollo()

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
    .query({query, variables: {id, idType}})
    .then((post) => {
      // Set error props if data not found.
      if (!post?.data?.[postType]) {
        response.error = true
        response.errorMessage = `An error occurred while trying to retrieve data for ${postType} "${id}."`

        return null
      }

      return post.data[postType]
    })
    .then(async (post) => {
      // Handle blocks.
      if (!post || !post?.blocksJSON) {
        return post
      }

      const newPost = {...post}

      newPost.blocks = await formatBlockData(
        JSON.parse(newPost.blocksJSON) ?? []
      )

      return newPost
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message

      return null
    })

  return response
}
