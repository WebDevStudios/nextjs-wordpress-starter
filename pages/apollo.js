import Layout from '@/components/common/Layout'
import AllPosts, {ALL_POSTS_QUERY} from '@/api/wordpress/posts/AllPosts'
import {initializeApollo, addApolloState} from '@/api/wordpress/apolloConnector'

export default function ApolloPage() {
  return (
    <Layout
      title="Apollo Query"
      description="A static page that updates in the background every 60 seconds."
    >
      <div className="container">
        <h1>Apollo Query Example</h1>
        <AllPosts />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Create an Apollo instance.
  const apolloClient = initializeApollo()

  // Run the query.
  await apolloClient.query({
    query: ALL_POSTS_QUERY
  })

  // Merge in query results as Apollo state.
  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60
  })
}
