import Button from '@/components/atoms/Button'
import Container from '@/components/atoms/Container'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './FiftyFifty.module.css'

/**
 * Render the FiftyFifty component.
 *
 * @param {object} props           FiftyFifty component props.
 * @param {string} props.body      The body text.
 * @param {string} props.className The className.
 * @param {object} props.cta       The cta object with text and url strings.
 * @param {object} props.image     The image object with url and alt text.
 * @param {string} props.title     The title.
 * @return {Element}               The FiftyFifty component.
 */
export default function FiftyFifty({body, className, cta, image, title}) {
  return (
    <Container>
      <section className={cn(styles.fiftyFifty, className)}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {body && <p className={styles.body}>{body}</p>}
          {cta && (
            <Button
              className={styles.button}
              url={cta.url ? cta.url : null}
              text={cta.text ? cta.text : null}
              type="primary"
              size="md"
            />
          )}
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

FiftyFifty.propTypes = {
  body: PropTypes.string,
  className: PropTypes.string,
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string
  }),
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.string
}

FiftyFifty.defaultProps = {
  title: 'Here is a H2 headline in a bold font.',
  body:
    'Let me tell you a little story about how I went sledging in the Australian Alps, and got lost in the process. Oh what a riot that was, and I nearly lost...',
  cta: {
    text: 'Learn More',
    url: '#'
  },
  image: {
    url:
      'https://images.unsplash.com/photo-1611458181887-e4a588329222?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    alt: 'Bridge over river'
  }
}
