import queryPostsArchive from '@/lib/wordpress/posts/queryPostsArchive'
import queryTeamsArchive from '@/lib/wordpress/teams/queryTeamsArchive'

// Define SEO for archives.
const archiveQuerySeo = {
  post: {
    query: queryPostsArchive,
    title: 'Blog',
    description: ''
  },
  team: {
    query: queryTeamsArchive,
    title: 'Team Members',
    description: ''
  }
}

export default archiveQuerySeo
