import {gql} from '@apollo/client'

// Fragment: retrieve single comment data.
export const singleCommentFragment = gql`
  fragment SingleCommentFields on Comment {
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
  }
`
