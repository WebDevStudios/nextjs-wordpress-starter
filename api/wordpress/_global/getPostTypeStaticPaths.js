import {gql} from '@apollo/client'
import {isValidPostType, postTypes} from './postTypes'
import {initializeApollo} from '../connector'

/**
 * Retrieve static paths by post type.
 *
 * @param  {string} postType WP post type.
 * @return {Object}          Post type paths.
 */
export default async function getPostTypeStaticPaths(postType) {
  if (!postType || !isValidPostType(postType)) {
    return null
  }

  // Retrieve post type plural name.
  const pluralName = postTypes[postType]

  // Construct query based on post type.
  const query = gql`
    query GET_SLUGS {
      ${pluralName}(first: 10000) {
        nodes {
          slug
        }
      }
    }
  `

  // Get/create Apollo instance.
  const apolloClient = initializeApollo()

  // Execute query.
  const posts = await apolloClient.query({query})

  // Process paths.
  return {
    paths: !posts?.data?.[pluralName]?.nodes
      ? []
      : posts.data[pluralName].nodes.map((post) => {
          return {
            params: {
              slug: `${post.slug}`
            }
          }
        }),
    fallback: false
  }
}
