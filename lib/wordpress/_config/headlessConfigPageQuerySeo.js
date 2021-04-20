import queryError404Page from '@/lib/wordpress/pages/queryError404Page'

// Define single page query based on page name.
const headlessConfigPageQuerySeo = {
  404: {
    query: queryError404Page,
    title: '404 Not Found',
    description: ''
  }
}

export default headlessConfigPageQuerySeo
