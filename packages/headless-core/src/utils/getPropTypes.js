// Basic prop types for a post of any post type.
export const postPropTypes = {
  post: PropTypes.shape({
    author: PropTypes.object,
    blocks: PropTypes.array,
    databaseId: PropTypes.number,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    featuredImage: PropTypes.object,
    slug: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    uri: PropTypes.string
  })
}

// Basic prop types for a post archive of any post type.
export const archivePropTypes = {
  archive: PropTypes.bool,
  posts: PropTypes.arrayOf(postPropTypes.post),
  pagination: PropTypes.shape({
    endCursor: PropTypes.string,
    hasNextPage: PropTypes.bool,
    hasPreviousPage: PropTypes.bool,
    startCursor: PropTypes.string
  })
}

/**
 * Retrieve basic prop types for a given post type or archive.
 *
 * @author WebDevStudios
 * @param {boolean} single Whether retriving prop types for a single post (true) or archive (false).
 * @return {object}        Prop types.
 */
export function getPropTypes(single = true) {
  if (single) {
    return {...postPropTypes}
  }

  return {...archivePropTypes}
}
