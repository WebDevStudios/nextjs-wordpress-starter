import Button from '@/components/atoms/Button'
import PropTypes from 'prop-types'
import React from 'react'
import tailwindConfig from '../../../tailwind.config'
import styles from './Hero.module.css'

/**
 * Render the Hero component.
 *
 * @param {object} props                 Hero component props.
 * @param {string} props.backgroundImage The background image url.
 * @param {string} props.body            Text for the body.
 * @param {object} props.cta             Object with text and url props for the CTA button.
 * @param {string} props.subtitle        Text for the subtitle.
 * @param {string} props.title           Text for the title.
 * @return {Element}                     The Hero component.
 */
export default function Hero({backgroundImage, body, cta, subtitle, title}) {
  return (
    <section
      className={styles.hero}
      style={{
        // These css custom properties are used inside the css module file to set the card's background image, tint overlay, and fallback bg color.
        '--image-url': `url(${backgroundImage})`,
        '--image-tint-color': `${tailwindConfig.theme.colors.black}50`,
        '--image-fallback-color': `${tailwindConfig.theme.colors.grey['darkest']}`
      }}
    >
      <div className={styles.content}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <h1 className={styles.title}>{title}</h1>
        {body && <p className={styles.body}>{body}</p>}
        {cta && (
          <Button
            className={styles.button}
            url={cta.url ? cta.url : null}
            icon={cta.icon ? cta.icon : null}
            text={cta.text ? cta.text : null}
            type="primary"
            iconPosition="right"
            size="md"
          />
        )}
      </div>
    </section>
  )
}

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  body: PropTypes.string,
  cta: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string
  }),
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
}
