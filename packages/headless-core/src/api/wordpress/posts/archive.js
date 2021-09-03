import {gql} from '@apollo/client'
import isString from 'lodash/isString'

/**
 * Create archive post data fragment.
 *
 * @author WebDevStudios
 * @param  {object} options            Optional fragment configuration.
 * @param  {string} options.postFields Additional post fields, as template literal, to be included in fragment.
 * @return {DocumentNode}              Archive post data fragment.
 */
export function archivePostFragment({postFields}) {
  return gql`
    fragment ArchivePostFields on Post {
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
      title
      uri
      ${isString(postFields) ? postFields : ''}
    }
  `
}
