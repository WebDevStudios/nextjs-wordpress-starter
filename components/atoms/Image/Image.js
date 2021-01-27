import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import RichText from '@/components/atoms/RichText'
import styles from './Image.module.css'
import cn from 'classnames'

/**
 * Render the Image component.
 *
 * @author WebDevStudios
 * @param {string} anchor     The anchor/id of the block.
 * @param {string} alt        The image alt text.
 * @param {string} caption    The image caption.
 * @param {string} className  The image class.
 * @param {string} id         The image ID.
 * @param {string} href       The URL of the link.
 * @param {string} linkTarget Target for the link.
 * @param {string} linkClass  Class for the link.
 * @param {string} rel        The rel attribute for the link.
 * @param {string} sizeSlug   The WP image size.
 * @param {string} url        The full URL path of the image.
 * @return {Element} The Image component.
 */
export default function Image({
  alt,
  anchor,
  caption,
  className,
  id,
  href,
  linkTarget,
  linkClass,
  rel,
  url
}) {
  return (
    <>
      {!!url && (
        <div id={anchor || null} className={styles.image}>
          {href ? (
            <Link href={href}>
              <a
                target={linkTarget || null}
                rel={rel || null}
                className={linkClass || null}
              >
                <img
                  src={url}
                  alt={alt}
                  className={cn(className, `image-${id}`)}
                />
              </a>
            </Link>
          ) : (
            <img
              src={url}
              alt={alt}
              className={cn(className, id && `image-${id}`)}
            />
          )}
          {!!caption && (
            <div className={styles.caption}>
              <RichText tag="span">{caption}</RichText>
            </div>
          )}
        </div>
      )}
    </>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  anchor: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.number,
  href: PropTypes.string,
  linkClass: PropTypes.string,
  linkTarget: PropTypes.string,
  rel: PropTypes.string,
  sizeSlug: PropTypes.string,
  url: PropTypes.string
}
