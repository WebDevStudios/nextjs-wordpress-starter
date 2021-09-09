import Container from '@/components/atoms/Container'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Footer.module.css'

/**
 * Render the Footer component.
 *
 * @author                      WebDevStudios
 * @param  {object}  props      The component attributes as props.
 * @param  {object}  props.menu Arrary of menu items.
 * @return {Element}            The Footer component.
 */
export default function Footer({menu}) {
  return (
    <footer className={styles.footer}>
      <Container>
        {!!menu && (
          <nav className={styles.footerMenu}>
            <ul>
              {menu.map((item, index) => {
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

        <div className={styles.copyright}>
          {/* TODO: Retrieve site title from global WP settings */}
          &copy; {new Date().getFullYear()} Next.js WordPress Starter
        </div>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  menu: PropTypes.array
}
