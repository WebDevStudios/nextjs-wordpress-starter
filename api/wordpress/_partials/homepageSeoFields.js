const {default: seoPostFields} = require('./seoPostFields')

// Query partial: retrieve homepage SEO fields.
const homepageSeoFields = `
homepageSettings {
  frontPage {
    ${seoPostFields}
  }
}
`

export default homepageSeoFields
