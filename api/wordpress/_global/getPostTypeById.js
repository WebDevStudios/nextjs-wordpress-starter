import queryPostById from '../posts/queryPostById'
import {initializeApollo} from '../connector'
import queryPageById from '../pages/queryPageById'
import {isHierarchicalPostType} from './postTypes'

/**
 * Retrieve single post by specified identifier.
 *
 * @author WebDevStudios
 * @param  {string}        postType WP post type.
 * @param  {Number|string} id       Post identifier.
 * @param  {string}        idType   Type of ID.
 * @return {Object}                 Post data or error object.
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

  // If no query is set for given post type, return error message.
  if (!query) {
    return {
      isError: true,
      message: `Post type \`${postType}\` is not supported.`
    }
  }

  // Get/create Apollo instance.
  const apolloClient = initializeApollo()

  // Execute query.
  const post = await apolloClient
    .query({query, variables: {id, idType}})
    .then((post) => post?.data?.[postType] ?? null)
    .catch((error) => {
      return {
        isError: true,
        message: error.message
      }
    })

  if (!post) {
    return {
      isError: true,
      message: `An error occurred while trying to retrieve data for ${postType} "${id}."`
    }
  }

  return post
}
