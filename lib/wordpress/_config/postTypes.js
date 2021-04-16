// Define valid WP post types (singular and plural GraphQL names).
export const postTypes = {
  page: {
    pluralName: 'pages',
    route: ''
  },
  post: {
    pluralName: 'posts',
    route: 'blog'
  },
  team: {
    pluralName: 'teams',
    route: 'team'
  }
}

// Define hierarchical post types.
export const hierarchicalPostTypes = ['page']

/**
 * Check if post type is hierarchical.
 *
 * @author WebDevStudios
 * @param {string} postType WP post type.
 * @return {boolean} Whether provided post type is hierarchical.
 */
export function isHierarchicalPostType(postType) {
  return hierarchicalPostTypes.includes(postType)
}
