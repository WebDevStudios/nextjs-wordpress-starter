import {gql} from '@apollo/client'
import isString from 'lodash/isString'
import {getSinglePostOfType} from '../global'
import {singleMenuFragment} from '../menus'

/**
 * Create single post data fragment.
 *
 * @author WebDevStudios
 * @param  {object} options    Optional fragment configuration.
 * @param  {string} postFields Additional post fields, as template literal, to be included in fragment.
 * @return {DocumentNode}      Single post data fragment.
 */
export function singlePostFragment({postFields}) {
  return gql`
    fragment SinglePostFields on Post {
      author {
        node {
          slug
          nickname
        }
      }
      blocksJSON
      categories {
        edges {
          node {
            slug
            name
          }
        }
      }
      comments(first: 10) {
        edges {
          node {
            ...SingleCommentFields
          }
        }
      }
      databaseId
      date
      excerpt
      featuredImage {
        node {
          altText
          sourceUrl(size: $imageSize)
        }
      }
      slug
      status
      tags {
        edges {
          node {
            name
            slug
          }
        }
      }
      title
      uri
      ${isString(postFields) ? postFields : ''}
    }
  `
}

/**
 * Create query to retrieve post by specified identifier.
 *
 * @author WebDevStudios
 * @param  {object} options Optional query configuration.
 * @param  {string} postFields Additional post fields, as template literal, to be included in post fragment.
 * @param  {string} rootFields Additional root-level fields, as template literal, to be included in query.
 */
export function queryPostById({rootFields = null, postFields = null}) {
  const queryPostById = gql`
    query GET_POST_BY_ID(
      $id: ID!
      $idType: PostIdType = SLUG
      $imageSize: MediaItemSizeEnum = LARGE
    ) {
      menus {
        nodes {
          ...SingleMenuFields
        }
      }
      ${isString(rootFields) ? rootFields : ''}
      post(id: $id, idType: $idType) {
        ...SinglePostFields
      }
    }
    ${singlePostFragment({postFields})}
    ${singleMenuFragment}
  `

  return queryPostById
}

/**
 * Retrieve single post by specified identifier.
 *
 * @author WebDevStudios
 * @param  {number | string} id       Post identifier.
 * @param  {string}          idType   Type of ID.
 * @param  {string}          preview  Whether query is for a regular post view (null), a preview check (basic), or full post preview (full).
 * @param  {object}          options  Optional query configuration.
 * @param  {object}          client   Apollo client instance.
 * @return {object}                   Object containing Apollo client instance and post data or error object.
 */
export async function getPost(
  id,
  idType = 'SLUG',
  preview = null,
  options = {},
  client = null
) {
  const query = queryPostById(options)

  const variables = {
    id,
    idType
  }

  return getSinglePostOfType('post', id, query, variables, preview, client)
}
