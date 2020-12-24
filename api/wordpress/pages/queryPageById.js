const {gql} = require('@apollo/client')

// Query: retrieve page by specified identifier.
const queryPageById = gql`
  query GET_PAGE_BY_SLUG($id: ID!, $idType: PageIdType = URI) {
    page(id: $id, idType: $idType) {
      blocksJSON
      databaseId
      date
      slug
      title
      excerpt
      seo {
        canonical
        title
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphImage {
          sourceUrl
        }
      }
      author {
        node {
          slug
          nickname
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl(size: LARGE)
        }
      }
    }
  }
`

export default queryPageById
