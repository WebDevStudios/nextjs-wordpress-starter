import Layout from '@/components/common/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {mySqlGetAllPosts} from '@/api/wordpress/posts/mysqlAllPosts'

export default function MySql(props) {
  return (
    <Layout
      title="MySQL"
      description="A statically generated page with data from MySQL"
    >
      <div className="container">
        <h1>MySQL Example</h1>
        <p>This page is displaying posts from a WordPress MySQL database.</p>
        <section>
          {props.data.map((post) => (
            <article key={post.ID}>
              <h1>
                <Link href={`/posts/${post.ID}`}>
                  <a dangerouslySetInnerHTML={{__html: post.post_title}} />
                </Link>
              </h1>
              <p dangerouslySetInnerHTML={{__html: post.post_content}} />
            </article>
          ))}
        </section>
      </div>
    </Layout>
  )
}

/**
 * At build time, fetch the REST-API data, pass the data in via props.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export async function getStaticProps() {
  const data = await mySqlGetAllPosts()
  return {props: {data}}
}

MySql.propTypes = {
  data: PropTypes.array
}
