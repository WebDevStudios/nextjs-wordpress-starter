import queryPostsArchive from '@/lib/wordpress/posts/queryPostsArchive'

// Define SEO for archives.
const archiveQuerySeo = {
  post: {
    query: queryPostsArchive,
    title: 'Blog',
    description: ''
  }
}

export default archiveQuerySeo
