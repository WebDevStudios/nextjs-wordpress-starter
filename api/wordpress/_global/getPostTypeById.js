import queryPostById from '../posts/queryPostById'
import {initializeWpApollo} from '../connector'
import queryPageById from '../pages/queryPageById'
import {isHierarchicalPostType} from './postTypes'
import formatBlockData from '@/functions/formatBlockData'
import queryEventById from '../events/queryEventById'
import queryCareerById from '../careers/queryCareerById'
import queryServiceById from '../services/queryServiceById'
import queryTeamById from '../teams/queryTeamById'
import queryPortfolioById from '../portfolios/queryPortfolioById'
import queryTestimonialById from '../testimonials/queryTestimonialById'
import formatDefaultSeoData from '@/functions/formatDefaultSeoData'
import getMenus from '../menus/getMenus'

/**
 * Retrieve single post by specified identifier.
 *
 * @author WebDevStudios
 * @param {string}          postType WP post type.
 * @param {number | string} id       Post identifier.
 * @param {string}          idType   Type of ID.
 * @param {boolean}         preview  Whether requesting preview of draft.
 * @return {object}                  Object containing Apollo client instance and post data or error object.
 */
export default async function getPostTypeById(
  postType,
  id,
  idType = 'SLUG',
  preview = false
) {
  // Define single post query based on post type.
  const postTypeQuery = {
    career: queryCareerById,
    event: queryEventById,
    page: queryPageById,
    portfolio: queryPortfolioById,
    post: queryPostById,
    service: queryServiceById,
    team: queryTeamById,
    testimonial: queryTestimonialById
  }

  // Check if post type is hierarchical.
  const isHierarchical = isHierarchicalPostType(postType)

  // Fix default ID type for hierarchical posts.
  idType = !isHierarchical || 'SLUG' !== idType ? idType : 'URI'

  // Retrieve post type query.
  const query = postTypeQuery?.[postType] ?? null

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Set up return object.
  const response = {
    apolloClient,
    error: false,
    errorMessage: null
  }

  // If no query is set for given post type, return error message.
  if (!query) {
    return {
      apolloClient,
      error: true,
      errorMessage: `Post type \`${postType}\` is not supported.`
    }
  }

  // Execute query.
  response.post = await apolloClient
    .query({query, variables: {id, idType}})
    .then((res) => {
      const {homepageSettings, siteSeo, menus, ...postData} = res.data

      // Retrieve menus.
      response.menus = getMenus(menus)

      // Retrieve default SEO data.
      response.defaultSeo = formatDefaultSeoData({homepageSettings, siteSeo})

      const post = postData?.[postType]

      // Set error props if data not found.
      if (!post) {
        response.error = true
        response.errorMessage = `An error occurred while trying to retrieve data for ${postType} "${id}."`

        return null
      }

      return post
    })
    .then(async (post) => {
      // Add slug/ID to post.
      const newPost = {
        ...post,
        slug: id
      }

      if (preview || !post || !post?.blocksJSON) {
        return post
      }

      // Handle blocks.
      newPost.blocks = await formatBlockData(
        JSON.parse(newPost.blocksJSON) ?? []
      )

      delete newPost.blocksJSON

      return newPost
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message

      return null
    })

  return response
}
