import commentsFields from './commentsFields'

// Query partial: retrieve comment post fields.
const commentsPostFields = `
  comments(first: 10) {
    ${commentsFields}
  }
`
export default commentsPostFields
