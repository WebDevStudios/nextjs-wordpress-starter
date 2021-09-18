import Link from '@docusaurus/Link'
import clsx from 'clsx'
import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <em>The</em> Next.js WordPress Starter
        </h1>
        <p className="hero__subtitle">
          Build headless websites with this starter from WebDevStudios
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/index"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}
