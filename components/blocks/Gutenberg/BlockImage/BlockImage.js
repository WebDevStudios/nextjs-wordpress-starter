import DisplayImage from '@/components/atoms/Image'
import PropTypes from 'prop-types'

/**
 * Image Block
 *
 * The core Image block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props            The component props.
 * @param  {string}  props.alt        The image alt attribute.
 * @param  {string}  props.anchor     The image anchor.
 * @param  {string}  props.caption    The image caption.
 * @param  {string}  props.className  The image class name.
 * @param  {number}  props.height     The image height.
 * @param  {string}  props.href       A link wrapping the image.
 * @param  {number}  props.id         The image id.
 * @param  {object}  props.imageMeta  The image meta.
 * @param  {string}  props.linkClass  The image link class name.
 * @param  {string}  props.linkTarget The image link target.
 * @param  {string}  props.rel        The relationship of the linked URL.
 * @param  {string}  props.url        The image src attribute.
 * @param  {number}  props.width      The image width.
 * @return {Element}                  The Block Image component.
 */
export default function BlockImage(props) {
  const {
    alt,
    anchor,
    caption,
    className,
    height,
    href,
    id,
    imageMeta,
    linkClass,
    linkTarget,
    rel,
    url,
    width
  } = props

  return (
    <DisplayImage
      alt={alt}
      anchor={anchor}
      caption={caption}
      className={className}
      height={height}
      href={href}
      id={id}
      imageMeta={imageMeta}
      linkClass={linkClass}
      linkTarget={linkTarget}
      rel={rel}
      url={url}
      width={width}
    />
  )
}

BlockImage.propTypes = {
  props: PropTypes.shape({
    alt: PropTypes.string,
    anchor: PropTypes.string,
    caption: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.number,
    href: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    imageMeta: PropTypes.shape({
      altText: PropTypes.string,
      mediaItemUrl: PropTypes.string,
      mediaDetails: PropTypes.shape({
        height: PropTypes.number,
        sizes: PropTypes.array,
        width: PropTypes.number
      })
    }),
    linkClass: PropTypes.string,
    linkTarget: PropTypes.string,
    rel: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number
  })
}
