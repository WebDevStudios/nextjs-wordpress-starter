import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import React from 'react'
import Features from '../components/Features'
import GetStarted from '../components/GetStarted'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Plugins from '../components/Plugins'

export default function Home() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Plugins />
        <GetStarted />
      </main>
    </Layout>
  )
}
