import Link from '@docusaurus/Link'
import React from 'react'
import styles from './GetStarted.module.css'

export default function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <div className="container">
        <div className="row">
          <div className="col text--center">
            <h2>Next Steps</h2>
            <p>Ready to start building headless WordPress websites?</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/index"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
