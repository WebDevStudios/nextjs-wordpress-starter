import clsx from 'clsx'
import React from 'react'
import styles from './Features.module.css'

const FeatureList = [
  {
    title: 'Focus on the Frontend',
    description: (
      <>
        Why not focus on building amazing React-based frontends? We&apos;ve done
        the heavy lifting that comes with Headless WordPress, including support
        for <a href="https://wordpress.org/gutenberg/">Gutenberg</a>.
      </>
    )
  },
  {
    title: 'Next.js and WordPress',
    description: (
      <>
        There's a reason <a href="https://wordpress.org">WordPress</a> dominates
        the CMS landscape. Let your clients continue to publish with the CMS
        they love, while you get the amazing developer expierence that comes
        with <a href="https://nextjs.org">Next.js</a>.
      </>
    )
  },
  {
    title: 'Battle Tested',
    description: (
      <>
        We use this{' '}
        <a href="https://webdevstudios.com/2021/03/09/next-js-headless-wordpress/">
          in production
        </a>
        ! All the experience we gain from each headless project we do? Is
        brought right back here. It's our way of giving back to the open-source
        community.
      </>
    )
  }
]

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, index) => (
            <Feature key={index} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
