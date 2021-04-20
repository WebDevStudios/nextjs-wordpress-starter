import isHierarchicalPostType from '@/functions/wordpress/postTypes/isHierarchicalPostType'
import processPostTypeQuery from '@/functions/wordpress/postTypes/processPostTypeQuery'
import queryPageById from '@/lib/wordpress/pages/queryPageById'
import queryPostById from '@/lib/wordpress/posts/queryPostById'
import queryTeamById from '@/lib/wordpress/teams/queryTeamById'

/**
 * Retrieve single post by specified identifier.
 *
 * @author WebDevStudios
 * @param {string}          postType WP post type.
 * @param {number | string} id       Post identifier.
 * @param {string}          idType   Type of ID.
 * @param {string}          preview  Whether query is for a regular post view (null), a preview check (basic), or full post preview (full).
 * @return {object}                  Object containing Apollo client instance and post data or error object.
 */
export default async function getPostTypeById(
  postType,
  id,
  idType = 'SLUG',
  preview = null
) {
  // Define single post query based on post type.
  const postTypeQuery = {
    page: queryPageById,
    post: queryPostById,
    team: queryTeamById
  }

  // Check if post type is hierarchical.
  const isHierarchical = isHierarchicalPostType(postType)

  // Fix default ID type for hierarchical posts.
  idType = !isHierarchical || 'SLUG' !== idType ? idType : 'URI'

  // Retrieve post type query.
  const query = postTypeQuery?.[postType] ?? null

  return processPostTypeQuery(postType, id, query, {id, idType}, preview)
}
