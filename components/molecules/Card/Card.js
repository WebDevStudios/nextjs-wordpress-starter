import Button from '@/components/atoms/Button'
import Heading from '@/components/atoms/Heading'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Card.module.css'

/**
 * Render the Card component.
 *
 * @param {object} props           Card component props.
 * @param {string} props.body      Card body text.
 * @param {string} props.className Optional classNames.
 * @param {string} props.ctaText   The text for the cta button.
 * @param {string} props.ctaUrl    The url for the cta button.
 * @param {object} props.image     The image object.
 * @param {string} props.meta      The card metadata string.
 * @param {string} props.timestamp The card timestamp.
 * @param {string} props.title     The card title.
 * @return {Element}               The Card component.
 */
export default function Card({
  body,
  className,
  ctaText,
  ctaUrl,
  image,
  meta,
  timestamp,
  title
}) {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.image}>
        {image && image.sourceUrl && (
          <img
            draggable="false"
            src={image.sourceUrl}
            alt={`${image.altText ?? title}`}
            loading="lazy"
            height={image.height}
            width={image.width}
          />
        )}
      </div>
      <div className={styles.content}>
        {meta && <p className={styles.meta}>{meta}</p>}
        {title && <Heading className={styles.title}>{title}</Heading>}
        {body && <p className={styles.body}>{body}</p>}
      </div>
      <div className={styles.footer}>
        {timestamp && (
          <p className={styles.timestamp}>
            <time>{timestamp}</time>
          </p>
        )}
        {ctaText && ctaUrl && (
          <Button
            className={styles.button}
            url={ctaUrl}
            text={ctaText}
            type="secondary"
            size="md"
          />
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  body: PropTypes.string,
  className: PropTypes.string,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  image: PropTypes.shape({
    sourceUrl: PropTypes.string,
    altText: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
  }),
  meta: PropTypes.string,
  title: PropTypes.string,
  timestamp: PropTypes.string
}

Card.defaultProps = {
  headingLevel: 'h2'
}
