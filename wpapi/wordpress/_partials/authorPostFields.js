// Query partial: retrieve author post fields.
const authorPostFields = `
  author {
    node {
      slug
      nickname
    }
  }
`
export default authorPostFields
