import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import Image from 'next/image'
import {PropTypes} from 'prop-types'
import styles from './Image.module.css'

/**
 * Render the Display Image component.
 *
 * @author WebDevStudios
 * @param {object} props            The component properties.
 * @param {string} props.alt        The image alt attribute.
 * @param {string} props.anchor     The image anchor.
 * @param {string} props.caption    The image caption.
 * @param {string} props.className  The image class name.
 * @param {string} props.href       A link wrapping the image.
 * @param {number} props.id         The image id.
 * @param {object} props.imageMeta  The image meta.
 * @param {string} props.linkClass  The image link class name.
 * @param {string} props.linkTarget The image link target.
 * @param {string} props.rel        The relationship of the linked URL.
 * @param {string} props.url        The image src attribute.
 * @return {Element}                The DisplayImage component.
 */
export default function DisplayImage(props) {
  const imageMeta = props?.imageMeta
  const imageSize = {
    height: imageMeta?.mediaDetails?.height,
    width: imageMeta?.mediaDetails?.width
  }

  /**
   * Next Image component.
   *
   * @return {Element} A wrapper for the next/image component.
   */
  function NextImage() {
    return (
      <Image
        alt={props?.alt}
        height={imageSize?.height}
        src={imageMeta?.mediaItemUrl}
        width={imageSize?.width}
      />
    )
  }

  /**
   * HTML image.
   *
   * @return {Element} A plain ol' HTML <img> tag.
   */
  function HtmlImage() {
    return (
      <img
        alt={props?.alt}
        className={cn(styles.image, props?.className, `image-${props?.id}`)}
        id={props?.anchor}
        src={props?.url}
      />
    )
  }

  /**
   * Image Link component.
   *
   * @param {object} props         The component propterties.
   * @param {Array} props.children Any children.
   * @return {Element}             The ImageLink component.
   */
  function ImageLink({children}) {
    return (
      <a
        className={props?.linkClass}
        href={props?.href}
        rel={props?.rel}
        target={props?.linkTarget}
      >
        {children}
      </a>
    )
  }

  /**
   * Image caption
   *
   * @return {Element} An image caption.
   */
  function Caption() {
    return (
      <div className={styles.caption}>
        <RichText tag="span">{props?.caption}</RichText>
      </div>
    )
  }

  // If height/width are set, use Next <Image />.
  if (imageSize.height && imageSize.width) {
    return (
      <div
        id={props?.anchor}
        className={cn(styles.image, props?.className, `image-${props?.id}`)}
      >
        {props?.href ? (
          <ImageLink>
            <NextImage />
          </ImageLink>
        ) : (
          <NextImage />
        )}
        {!!props?.caption && <Caption />}
      </div>
    )
  }

  // Otherwise, just use HTML <img />.
  return (
    <>
      {props?.href ? (
        <ImageLink>
          <HtmlImage />
        </ImageLink>
      ) : (
        <HtmlImage />
      )}
      {!!props?.caption && <Caption />}
    </>
  )
}

DisplayImage.propTypes = {
  alt: PropTypes.string,
  anchor: PropTypes.string,
  caption: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.string,
  id: PropTypes.number,
  imageMeta: PropTypes.object,
  linkClass: PropTypes.string,
  linkTarget: PropTypes.string,
  rel: PropTypes.string,
  url: PropTypes.string
}
