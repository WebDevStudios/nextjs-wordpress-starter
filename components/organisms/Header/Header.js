import Logo from '@/components/atoms/Logo'
import {MenuContext} from '@/components/common/MenuProvider'
import AlgoliaSearch from '@/components/molecules/AlgoliaSearch'
import Navigation from '@/components/molecules/Navigation'
import {useContext} from 'react'
import styles from './Header.module.css'

// TODO: Create Storybook for this component.
// TODO: Create mobile menu.

/**
 * Render Header component.
 */
export default function Header() {
  const {menus} = useContext(MenuContext)
  return (
    <header className={styles.header}>
      <div className="container flex items-center justify-end">
        <div className="relative pt-12 pb-16">
          <AlgoliaSearch
            useHistory={true}
            usePlaceholder={true}
            className="ml-auto"
          />
        </div>
      </div>
      <div className="container px-4 lg:px-0 flex items-center justify-between">
        <Logo />
        <Navigation
          menu={menus?.primary_menu}
          styles={styles}
          className={styles.primaryMenu}
        />
      </div>
    </header>
  )
}
