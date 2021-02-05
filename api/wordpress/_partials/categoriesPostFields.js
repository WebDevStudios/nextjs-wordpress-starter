// Query partial: retrieve categories post fields.
const categoriesPostFields = `
  categories {
    edges {
      node {
        slug
        name
      }
    }
  }
`
export default categoriesPostFields
