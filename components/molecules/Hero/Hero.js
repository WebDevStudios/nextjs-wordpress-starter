import PropTypes from 'prop-types'
import React from 'react'
import styles from './Hero.module.css'

export default function Hero({background, body, cta, subtitle, title}) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <h1 className={styles.title}>{title}</h1>
        {body && <p className={styles.body}>{body}</p>}
      </div>
    </section>
  )
}

Hero.propTypes = {
  background: PropTypes.string,
  body: PropTypes.string,
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string
  }),
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
}

Hero.defaultProps = {
  body: 'Body',
  title: 'Title',
  subtitle: 'Subtitle'
}
