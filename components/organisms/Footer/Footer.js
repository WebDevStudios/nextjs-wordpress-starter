import Container from '@/components/atoms/Container'
import {seoSocialPropTypes} from '@/functions/getPagePropTypes'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Footer.module.css'

// TODO: Create Storybook for this component.

/**
 * Render the Footer component.
 *
 * @author WebDevStudios
 * @param {object} props           The component attributes as props.
 * @param {object} props.social    Yoast SEO social media data.
 * @param {string} props.siteTitle Yoast SEO site title.
 * @param {object} props.menu      The footer menu object.
 * @return {Element}               The Footer component.
 */
export default function Footer({social, siteTitle, menu}) {
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
          &copy; {new Date().getFullYear()} {siteTitle}
          {!!social &&
            Object.entries(social).map(([key, value]) => {
              if (value) {
                return (
                  <>
                    {' '}
                    &middot;{' '}
                    <Link href={value}>
                      <a>{key}</a>
                    </Link>
                  </>
                )
              }
            })}
        </div>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  ...seoSocialPropTypes,
  siteTitle: PropTypes.string
}
