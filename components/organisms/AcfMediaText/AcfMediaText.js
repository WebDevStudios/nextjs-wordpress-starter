import Button from '@/components/atoms/Button'
import Container from '@/components/atoms/Container'
import DisplayImage from '@/components/atoms/Image'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './AcfMediaText.module.css'

/**
 * Render the AcfMediaText component.
 *
 * @param  {object}  props           AcfMediaText component props.
 * @param  {string}  props.body      The body text.
 * @param  {string}  props.className The className.
 * @param  {object}  props.ctaText   The cta text.
 * @param  {object}  props.ctaUrl    The cta url.
 * @param  {object}  props.image     The image ID.
 * @param  {object}  props.imageMeta The image object with url and details.
 * @param  {boolean} props.mediaLeft Whether to show media on the left of the text.
 * @param  {string}  props.title     The title.
 * @return {Element}                 The AcfMediaText component.
 */
export default function AcfMediaText({
  body,
  className,
  ctaText,
  ctaUrl,
  image,
  imageMeta,
  mediaLeft,
  title
}) {
  return (
    <Container>
      <section
        className={cn(
          styles.acfMediaText,
          mediaLeft ? styles.mediaLeft : null,
          className
        )}
      >
        <div className={styles.text}>
          <>
            {title && <h1 className={styles.title}>{title}</h1>}
            {body && <p className={styles.body}>{body}</p>}
            {ctaText && ctaUrl && (
              <Button
                className={styles.button}
                url={ctaUrl}
                text={ctaText}
                type="primary"
                size="md"
              />
            )}
          </>
        </div>
        {!!image && (
          <div className={styles.media}>
            <DisplayImage
              className={styles.imageWrap}
              id={image}
              alt={imageMeta?.altText}
              imageMeta={imageMeta}
              nextImageFill={true}
            />
          </div>
        )}
      </section>
    </Container>
  )
}

AcfMediaText.propTypes = {
  body: PropTypes.string,
  className: PropTypes.string,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  image: PropTypes.number,
  imageMeta: PropTypes.shape({
    altText: PropTypes.string,
    mediaItemUrl: PropTypes.string,
    mediaDetails: PropTypes.shape({
      height: PropTypes.number,
      sizes: PropTypes.array,
      width: PropTypes.number
    })
  }),
  mediaLeft: PropTypes.bool,
  title: PropTypes.string
}

AcfMediaText.defaultProps = {
  mediaLeft: false
}
