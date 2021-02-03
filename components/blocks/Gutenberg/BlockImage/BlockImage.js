import Image from '@/components/atoms/Image'
import PropTypes from 'prop-types'

/**
 * Image Block
 *
 * The core Image block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props            The component props.
 * @param {string} props.anchor     The anchor/id of the block.
 * @param {string} props.alt        The image alt text.
 * @param {string} props.caption    The image caption.
 * @param {string} props.className  The image class.
 * @param {string} props.id         The image ID.
 * @param {string} props.href       The URL of the link.
 * @param {string} props.linkTarget Target for the link.
 * @param {string} props.linkClass  Class for the link.
 * @param {string} props.rel        The rel attribute for the link.
 * @param {string} props.sizeSlug   The WP image size.
 * @param {string} props.url        The full URL path of the image.
 * @return {Element}                The Image component.
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
