import Image from 'next/image'
import {PropTypes} from 'prop-types'
import styles from './Image.module.css'
/**
 * Render the Display Image component.
 *
 * @author WebDevStudios
 * @param {object} props           The component properties.
 * @param {string} props.alt       The image alt attribute.
 * @param {object} props.imageMeta The image meta.
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
      <div className={styles.image}>
        <Image
          alt={props?.alt}
          height={imageSize?.height}
          src={fullSizeURL}
          width={imageSize?.width}
        />
      </div>
    )
  }

  // Otherwise, just use HTML <img />.
  return <img alt={props?.alt} className={styles.image} src={props?.url} />
}

DisplayImage.propTypes = {
  alt: PropTypes.string,
  imageMeta: PropTypes.object,
  url: PropTypes.string
}
