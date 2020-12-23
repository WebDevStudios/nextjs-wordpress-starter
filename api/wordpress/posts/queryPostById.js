const {gql} = require('@apollo/client')

// Query: retrieve post by specified identifier.
const queryPostById = gql`
  query GET_POST_BY_SLUG($id: ID!, $idType: PostIdType!) {
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
    tags {
      edges {
        node {
          name
          slug
        }
      }
    }
    author {
      node {
        slug
        nickname
      }
    }
    categories {
      edges {
        node {
          slug
          name
        }
      }
    }
    featuredImage {
      node {
        altText
        sourceUrl(size: LARGE)
      }
    }
  }
`

export default queryPostById
