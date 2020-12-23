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

// Define WP post types w/ "page" capability type.
export const pageCapabilityPostTypes = ['page']

/**
 * Check if post type is valid.
 *
 * @param  {string} postType WP post type.
 * @return {bool}            Whether provided post type is valid.
 */
export function isValidPostType(postType) {
  return Object.keys(postTypes).includes(postType)
}

/**
 * Check if post type has "page" capability type.
 *
 * @param  {string} postType WP post type.
 * @return {bool}            Whether provided post type has "page" capability type.
 */
export function isPageCapabilityPostType(postType) {
  return pageCapabilityPostTypes.includes(postType)
}
