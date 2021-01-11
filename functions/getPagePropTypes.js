import PropTypes from 'prop-types'

// Yoast SEO prop types.
export const seoPropTypes = {
  seo: PropTypes.shape({
    siteTitle: PropTypes.string,
    siteDescription: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    metaRobotsIndex: PropTypes.string,
    metaRobotsFollow: PropTypes.string,
    opengraphImage: PropTypes.string
  })
}
