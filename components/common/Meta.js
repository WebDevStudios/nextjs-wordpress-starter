import Head from 'next/head'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

/**
 * Render extra meta tags in the document head.
 *
 * @author WebDevStudios
 * @param  {object}  props     The component attributes as props.
 * @param  {object}  props.seo Yoast SEO data from WordPress.
 * @return {Element}           The Meta component.
 */
export default function Meta({seo}) {
  // Combine robots data.
  const robots = [
    ...(seo?.metaRobotsNofollow ? [seo.metaRobotsNofollow] : []),
    ...(seo?.metaRobotsNoindex ? [seo.metaRobotsNoindex] : [])
  ]

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="robots" content={robots.join(', ')} />
      <title>{seo?.title}</title>
      {seo?.fullHead ? parse(seo.fullHead) : null}
      <meta name="msapplication-TileColor" content="#fffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fff" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
    </Head>
  )
}

Meta.propTypes = {
  seo: PropTypes.object.isRequired
}
