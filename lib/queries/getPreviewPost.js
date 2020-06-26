import fetchAPI from '@/lib/api'

/**
 * Query the post in Preview Mode.
 *
 * @param {int} id        The post ID.
 * @param {string} idType The idType. e.g., DATABASE_ID, URI, SLUG, ID
 * @return {object}       The post object.
 */
export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: {id, idType}
    }
  )

  return data.post
}
