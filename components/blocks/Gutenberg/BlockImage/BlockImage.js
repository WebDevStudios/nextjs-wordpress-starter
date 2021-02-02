import Image from '@/components/atoms/Image'
import PropTypes from 'prop-types'

/**
 * Image Block
 *
 * The core Image block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string} anchor     The anchor/id of the block.
 * @param {string} alt        The image alt text.
 * @param {string} caption    The image caption.
 * @param {string} className  The image class.
 * @param {string} id         The image ID.
 * @param {string} href       The URL of the link.
 * @param {string} linkTarget Target for the link.
 * @param {string} linkClass  Class for the link.
 * @param {string} rel        The rel attribute for the link.
 * @param {string} sizeSlug   The WP image size.
 * @param {string} url        The full URL path of the image.
 * @return {Element} The Image component.
 */
export default function BlockImage({
  alt,
  anchor,
  caption,
  className,
  id,
  href,
  linkTarget,
  linkClass,
  rel,
  sizeSlug,
  url
}) {
  return (
    <Image
      alt={alt}
      anchor={anchor}
      caption={caption}
      className={className}
      id={id}
      href={href}
      linkTarget={linkTarget}
      linkClass={linkClass}
      rel={rel}
      sizeSlug={sizeSlug}
      url={url}
    />
  )
}

BlockImage.propTypes = {
  alt: PropTypes.string,
  anchor: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.number,
  href: PropTypes.string,
  linkTarget: PropTypes.string,
  linkClass: PropTypes.string,
  rel: PropTypes.string,
  sizeSlug: PropTypes.string,
  url: PropTypes.string
}
