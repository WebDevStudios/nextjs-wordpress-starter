import {gql, useQuery} from '@apollo/client'

export const ALL_POSTS_QUERY = gql`
  query allPosts {
    posts {
      edges {
        node {
          postId
          title
          slug
        }
      }
    }
  }
`

/**
 * Query GraphQL and display the results.
 *
 * @see https://www.apollographql.com/docs/react/api/react/hooks/#usequery
 */
export default function AllPosts() {
  const {loading, error, data} = useQuery(ALL_POSTS_QUERY)

  if (error) return <div>Error loading posts.</div>
  if (loading) return <div>Loading...</div>

  const allPosts = data.posts.edges

  return (
    <section>
      <ul>
        {allPosts.map((post) => {
          const {postId, slug, title} = post.node

          return (
            <li key={postId}>
              <div>
                <a href={slug}>{title}</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
