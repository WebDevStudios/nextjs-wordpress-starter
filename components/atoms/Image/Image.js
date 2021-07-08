import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import Image from 'next/image'
import {PropTypes} from 'prop-types'
import styles from './Image.module.css'

/**
 * Render the Display Image component.
 *
 * @author WebDevStudios
 * @param  {object}  props               The component properties.
 * @param  {string}  props.alt           The image alt attribute.
 * @param  {string}  props.anchor        The image anchor.
 * @param  {string}  props.caption       The image caption.
 * @param  {string}  props.className     The image class name.
 * @param  {string}  props.href          A link wrapping the image.
 * @param  {number}  props.id            The image id.
 * @param  {object}  props.imageMeta     The image meta.
 * @param  {string}  props.linkClass     The image link class name.
 * @param  {string}  props.linkTarget    The image link target.
 * @param  {boolean} props.nextImageFill Whether next/image should be set to fill or have height/width defined.
 * @param  {string}  props.rel           The relationship of the linked URL.
 * @param  {string}  props.url           The image src attribute.
 * @return {Element}                     The DisplayImage component.
 */
export default function DisplayImage(props) {
  // Set the image size.
  const imageSize = {
    height: props?.imageMeta?.mediaDetails?.height ?? props?.height,
    width: props?.imageMeta?.mediaDetails?.width ?? props?.width
  }

  // Set the image src.
  const source = props?.imageMeta?.mediaItemUrl ?? props?.url

  // No image src? Bail.
  if (!source) {
    return null
  }

  // Get the src domain from url.
  const sourceDomain = new URL(source)

  // Get all domains registered in next.config.js.
  let domains = process.env.NEXT_PUBLIC_IMAGE_DOMAINS

  // Split domains string into individual domains.
  domains = !domains || !domains.length ? [] : domains.split(', ')

  /**
   * Next.js <Image /> component.
   *
   * @see https://nextjs.org/docs/basic-features/image-optimization
   * @return {Element} The next/image component.
   */
  function NextImage() {
    const imageProps = {
      alt: props?.alt,
      id: props?.anchor,
      src: source
    }

    // Add extra props depending on whether image needs to be set to "fill".
    if (props?.nextImageFill) {
      imageProps.layout = 'fill'
    } else {
      imageProps.height = imageSize?.height
      imageProps.width = imageSize?.width
    }

    return (
      // eslint-disable-next-line
      <Image
        {...imageProps}
        className={cn(props?.nextImageFill ? styles.imageFill : null)}
      />
    )
  }

  /**
   * HTML image component.
   *
   * @return {Element} A plain ol' HTML <img> tag.
   */
  function HtmlImage() {
    return (
      <img
        alt={props?.alt}
        className={cn(styles.image, props?.className)}
        height={imageSize?.height}
        id={props?.anchor}
        src={props?.url}
        width={imageSize?.width}
      />
    )
  }

  /**
   * Image Link component.
   *
   * @param  {object}  props          The component propterties.
   * @param  {Array}   props.children Any children.
   * @return {Element}                The ImageLink component.
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
   * Image caption component.
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

  /**
   * If src domain includes allowed domains, use <Image /> component.
   *
   * @see https://nextjs.org/docs/basic-features/image-optimization#configuration
   */
  if (domains.includes(sourceDomain?.host)) {
    return (
      <div
        id={props?.anchor}
        className={cn(
          styles.image,
          props?.className,
          props?.id ? `image-${props?.id}` : '',
          props?.nextImageFill ? styles.hasImageFill : null
        )}
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

  /**
   * Otherwise, just use HTML <img />.
   */
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
  height: PropTypes.string,
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
  nextImageFill: PropTypes.bool,
  rel: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.string
}
