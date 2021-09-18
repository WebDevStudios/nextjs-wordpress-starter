import clsx from 'clsx'
import React from 'react'
import styles from './Plugins.module.css'

const PluginList = [
  {
    title: 'WDS Headless Theme',
    description: 'Supports the JAMStack-powered front-end and extensions.',
    url: 'https://nextjsdev.wpengine.com/downloads/wds-headless-theme.zip'
  },
  {
    title: 'WDS Headless Core',
    description:
      'A WordPress plugin which helps turn WordPress into a Headless CMS.',
    url: 'https://nextjsdev.wpengine.com/downloads/wds-headless-core.zip'
  }
]

const ExtensionsList = [
  {
    title: 'ACF',
    description: '',
    url: 'https://nextjsdev.wpengine.com/downloads/wds-headless-acf.zip'
  },
  {
    title: 'Algolia',
    description: '',
    url: 'https://nextjsdev.wpengine.com/downloads/wds-headless-algolia.zip'
  },
  {
    title: 'Blocks',
    description: '',
    url: 'https://nextjsdev.wpengine.com/downloads/wds-headless-blocks.zip'
  },
  {
    title: 'Gravity Forms',
    description: '',
    url: 'https://nextjsdev.wpengine.com/downloads/wds-headless-gravityforms.zip'
  },
  {
    title: 'Yoast SEO',
    description: '',
    url: 'https://nextjsdev.wpengine.com/downloads/wds-headless-seo.zip'
  }
]

function Card({title, description, url}) {
  return (
    <div className="col padding-vert--lg">
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} className="button button--primary">
          Download (.zip)
        </a>
      </div>
    </div>
  )
}

export default function Plugins() {
  return (
    <section className={styles.plugins}>
      <div className="container">
        <div className="row">
          <div className="col text--center">
            <h2>WordPress Themes and Plugins</h2>
            <p>Help turn WordPress into a Headless CMS.</p>
          </div>

          <div className={clsx('row')}>
            {PluginList.map((props, index) => (
              <Card key={index} {...props} />
            ))}
          </div>
        </div>
      </div>

      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col text--center">
            <h3>Extensions</h3>
            <p>Helpful addons that extend WDS Headless Core</p>
          </div>

          <div className="row">
            {ExtensionsList.map((props, index) => (
              <Card key={index} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
