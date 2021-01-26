// Query partial: retrieve comment fields.
const commentsFields = `
  databaseId
  content(format: RENDERED)
  parentDatabaseId
  approved
  id
  date
  parentId
  type
  author {
    node {
      name
      url
    }
  }
`
export default commentsFields
