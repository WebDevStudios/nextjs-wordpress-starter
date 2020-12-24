import PropTypes from 'prop-types'

/**
 * Image Gallery block
 *
 * The core Image Gallery block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockImageGallery({props}) {
  const {
    className,
    id,
    data: {images_per_page, images}
  } = props

  return (
    <section
      id={id ? id : null}
      data-block="ImageGallery"
      className={className}
    >
      <pre>
        {JSON.stringify(
          {
            className,
            id,
            data: {images_per_page, images}
          },
          null,
          2
        )}
      </pre>
    </section>
  )
}

BlockImageGallery.propTypes = {
  props: PropTypes.object.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.shape({
    images_per_page: PropTypes.number,
    images: PropTypes.array
  })
}
