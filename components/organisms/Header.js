import Link from 'next/link'
import AlgoliaSearch from '../molecules/AlgoliaSearch'
import Navigation from './Navigation'

function Logo() {
  return (
    <Link href="/">
      <a>
        <img
          src="/logo.svg"
          alt="site logo"
          loading="lazy"
          height="128"
          width="128"
        />
      </a>
    </Link>
  )
}

// TODO: Pass Algolia indexName via props from ENV vars.

export default function Header() {
  return (
    <header className="sticky top-0 pb-8 transition-all z-50">
      <div className="container flex items-center justify-end">
        <div className="relative pt-12 pb-16">
          <AlgoliaSearch
            indexName="wds_dev_searchable_posts"
            useHistory={true}
            usePlaceholder={true}
            className="ml-auto"
          />
        </div>
      </div>
      <div className="container px-4 lg:px-0 flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}
