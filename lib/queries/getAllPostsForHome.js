import fetchAPI from '@/lib/api'

/**
 * Query all posts for the homepage.
 *
 * @param {bool} preview  Are we in preview mode?
 * @return {object}       An object with all posts.
 */
export default async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              sourceUrl
            }
            author {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview
      }
    }
  )

  return data?.posts // eslint-disable-line
}
