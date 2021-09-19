import React from 'react'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <div className="row">
          <div className="col text--center">
            <h2>How does headless WordPress work?</h2>

            <picture>
              <source
                type="image/webp"
                media="(max-width: 1023px)"
                srcset="img/nextjs-wordpress-starter-frontend-backend-graphic-vertical.webp"
              />
              <source
                type="image/webp"
                media="(min-width: 1024px)"
                srcset="img/nextjs-wordpress-starter-frontend-backend-graphic.webp"
              />
              <img
                alt="how it all works"
                className={styles.howItWorks__img}
                decode="async"
                loading="lazy"
                src="img/nextjs-wordpress-starter-frontend-backend-graphic.webp"
              />
            </picture>
            <p>
              <em>
                WordPress talks to Next.js via{' '}
                <a href="https://www.wpgraphql.com/">WP GraphQL</a>
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
