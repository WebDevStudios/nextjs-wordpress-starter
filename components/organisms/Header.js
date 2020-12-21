import Link from 'next/link'
import Navigation from '../molecules/Navigation'

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

export default function Header() {
  return (
    <header className="sticky top-0 py-8 transition-all">
      <div className="container px-4 lg:px-0 flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}
