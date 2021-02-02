import ImageGallery from '@/components/molecules/ImageGallery'
import PropTypes from 'prop-types'

/**
 * Image Gallery block
 *
 * The core Image Gallery block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string} anchor    The anchor/id of the block.
 * @param {string} caption   The image caption.
 * @param {string} className The image class.
 * @param {number} columns   The amount of columns.
 * @param {Array}  images    The array of images.
 * @return {Element} The ImageGallery component.
 */
export default function BlockImageGallery({
  anchor,
  caption,
  columns,
  className,
  images
}) {
  return (
    <ImageGallery
      anchor={anchor}
      caption={caption}
      columns={columns}
      className={className}
      images={images}
    />
  )
}

BlockImageGallery.propTypes = {
  anchor: PropTypes.string,
  caption: PropTypes.string,
  columns: PropTypes.number,
  className: PropTypes.string,
  sizeSlug: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      caption: PropTypes.string,
      fullUrl: PropTypes.string,
      id: PropTypes.string,
      link: PropTypes.string,
      url: PropTypes.string
    })
  )
}
