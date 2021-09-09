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
