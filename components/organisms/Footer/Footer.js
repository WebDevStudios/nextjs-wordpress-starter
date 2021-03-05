import Container from '@/components/atoms/Container'
import {useWordPressContext} from '@/components/common/WordPressProvider'
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
 * @return {Element}               The Footer component.
 */
export default function Footer({social, siteTitle}) {
  const {menus} = useWordPressContext()
  return (
    <footer className={styles.footer}>
      <Container>
        {!!menus?.footer_menu && (
          <nav className={styles.footerMenu}>
            <ul>
              {menus?.footer_menu.map((item, index) => {
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
          {!!social?.facebook && (
            <>
              {' '}
              &middot;{' '}
              <Link href={social.facebook}>
                <a>Facebook</a>
              </Link>
            </>
          )}
          {!!social?.instagram && (
            <>
              {' '}
              &middot;{' '}
              <Link href={social.instagram}>
                <a>Instagram</a>
              </Link>
            </>
          )}
          {!!social?.linkedIn && (
            <>
              {' '}
              &middot;{' '}
              <Link href={social.linkedIn}>
                <a>LinkedIn</a>
              </Link>
            </>
          )}
          {!!social?.mySpace && (
            <>
              {' '}
              &middot;{' '}
              <Link href={social.mySpace}>
                <a>MySpace</a>
              </Link>
            </>
          )}
          {!!social?.pinterest && (
            <>
              {' '}
              &middot;{' '}
              <Link href={social.pinterest}>
                <a>Pinterest</a>
              </Link>
            </>
          )}
          {!!social?.twitter && (
            <>
              {' '}
              &middot;{' '}
              <Link href={social.twitter}>
                <a>Twitter</a>
              </Link>
            </>
          )}
          {!!social?.wikipedia && (
            <>
              {' '}
              &middot;{' '}
              <Link href={social.wikipedia}>
                <a>Wikipedia</a>
              </Link>
            </>
          )}
          {!!social?.youTube && (
            <>
              {' '}
              &middot;{' '}
              <Link href={social.youTube}>
                <a>Youtube</a>
              </Link>
            </>
          )}
        </div>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  ...seoSocialPropTypes,
  siteTitle: PropTypes.string
}
