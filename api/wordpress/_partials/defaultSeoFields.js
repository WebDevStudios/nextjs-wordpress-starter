const {default: seoPostFields} = require('./seoPostFields')

// Query partial: retrieve homepage & site SEO fields.
const defaultSeoFields = `
homepageSettings {
  frontPage {
    ${seoPostFields}
  }
}
siteSeo: seo {
  schema {
    siteName
    siteUrl
  }
  openGraph {
    defaultImage {
      altText
      sourceUrl(size: THUMBNAIL)
    }
  }
}
`

export default defaultSeoFields
