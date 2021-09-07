import {gql} from '@apollo/client'
import {initializeWpApollo} from '../api/wordpress/client'

/**
 * Retrieve static paths by post type.
 *
 * @author WebDevStudios
 * @param  {string}  postType WP post type (GraphQL singular name).
 * @param  {object}  client   Apollo client instance.
 * @return {object}           Post type paths.
 */
export async function getNextStaticPaths(postType, client = null) {
  // Set up response object.
  const response = {
    paths: [],
    fallback: 'blocking'
  }

  if (!postType) {
    return response
  }

  // Construct query based on post type.
  const query = gql`
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

  // Get/create Apollo instance.
  const apolloClient = client ?? initializeWpApollo()

  // Execute query.
  const posts = await apolloClient.query({
    query,
    variables: {
      id: postType
    }
  })

  const data = posts?.data?.contentType
  const posts = data?.contentNodes?.edges

  if (!data || !Array.isArray(posts) || !posts.length) {
    return response
  }

  // Determine if post type is hierarchical.
  const isHierarchical = !!data?.hierarchical

  // Process paths.
  posts.forEach((post) => {
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
