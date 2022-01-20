import isHierarchicalPostType from '@/functions/wordpress/postTypes/isHierarchicalPostType'
import isValidPostType from '@/functions/wordpress/postTypes/isValidPostType'
import PropTypes from 'prop-types'
import isValidTaxonomy from './wordpress/taxonomies/isValidTaxonomy'

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
    fullHead: PropTypes.string,
    metaRobotsIndex: PropTypes.string,
    metaRobotsFollow: PropTypes.string,
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
 * Retrieve basic prop types for a given route.
 *
 * @author WebDevStudios
 * @param  {string} type WP post/taxonomy type.
 * @return {object}      Page prop types.
 */
export default function getPagePropTypes(type) {
  // Check if post type / taxonomy is valid.
  if (!isValidPostType(type) || isValidTaxonomy(type)) {
    return null
  }

  const hasArchive = !isHierarchicalPostType(type) || isValidTaxonomy(type)

  return {
    ...postPropTypes,
    ...(hasArchive && archivePropTypes)
  }
}
