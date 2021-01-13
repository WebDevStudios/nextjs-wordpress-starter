import Link from 'next/link'
import config from '@/functions/config'
import Navigation from '@/components/common/Navigation'
import styles from './Footer.module.css'

export default function Footer({menus}) {
  return (
    <footer>
      {!!menus?.footer_menu && (
        <div className="container">
          <Navigation menu={menus?.footer_menu} className={styles.footer} />
        </div>
      )}

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
