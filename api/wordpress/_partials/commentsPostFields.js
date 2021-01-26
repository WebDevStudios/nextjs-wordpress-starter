import commentsFields from './commentsFields'

// Query partial: retrieve comment post fields.
const commentsPostFields = `
  comments(first: 10) {
    edges {
      node {
        ${commentsFields}
      }
    }
  }
`
export default commentsPostFields
