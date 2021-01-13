import Link from 'next/link'
import config from '@/functions/config'
import {useContext} from 'react'
import styles from './Footer.module.css'
import {MenuContext} from '@/components/common/MenuProvider'
import ActiveLink from '@/components/common/ActiveLink'
import cn from 'classnames'

// TODO: Create Storybook for this component.

/**
 * Render the footer as a component.
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
                  <ActiveLink href={item.path} activeClassName={styles?.active}>
                    <a target={item.target ? item.target : '_self'}>
                      {item.label}
                    </a>
                  </ActiveLink>
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
