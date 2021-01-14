import ActiveLink from '@/components/common/ActiveLink'
import cn from 'classnames'
import styles from './Navigation.module.css'

/**
 * @param props
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
