import ActiveLink from '@/components/common/ActiveLink'
import cn from 'classnames'
import styles from './Navigation.module.css'

/**
 * Render the Navigation Component.
 *
 * @author WebDevStudios
 * @param {object}  props           props.
 * @param {array}  props.menu       Array of menu items.
 * @param {string}  props.className Optional classname for the element.
 * @return {Element}                The Navigation component.
 */
export default function Navigation({menu, className}) {
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
                  <ActiveLink href={item.path} activeClassName={styles.active}>
                    <a target={item.target ? item.target : '_self'}>
                      {item.label}
                    </a>
                  </ActiveLink>
                  {children && (
                    <ul>
                      {children.map((item, index) => {
                        return (
                          <li key={index}>
                            <ActiveLink
                              href={item.path}
                              activeClassName={styles.active}
                            >
                              <a target={item.target ? item.target : '_self'}>
                                {item.label}
                              </a>
                            </ActiveLink>
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
