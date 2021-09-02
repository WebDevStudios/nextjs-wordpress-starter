import {gql} from '@apollo/client'
import isString from 'lodash/isString'

/**
 * Create single post data fragment.
 *
 * @author WebDevStudios
 * @param  {object} options     Optional fragment configuration.
 * @param  {string} otherFields Additional fields, as template literal, to be included in fragment.
 * @return {DocumentNode}       Single post data fragment.
 */
export function singlePostFragment({otherFields}) {
  const fields = otherFields && isString(otherFields) ? otherFields : ''

  return gql`
    fragment SinglePostFields on Post {
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
      ${fields}
    }
  `
}
