import PropTypes from 'prop-types'

/**
 * Image Block
 *
 * The core Image block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockImage({props: {alt, anchor, caption, image}}) {
  return <pre>{JSON.stringify({alt, anchor, caption, image}, null, 2)}</pre>
}

BlockImage.propTypes = {
  props: PropTypes.shape({
    alt: PropTypes.string,
    anchor: PropTypes.string,
    caption: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.object,
    linkClass: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  })
}
