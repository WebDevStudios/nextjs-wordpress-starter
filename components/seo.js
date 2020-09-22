import PropTypes from 'prop-types'

export default function Seo({seo}) {
  return (
    <>
      <meta name="description" content={seo.metaDesc} />
      <meta
        name="robots"
        content={`${seo.metaRobotsNoindex}, ${seo.metaRobotsNofollow}`}
      />
    </>
  )
}

Seo.propTypes = {
  seo: PropTypes.shape({
    metaDesc: PropTypes.string,
    metaKeywords: PropTypes.string,
    metaRobotsNofollow: PropTypes.string,
    metaRobotsNoindex: PropTypes.string
  })
}
