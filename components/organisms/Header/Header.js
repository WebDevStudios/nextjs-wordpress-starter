import Logo from '@/components/atoms/Logo'
import {MenuContext} from '@/components/common/MenuProvider'
import AlgoliaSearch from '@/components/molecules/AlgoliaSearch'
import Navigation from '@/components/molecules/Navigation'
import cn from 'classnames'
import {useContext, useState} from 'react'
import styles from './Header.module.css'

// TODO: Create Storybook for this component.
// TODO: Create mobile menu.

/**
 * Render the header as a component.
 */
export default function Header() {
  const {menus} = useContext(MenuContext)
  const [isOpen, setOpen] = useState(false)
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
          className={cn(styles.primaryMenu, isOpen && styles.open)}
        />
      </div>
    </header>
  )
}
