import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import Image from 'next/image'
import {PropTypes} from 'prop-types'
import styles from './Image.module.css'

/**
 * Render the Display Image component.
 *
 * @author WebDevStudios
 * @param {object} props           The component properties.
 * @param {string} props.alt       The image alt attribute.
 * @param {string} props.anchor    The image anchor.
 * @param {string} props.caption   The image caption.
 * @param {string} props.className The image class name.
 * @param {string} props.href      A link wrapping the image.
 * @param {number} props.id        The image id.
 * @param {object} props.imageMeta The image meta.
 * @param {string} props.linkClass The image link class name.
 * @param {string} props.rel       The relationship of the linked URL.
 * @param {string} props.url       The image src attribute.
 * @return {Element}               The DisplayImage component.
 */
export default function DisplayImage(props) {
  const imageMeta = props?.imageMeta
  const imageSize = {
    height: imageMeta?.mediaDetails?.height,
    width: imageMeta?.mediaDetails?.width
  }
  const fullSizeURL = imageMeta?.mediaItemUrl

  // If height/width are set, use Next <Image />.
  if (imageSize.height && imageSize.width) {
    return (
      <div
        id={props?.anchor}
        className={cn(styles.image, props?.className, `image-${props?.id}`)}
      >
        {props?.href ? (
          <a className={props?.linkClass} href={props?.href} rel={props?.rel}>
            <Image
              alt={props?.alt}
              height={imageSize?.height}
              src={fullSizeURL}
              width={imageSize?.width}
            />
          </a>
        ) : (
          <Image
            alt={props?.alt}
            height={imageSize?.height}
            src={fullSizeURL}
            width={imageSize?.width}
          />
        )}
        {!!props?.caption && (
          <div className={styles.caption}>
            <RichText tag="span">{props?.caption}</RichText>
          </div>
        )}
      </div>
    )
  }

  // Otherwise, just use HTML <img />.
  return (
    <>
      {props?.href ? (
        <a
          id={props?.anchor}
          className={props?.linkClass}
          href={props?.href}
          rel={props?.rel}
        >
          <img
            alt={props?.alt}
            className={cn(styles.image, props?.className, `image-${props?.id}`)}
            src={props?.url}
          />
        </a>
      ) : (
        <img
          alt={props?.alt}
          className={cn(styles.image, props?.className, `image-${props?.id}`)}
          id={props?.anchor}
          src={props?.url}
        />
      )}
      {!!props?.caption && (
        <div className={styles.caption}>
          <RichText tag="span">{props?.caption}</RichText>
        </div>
      )}
    </>
  )
}

DisplayImage.propTypes = {
  alt: PropTypes.string,
  anchor: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  id: PropTypes.number,
  imageMeta: PropTypes.object,
  linkClass: PropTypes.string,
  rel: PropTypes.string,
  url: PropTypes.string
}
