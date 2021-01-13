import Link from 'next/link'
import {useContext, useState} from 'react'
import AlgoliaSearch from '@/components/molecules/AlgoliaSearch'
import Navigation from '@/components/molecules/Navigation'
import styles from './Header.module.css'
import Hamburger from 'hamburger-react'
import {MenuContext} from '@/components/common/MenuProvider'
import cn from 'classnames'

// TODO: Create Storybook for this component.
// TODO: Split Logo into component.
// TODO: Create mobile menu.

function Logo() {
  return (
    <Link href="/">
      <a>
        <img
          src="/logo.svg"
          alt="site logo"
          loading="lazy"
          height="128"
          width="128"
        />
      </a>
    </Link>
  )
}

function Drawer({menu}) {
  return (
    <div className="bg-white dark:bg-gray-900 absolute w-56 h-screen py-12 px-4 top-0 right-0 flex flex-col shadow-md z-50">
      <Navigation menu={menu} styles={styles} className={styles.header} />
    </div>
  )
}

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
        <span className="hidden">
          <Hamburger label="Show menu" toggled={isOpen} toggle={setOpen} />
        </span>
      </div>
    </header>
  )
}
