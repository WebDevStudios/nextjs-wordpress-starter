// Query partial: retrieve comment fields.
const commentsFields = `
edges {
  node {
    databaseId
    content(format: RENDERED)
    parentDatabaseId
    approved
    id
    date
    parentId
    type
  }
}
`
export default commentsFields
