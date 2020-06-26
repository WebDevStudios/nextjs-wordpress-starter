import fetchAPI from '@/lib/api'

/**
 * Query all posts via slug.
 *
 * @return {object} An object with an array of posts.
 */
export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  return data?.posts // eslint-disable-line
}
