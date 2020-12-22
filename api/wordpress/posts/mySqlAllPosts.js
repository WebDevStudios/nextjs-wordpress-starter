import {query} from '@/api/wordpress/mySqlConnector'

/**
 * Get all posts.
 *
 * @return {string} All posts in a string.
 */
export async function mySqlGetAllPosts() {
  const data = await query(
    `
    SELECT
      *
    FROM
      wp_posts
    WHERE
      post_type = 'post'
      AND post_status = 'publish'
    ORDER BY
      post_date DESC
    LIMIT 100
    `
  )

  return JSON.parse(data)
}
