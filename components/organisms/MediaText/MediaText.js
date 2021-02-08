import Button from '@/components/atoms/Button'
import Image from '@/components/atoms/Image'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React, {useEffect} from 'react'
import styles from './MediaText.module.css'

/**
 * Render the MediaText component.
 *
 * @param {object}  props           MediaText component props.
 * @param {string}  props.body      The body text.
 * @param {Element} props.children  The child elements.
 * @param {string}  props.className The className.
 * @param {object}  props.cta       The cta object with text and url strings.
 * @param {object}  props.image     The image object with url and alt text.
 * @param {boolean} props.mediaLeft Whether to show media on the left of the text.
 * @param {string}  props.title     The title.
 * @return {Element} The MediaText component.
 */
export default function MediaText({
  body,
  children,
  className,
  cta,
  image,
  mediaLeft,
  title
}) {
  useEffect(() => {
    if ((children && title) || (children && body) || (children && cta)) {
      console.warn(
        'The title, body and cta props are ignored when using children.'
      )
    }
  })

  return (
    <section
      className={cn(
        styles.mediaText,
        mediaLeft ? styles.mediaLeft : null,
        className
      )}
    >
      <div className={styles.text}>
        {children ? (
          children
        ) : (
          <>
            {title && <h1 className={styles.title}>{title}</h1>}
            {body && <p className={styles.body}>{body}</p>}
            {cta && (
              <Button
                className={styles.button}
                url={cta.url ? cta.url : null}
                text={cta.text ? cta.text : null}
                icon={cta.icon ? cta.icon : null}
                type="primary"
                size="md"
              />
            )}
          </>
        )}
      </div>
      <div className={styles.media}>
        {image && image.url && (
          <div className={styles.imageWrap}>
            <Image url={image.url} alt={image.alt} />
          </div>
        )}
      </div>
    </section>
  )
}

MediaText.propTypes = {
  body: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.string
  }),
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  mediaLeft: PropTypes.bool,
  title: PropTypes.string
}

MediaText.defaultProps = {
  mediaLeft: false
}
