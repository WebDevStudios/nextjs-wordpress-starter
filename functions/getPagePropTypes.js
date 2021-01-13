import PropTypes from 'prop-types'
import {
  isValidPostType,
  isHierarchicalPostType
} from '@/api/wordpress/_global/postTypes'

// Yoast SEO prop types.
export const seoPropTypes = {
  seo: PropTypes.shape({
    siteTitle: PropTypes.string,
    siteDescription: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    metaRobotsIndex: PropTypes.string,
    metaRobotsFollow: PropTypes.string,
    opengraphImage: PropTypes.shape({
      sourceUrl: PropTypes.string
    })
  })
}

// Basic post prop types.
export const postPropTypes = {
  post: PropTypes.shape({
    author: PropTypes.object,
    blocks: PropTypes.array,
    databaseId: PropTypes.number,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    featuredImage: PropTypes.object,
    ...seoPropTypes,
    slug: PropTypes.string,
    title: PropTypes.string,
    uri: PropTypes.string
  })
}

// Basic post archive prop types.
export const archivePropTypes = {
  archive: PropTypes.bool,
  posts: PropTypes.array,
  pagination: PropTypes.shape({
    endCursor: PropTypes.string,
    hasNextPage: PropTypes.bool,
    hasPreviousPage: PropTypes.bool,
    startCursor: PropTypes.string
  })
}

/**
 * Retrieve basic prop types for a given page.
 *
 * @author WebDevStudios
 * @param {string} postType WP post type.
 * @return {object}         Page prop types.
 */
export default function getPagePropTypes(postType) {
  // Check if post type is valid.
  if (!isValidPostType(postType)) {
    return null
  }

  const hasArchive = !isHierarchicalPostType(postType)

  return {
    ...postPropTypes,
    ...(hasArchive && archivePropTypes)
  }
}
