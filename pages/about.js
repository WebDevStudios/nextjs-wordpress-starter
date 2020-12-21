import Layout from '@/components/common/Layout'
import {Info} from '@/components/molecules/Alerts'

export default function About() {
  return (
    <Layout title="About" description="Learn more about this website">
      <div className="container">
        <h1>About</h1>

        <Info>
          This is a basic page.{' '}
          <a href="https://nextjs.org/docs/basic-features/pages">
            Learn more about pages.
          </a>
        </Info>

        <p>I love standards... but hate repeating myself.</p>
        <p>
          For every new Next.js project I would literally copy & paste the same
          configurations, pages, and components from previous projects into a
          new one. After some research, I discovered that{' '}
          <code>create-next-app</code>{' '}
          <a href="https://www.npmjs.com/package/create-next-app#options">
            works with git repositories!
          </a>{' '}
        </p>
        <p>
          <strong>
            I decided to create a slightly opinionated, yet still bare-bones
            Next.js starter that I could use when starting new projects.
          </strong>
        </p>
        <p>
          Click the menu above to see the demo pages and please consider giving
          the Github repo a star:{' '}
          <a href="https://github.com/gregrickaby/nextjs-starter">
            https://github.com/gregrickaby/nextjs-starter
          </a>
        </p>
      </div>
    </Layout>
  )
}
