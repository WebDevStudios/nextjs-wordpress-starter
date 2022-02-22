// Query partial: retrieve tags post fields.
const tagsPostFields = `
  tags {
    edges {
      node {
        name
        slug
      }
    }
  }
`
export default tagsPostFields
