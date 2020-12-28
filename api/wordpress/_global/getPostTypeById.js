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
    .then(
      (post) =>
        post?.data?.[postType] ?? {
          isError: true,
          message: `An error occurred while trying to retrieve data for ${postType} "${id}."`
        }
    )
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
      return {
        isError: true,
        message: error.message
      }
    })

  return {
    apolloClient,
    post
  }
}
