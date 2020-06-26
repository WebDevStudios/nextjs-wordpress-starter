import fetchAPI from '@/lib/api'

/**
 * Query post, and get more posts.
 *
 * @param {string} slug        The post slug
 * @param {bool} preview       Are we in preview mode?
 * @param {object} previewData The post preview data.
 * @return {object}            An object with an array of posts.
 */
export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post // eslint-disable-line
  const isId = Number.isInteger(Number(slug)) // The slug may be the id of an unpublished post
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'

  // Fetch data.
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        sourceUrl
      }
      author {
        ...AuthorFields
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: ASC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                ...AuthorFields
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG'
      }
    }
  )

  // Draft posts may not have an slug.
  if (isDraft) data.post.slug = postPreview.id

  // Apply a revision (changes in a published post).
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post.
  data.posts.edges = data.posts.edges.filter(({node}) => node.slug !== slug)

  // If there are still 3 posts, remove the last one.
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}
