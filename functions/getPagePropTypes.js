import isHierarchicalPostType from '@/functions/wordpress/postTypes/isHierarchicalPostType'
import isValidPostType from '@/functions/wordpress/postTypes/isValidPostType'
import PropTypes from 'prop-types'

// Yoast SEO social prop types.
export const seoSocialPropTypes = {
  social: PropTypes.shape({
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    linkedIn: PropTypes.string,
    mySpace: PropTypes.string,
    pinterest: PropTypes.string,
    twitter: PropTypes.string,
    wikipedia: PropTypes.string,
    youTube: PropTypes.string
  })
}

// Yoast SEO prop types.
export const seoPropTypes = {
  seo: PropTypes.shape({
    breadcrumbs: PropTypes.array,
    canonical: PropTypes.string,
    description: PropTypes.string,
    metaRobotsIndex: PropTypes.string,
    metaRobotsFollow: PropTypes.string,
    opengraphAuthor: PropTypes.string,
    opengraphModifiedTime: PropTypes.string,
    opengraphPublishedTime: PropTypes.string,
    opengraphImage: PropTypes.shape({
      altText: PropTypes.string,
      sourceUrl: PropTypes.string
    }),
    siteTitle: PropTypes.string,
    siteDescription: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    ...seoSocialPropTypes
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
    slug: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
