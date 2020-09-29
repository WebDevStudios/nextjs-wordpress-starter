import Head from 'next/head'
import PropTypes from 'prop-types'

export default function Meta({seo}) {
  let metaDesc = ''
  let metaRobots = ''
  let ogImage = ''

  if (seo) {
    if (seo.metaDesc) {
      metaDesc = <meta name="description" content={seo.metaDesc} />
    }

    if (seo.metaRobotsNoindex && seo.metaRobotsNofollow) {
      const metaRobotsContent = `${seo.metaRobotsNoindex}, ${seo.metaRobotsNofollow}`
      metaRobots = <meta name="robots" content={metaRobotsContent} />
    }

    if (seo.ogImage) {
      ogImage = <meta property="og:image" content={seo.ogImage} />
    }
  }

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
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
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      {metaDesc}
      {metaRobots}
      {ogImage}
    </Head>
  )
}

Meta.propTypes = {
  seo: PropTypes.shape({
    metaDesc: PropTypes.string,
    metaKeywords: PropTypes.string,
    metaRobotsNofollow: PropTypes.string,
    metaRobotsNoindex: PropTypes.string,
    ogImage: PropTypes.string,
  })
}
