import Container from '@/components/atoms/Container'
import Logo from '@/components/atoms/Logo'
import Navigation from '@/components/molecules/Navigation'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Header.module.css'

/**
 * Render the Header component.
 *
 * @author WebDevStudios
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.menu   The header menu object.
 * @param  {Element} props.search The search component.
 * @return {Element}              The Header component.
 */
export default function Header({menu, search}) {
  return (
    <>
      <a className={styles.skip} href="#page-content">
        Skip to Main Content
      </a>
      <header className={styles.header}>
        <Container paddingTop={false} paddingBtm={false}>
          {search && <div className={styles.search}>{search}</div>}
          <div className={styles.navigation}>
            <Link href="/">
              <a>
                <Logo className={styles.logo} type="dark" />
              </a>
            </Link>
            <Navigation
              menu={menu}
              styles={styles}
              className={styles.primaryMenu}
            />
          </div>
        </Container>
      </header>
    </>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  search: PropTypes.element
}
