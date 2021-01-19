import {MenuContext} from '@/components/common/MenuProvider'
import config from '@/functions/config'
import cn from 'classnames'
import Link from 'next/link'
import {useContext} from 'react'
import styles from './Footer.module.css'

// TODO: Create Storybook for this component.

/**
 * Render Footer component.
 */
export default function Footer() {
  const {menus} = useContext(MenuContext)
  return (
    <footer className={styles.footer}>
      {!!menus?.footer_menu && (
        <nav className={cn('container', styles.footerMenu)}>
          <ul>
            {menus?.footer_menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    <a target={item.target ? item.target : '_self'}>
                      {item.label}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}

      <div className={cn('container', styles.copyright)}>
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
