import config from '@/functions/config'
import Link from 'next/link'
import {seoSocialPropTypes} from '@/functions/getPagePropTypes'

/**
 * Render the Footer component.
 *
 * @author WebDevStudios
 * @param {object} props        The component attributes as props.
 * @param {any}    props.social Yoast SEO social media data.
 * @return {Element}            The Footer component.
 */
export default function Footer({social}) {
  return (
    <footer>
      <div className="container p-4 lg:px-0 text-center text-sm">
        &copy; {new Date().getFullYear()} {config.siteName} by {config.author}
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
    </footer>
  )
}

Footer.propTypes = {
  ...seoSocialPropTypes
}
