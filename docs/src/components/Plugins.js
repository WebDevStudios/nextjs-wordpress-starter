import React from 'react'
import styles from './Plugins.module.css'

const PluginList = [
  {
    title: 'WDS Headless Theme',
    description: 'Supports the JAMStack-powered frontend app.',
    url: 'https://github.com/WebDevStudios/wds-headless-theme'
  },
  {
    title: 'WDS Headless Core',
    description:
      'A WordPress plugin which turns WordPress into a Headless CMS.',
    url: 'https://github.com/WebDevStudios/wds-headless-core'
  }
]

const ExtensionsList = [
  {
    title: 'ACF',
    description: '',
    url: '(https://github.com/WebDevStudios/wds-headless-acf'
  },
  {
    title: 'Algolia',
    description: '',
    url: 'https://github.com/WebDevStudios/wds-headless-algolia'
  },
  {
    title: 'Blocks',
    description: '',
    url: 'https://github.com/WebDevStudios/wds-headless-blocks'
  },
  {
    title: 'Gravity Forms',
    description: '',
    url: 'https://github.com/WebDevStudios/wds-headless-gravityforms'
  },
  {
    title: 'WordPress SEO',
    description: '',
    url: 'https://github.com/WebDevStudios/wds-headless-seo'
  }
]

function Card({title, description, url}) {
  return (
    <div className="col padding-horiz--md padding-vert--lg">
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} className="button button--primary">
          View on GitHub
        </a>
      </div>
    </div>
  )
}

export default function Plugins() {
  return (
    <section className={styles.plugins}>
      <div className="container">
        <div className={styles.row}>
          <div className="col text--center">
            <h2>WordPress Themes and Plugins</h2>
            <p>Help turn WordPress into a Headless CMS.</p>
          </div>

          <div className={styles.row}>
            {PluginList.map((props, index) => (
              <Card key={index} {...props} />
            ))}
          </div>
        </div>
      </div>

      <div className="container padding-vert--lg">
        <div className={styles.row}>
          <div className="text--center">
            <h3>Extensions</h3>
            <p>Helpful addons that extend WDS Headless Core</p>
          </div>
          <div className={styles.row}>
            {ExtensionsList.map((props, index) => (
              <Card key={index} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
