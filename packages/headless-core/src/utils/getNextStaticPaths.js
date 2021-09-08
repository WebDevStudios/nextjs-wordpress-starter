import {gql} from '@apollo/client'
import {initializeWpApollo} from '../api/wordpress/client'

// Query: retrieve post type paths.
export const queryPostOfTypePaths = gql`
  query GET_POST_OF_TYPE_PATHS($id: ID!) {
    contentType(id: $id, idType: NAME) {
      contentNodes(first: 10000) {
        edges {
          node {
            slug
            uri
          }
        }
      }
      hierarchical
    }
  }
`

// Query: retrieve taxonomy paths.
export const queryTaxonomyPaths = gql`
  query GET_TAXONOMY_PATHS($taxonomies: [TaxonomyEnum]) {
    terms(where: {taxonomies: $taxonomies}) {
      edges {
        node {
          uri
        }
      }
    }
  }
`

/**
 * Retrieve static paths by post type.
 *
 * @author WebDevStudios
 * @param  {string}  postType WP post type (GraphQL singular name).
 * @param  {string}  taxonomy WP taxonomy (GraphQL singular name).
 * @param  {object}  client   Apollo client instance.
 * @return {object}           Post type paths.
 */
export async function getNextStaticPaths(
  postType,
  taxonomy = null,
  client = null
) {
  // Set up response object.
  const response = {
    paths: [],
    fallback: 'blocking'
  }

  if (!postType && !taxonomy) {
    return response
  }

  // Get/create Apollo instance.
  const apolloClient = client ?? initializeWpApollo()

  /* -- Handle taxonomy paths. -- */
  if (taxonomy) {
    // Execute query.
    const terms = await apolloClient.query({
      query: queryTaxonomyPaths,
      variables: {
        taxonomies: taxonomy.toUpperCase()
      }
    })

    const termNodes = terms?.data?.terms?.edges

    if (!termNodes?.length || !Array.isArray(termNodes)) {
      return response
    }

    termNodes.forEach((term) => {
      let uri = term?.node?.uri

      if (!uri) {
        return
      }

      // Trim leading and trailing slashes then split into array on inner slashes.
      uri = uri.replace(/^\/|\/$/g, '').split('/') ?? []
    })

    // Find taxonomy slug to determine beginning of actual taxonomy term.
    const taxonomyIndex = uri.indexOf(taxonomy)

    response.paths.push({
      params: {
        uri: uri.splice(taxonomyIndex + 1)
      }
    })

    return response
  }

  /* -- Handle post of type paths. -- */

  // Execute query.
  const posts = await apolloClient.query({
    query: queryPostOfTypePaths,
    variables: {
      id: postType
    }
  })

  const data = posts?.data?.contentType
  const postNodes = data?.contentNodes?.edges

  if (!data || !Array.isArray(postNodes) || !postNodes.length) {
    return response
  }

  // Determine if post type is hierarchical.
  const isHierarchical = !!data?.hierarchical

  // Process paths.
  postNodes.forEach((post) => {
    let slug = post?.node?.[isHierarchical ? 'uri' : 'slug']

    if (!slug) {
      return
    }

    // Filter out posts with custom routes (e.g., homepage).
    if (slug === '/') {
      return
    }

    // Trim leading and trailing slashes then split into array on inner slashes.
    slug = slug.replace(/^\/|\/$/g, '').split('/') ?? []

    response.paths.push({
      params: {
        slug
      }
    })
  })

  return response
}
