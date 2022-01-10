import isHierarchicalPostType from '@/functions/wordpress/postTypes/isHierarchicalPostType'
import isValidPostType from '@/functions/wordpress/postTypes/isValidPostType'
import {initializeWpApollo} from '@/lib/wordpress/connector'
import {postTypes} from '@/lib/wordpress/_config/postTypes'
import {gql} from '@apollo/client'

/**
 * Retrieve static paths by post type.
 *
 * @author WebDevStudios
 * @param  {string} postType WP post type.
 * @return {object}          Post type paths.
 */
export default async function getPostTypeStaticPaths(postType) {
  if (!postType || !isValidPostType(postType)) {
    return null
  }

  // Retrieve post type plural name.
  const pluralName = postTypes[postType].pluralName

  // Check if post type is hierarchical.
  const isHierarchical = isHierarchicalPostType(postType)

  // Determine path field based on hierarchy.
  const pathField = isHierarchical || postType === 'post' ? 'uri' : 'slug'

  // Construct query based on post type.
  const query = gql`
    query GET_SLUGS {
      ${pluralName}(first: 10000) {
        edges {
          node {
            ${pathField}
          }
        }
      }
    }
  `

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Execute query.
  const posts = await apolloClient.query({query})

  // Process paths.
  const paths = !posts?.data?.[pluralName]?.edges
    ? []
    : posts.data[pluralName].edges
        .map((post) => {
          // Trim leading and trailing slashes then split into array on inner slashes.
          const slug = post.node[pathField].replace(/^\/|\/$/g, '').split('/')

          // Handle year/month/date slug format for posts.
          if (postType === 'post') {
            return {
              params: {
                year: slug?.shift() || '', // [0]
                month: slug?.shift() || '', // [1]
                day: slug?.shift() || '', // [2]
                slug: slug?.shift() || '' // [3]
              }
            }
          }

          return {
            params: {
              slug
            }
          }
        })
        // Filter out certain posts with custom routes (e.g., homepage).
        .filter((post) =>
          Array.isArray(post.params.slug)
            ? !!post.params.slug.join('/').length
            : !!post.params.slug.length
        )

  return {
    paths,
    fallback: 'blocking'
  }
}
