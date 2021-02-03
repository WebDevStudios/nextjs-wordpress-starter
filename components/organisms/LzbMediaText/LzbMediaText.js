import Button from '@/components/atoms/Button'
import Container from '@/components/atoms/Container'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './LzbMediaText.module.css'

/**
 * Render the LzbMediaText component.
 *
 * @param {object}  props           LzbMediaText component props.
 * @param {string}  props.body      The body text.
 * @param {string}  props.className The className.
 * @param {object}  props.ctaText   The cta text.
 * @param {object}  props.ctaUrl    The cta url.
 * @param {object}  props.image     The image object with url and alt text.
 * @param {boolean} props.mediaLeft Whether to show media on the left of the text.
 * @param {string}  props.title     The title.
 * @return {Element}                The LzbMediaText component.
 */
export default function LzbMediaText({
  body,
  className,
  ctaText,
  ctaUrl,
  image,
  mediaLeft,
  title
}) {
  return (
    <Container>
      <section
        className={cn(
          styles.lzbMediaText,
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
        <div className={styles.media}>
          {image && image.url && (
            <div className={styles.imageWrap}>
              <img src={image.url} alt={image.alt} />
            </div>
          )}
        </div>
      </section>
    </Container>
  )
}

LzbMediaText.propTypes = {
  body: PropTypes.string,
  className: PropTypes.string,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  mediaLeft: PropTypes.bool,
  title: PropTypes.string
}

LzbMediaText.defaultProps = {
  mediaLeft: false
}
