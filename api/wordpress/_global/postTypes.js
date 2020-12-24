// Define valid WP post types (singular and plural GraphQL names).
export const postTypes = {
  career: 'careers',
  comment: 'comments',
  event: 'events',
  mediaItem: 'mediaItems',
  page: 'pages',
  porfolio: 'portfolios',
  post: 'posts',
  service: 'services',
  team: 'teams',
  testimonial: 'testimonials'
}

// Define hierarchical post types.
export const hierarchicalPostTypes = ['page']

/**
 * Check if post type is valid.
 *
 * @author WebDevStudios
 * @param  {string} postType WP post type.
 * @return {bool}            Whether provided post type is valid.
 */
export function isValidPostType(postType) {
  return Object.keys(postTypes).includes(postType)
}

/**
 * Check if post type is hierarchical.
 *
 * @author WebDevStudios
 * @param  {string} postType WP post type.
 * @return {bool}            Whether provided post type is hierarchical.
 */
export function isHierarchicalPostType(postType) {
  return hierarchicalPostTypes.includes(postType)
}
