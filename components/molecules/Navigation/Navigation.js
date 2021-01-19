import isLinkActive from '@/functions/isLinkActive'
import cn from 'classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './Navigation.module.css'

/**
 * Render the Navigation component.
 *
 * @author WebDevStudios
 * @param {object}  props           Navigation props.
 * @param {array}   props.menu      Array of menu items.
 * @param {string}  props.className Optional classname for the element.
 * @return {Element}                The Navigation component.
 */
export default function Navigation({menu, className}) {
  const {asPath} = useRouter()
  return (
    <>
      {!!menu?.length && (
        <nav className={cn(styles.navigation, className)}>
          <ul>
            {menu.map((item, index) => {
              const children =
                item.children && item.children.length > 0 ? item.children : ''
              return (
                <li key={index}>
                  <Link href={item.path}>
                    <a
                      target={item.target ? item.target : '_self'}
                      className={cn(
                        'nav-item',
                        isLinkActive(asPath, item.path) && styles.active
                      )}
                    >
                      {item.label}
                    </a>
                  </Link>
                  {children && (
                    <ul>
                      {children.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link href={item.path}>
                              <a
                                target={item.target ? item.target : '_self'}
                                className={cn(
                                  'nav-item',
                                  isLinkActive(asPath, item.path) &&
                                    styles.active
                                )}
                              >
                                {item.label}
                              </a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </>
  )
}
