import {postTypes} from '@/lib/wordpress/_config/postTypes'
/**
 * Check if post type is valid.
 *
 * @author WebDevStudios
 * @param {string} postType WP post type.
 * @return {boolean}        Whether provided post type is valid.
 */
export default function isValidPostType(postType) {
  return Object.keys(postTypes).includes(postType)
}
