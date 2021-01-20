/*
query MyQuery {
  comments(where: {contentId: "1148"}) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    edges {
      node {
        databaseId
        content(format: RENDERED)
        parentDatabaseId
        approved
        id
      }
    }
  }
}
*/
