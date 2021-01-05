import Layout from '@/components/common/Layout'
import Hero from '@/components/molecules/Hero'
import {NextSeo} from 'next-seo'

export default function HomePage() {
  return (
    <Layout>
      <NextSeo
        title="Query from Yoast SEO"
        description="Query from Yoast SEO"
        openGraph={{
          title: 'Query from Yoast SEO',
          description: 'Query from Yoast SEO',
          images: [
            {
              url: 'Query from Yoast SEO',
              alt: 'Query from Yoast SEO'
            }
          ]
        }}
      />
      <Hero
        background="https://images.unsplash.com/photo-1513106021000-168e5f56609d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=70"
        title="Next.js Starter"
        description="A slightly opinionated, yet bare-bones Next.js starter."
      />
    </Layout>
  )
}
