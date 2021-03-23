import Container from '@/components/atoms/Container'
import Logo from '@/components/atoms/Logo'
import {useWordPressContext} from '@/components/common/WordPressProvider'
import AlgoliaSearch from '@/components/molecules/AlgoliaSearch'
import Navigation from '@/components/molecules/Navigation'
import Link from 'next/link'
import styles from './Header.module.css'

// TODO: Create Storybook for this component.

/**
 * Render the ImageGallery component.
 *
 * @author WebDevStudios
 * @return {Element} The Header component.
 */
export default function Header() {
  const {menus} = useWordPressContext()
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
            <Link href="/">
              <a>
                <Logo className={styles.logo} type="dark" />
              </a>
            </Link>
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
