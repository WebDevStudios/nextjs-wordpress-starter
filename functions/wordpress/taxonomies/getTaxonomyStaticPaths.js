import {initializeWpApollo} from '@/lib/wordpress/connector'
import {taxonomies} from '@/lib/wordpress/_config/taxonomies'
import {gql} from '@apollo/client'
import isValidTaxonomy from './isValidTaxonomy'

/**
 * Retrieve static paths by taxonomy.
 *
 * @author WebDevStudios
 * @param  {string} taxonomy WP taxonomy.
 * @return {object}          Taxonomy paths.
 */
export default async function getTaxonomyStaticPaths(taxonomy) {
  if (!taxonomy || !isValidTaxonomy(taxonomy)) {
    return null
  }

  // Retrieve taxonomy plural name.
  const pluralName = taxonomies[taxonomy].pluralName

  // Construct query based on taxonomy.
  const query = gql`
    query GET_SLUGS {
      ${pluralName}(first: 10000) {
        edges {
          node {
            uri
          }
        }
      }
    }
  `

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Execute query.
  const terms = await apolloClient
    .query({query})
    .then((response) => response?.data?.[pluralName]?.edges ?? [])
    .catch(() => [])

  // Process paths.
  const paths = terms
    .map((post) => {
      // Trim leading and trailing slashes then split into array on inner slashes.
      const slug = post.node.uri.replace(/^\/|\/$/g, '').split('/')

      // Remove path prefix from slug.
      const routePrefix = taxonomies?.[taxonomy]?.route
      const prefixIndex = routePrefix ? slug.indexOf(routePrefix) : -1

      if (prefixIndex > -1) {
        slug.splice(prefixIndex, 1)
      }

      return {
        params: {
          slug
        }
      }
    })
    // Filter out certain posts with custom routes (e.g., homepage).
    .filter((post) => !!post.params.slug.join('/').length)

  return {
    paths,
    fallback: 'blocking'
  }
}
