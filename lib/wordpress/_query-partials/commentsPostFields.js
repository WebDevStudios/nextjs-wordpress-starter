import commentsFields from './commentsFields'

// Query partial: retrieve comment post fields.
const commentsPostFields = `
  comments(first: 100, where: {order: ASC, orderby: COMMENT_DATE}) {
    edges {
      node {
        ${commentsFields}
      }
    }
  }
`
export default commentsPostFields
