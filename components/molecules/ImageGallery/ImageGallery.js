import Image from '@/components/atoms/Image'
import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './ImageGallery.module.css'

/**
 * Render the ImageGallery component.
 *
 * @author WebDevStudios
 * @param {object} props           The component properties.
 * @param {string} props.anchor    The anchor/id of the block.
 * @param {string} props.caption   The image caption.
 * @param {string} props.className The image class.
 * @param {number} props.columns   The amount of columns.
 * @param {Array}  props.images    The array of images.
 * @return {Element}               The ImageGallery component.
 */
export default function ImageGallery({
  anchor,
  caption,
  columns,
  className,
  images
}) {
  return (
    <>
      {!!images?.length && (
        <div id={anchor || null} className={cn(styles.gallery, className)}>
          <div className={cn(styles.wrap, styles[`columns-${columns}`])}>
            {images.map((image, index) => {
              return (
                <Image
                  key={index}
                  url={image.url}
                  alt={image.alt}
                  id={image.id}
                />
              )
            })}
          </div>
          {!!caption && (
            <div className={styles.caption}>
              <RichText tag="span">{caption}</RichText>
            </div>
          )}
        </div>
      )}
    </>
  )
}

ImageGallery.propTypes = {
  anchor: PropTypes.string,
  caption: PropTypes.string,
  columns: PropTypes.number,
  className: PropTypes.string,
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

ImageGallery.defaultProps = {
  columns: 3
}
