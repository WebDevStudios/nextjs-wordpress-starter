import Container from '@/components/atoms/Container'
import Logo from '@/components/atoms/Logo'
import {MenuContext} from '@/components/common/MenuProvider'
import AlgoliaSearch from '@/components/molecules/AlgoliaSearch'
import Navigation from '@/components/molecules/Navigation'
import {useContext} from 'react'
import styles from './Header.module.css'

// TODO: Create Storybook for this component.

/**
 * Render the ImageGallery component.
 *
 * @author WebDevStudios
 * @return {Element} The Header component.
 */
export default function Header() {
  const {menus} = useContext(MenuContext)
  return (
    <>
      <a className={styles.skip} href="#page-content">
        Skip to Main Content
      </a>
      <header className={styles.header}>
        <Container paddingTop={false} paddingBtm={false}>
          <div className={styles.search}>
            <AlgoliaSearch
              className={styles.input}
              useHistory={true}
              usePlaceholder={true}
            />
          </div>
          <div className={styles.navigation}>
            <Logo className={styles.logo} type="dark" />
            <Navigation
              menu={menus?.primary_menu}
              styles={styles}
              className={styles.primaryMenu}
            />
          </div>
        </Container>
      </header>
    </>
  )
}
