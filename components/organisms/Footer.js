import Link from 'next/link'
import config from '@/functions/config'
import Navigation from '@/components/common/Navigation'

export default function Footer({menus}) {
  return (
    <footer>
      <Navigation menu={menus?.footer_menu} className="footer-menu" />

      <div className="container p-4 lg:px-0 text-center text-sm">
        &copy; {new Date().getFullYear()} {config.siteName} by {config.author}{' '}
        &middot;{' '}
        <Link href={config.social.github.href}>
          <a>Github</a>
        </Link>{' '}
        &middot;{' '}
        <Link href={config.social.twitter.href}>
          <a>Twitter</a>
        </Link>
      </div>
    </footer>
  )
}
