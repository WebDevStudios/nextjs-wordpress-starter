import PropTypes from 'prop-types'
import Layout from '@/components/common/Layout'
import {fetcher} from '@/lib/functions'
import Link from 'next/link'
import {Info} from '@/components/molecules/Alerts'

export default function ServerSideRendering(props) {
  return (
    <Layout
      title="Server-side Rendering (SSR)"
      description="A server-side rendered page with data from a REST-API."
    >
      <div className="container">
        <h1>Server-side Rendering (SSR) Example</h1>

        <Info>
          The content below is sourced from the WordPress REST-API.{' '}
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering">
            Learn more about SSR.
          </a>
        </Info>

        <section>
          {props.data.map((post, index) => (
            <article key={index}>
              <h1>
                <Link href={`/posts/${post.id}`}>
                  <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                </Link>
              </h1>
              <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
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
export async function getServerSideProps() {
  const data = await fetcher('https://nextjs.wpengine.com/wp-json/wp/v2/posts')
  return {props: {data}}
}

ServerSideRendering.propTypes = {
  data: PropTypes.array
}
