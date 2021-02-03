import Button from '@/components/atoms/Button'
import Heading from '@/components/atoms/Heading'
import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Card.module.css'

/**
 * Render the Card component.
 *
 * @param {object} props            Card component props.
 * @param {string} props.body       Card body text.
 * @param {string} props.buttonText The text for the cta button.
 * @param {string} props.className  Optional classNames.
 * @param {object} props.image      The image object.
 * @param {string} props.meta       The card metadata string.
 * @param {string} props.timestamp  The card timestamp.
 * @param {string} props.title      The card title.
 * @param {string} props.url        The url.
 * @return {Element}                The Card component.
 */
export default function Card({
  body,
  buttonText,
  className,
  image,
  meta,
  timestamp,
  title,
  url
}) {
  return (
    <div className={cn(styles.card, className)}>
      {image && image.sourceUrl && (
        <div className={styles.image}>
          <img
            draggable="false"
            src={image.sourceUrl}
            alt={`${image.altText ?? title}`}
            loading="lazy"
            height={image.height}
            width={image.width}
          />
        </div>
      )}
      <div className={styles.content}>
        {meta && <p className={styles.meta}>{meta}</p>}
        {title &&
          (url ? (
            <Link href={url}>
              <a>
                <Heading className={styles.title}>{title}</Heading>
              </a>
            </Link>
          ) : (
            <Heading className={styles.title}>{title}</Heading>
          ))}
        {body && <RichText className={styles.body}>{body}</RichText>}
      </div>
      <div className={styles.footer}>
        {timestamp && (
          <p className={styles.timestamp}>
            <time>{timestamp}</time>
          </p>
        )}
        {buttonText && url && (
          <Button
            className={styles.button}
            url={url}
            text={buttonText}
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
  buttonText: PropTypes.string,
  className: PropTypes.string,
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  image: PropTypes.shape({
    sourceUrl: PropTypes.string,
    altText: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
  }),
  meta: PropTypes.string,
  title: PropTypes.string,
  timestamp: PropTypes.string,
  url: PropTypes.string
}

Card.defaultProps = {
  headingLevel: 'h2'
}
