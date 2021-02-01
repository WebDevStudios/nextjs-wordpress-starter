import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './TwitterEmbed.module.css'
import {useEffect, useRef} from 'react'
import RichText from '@/components/atoms/RichText'

/**
 * TwitterEmbed Block
 *
 * @author WebDevStudios
 * @param {object} props           TwitterEmbed component props.
 * @param {string} props.className Optional className.
 * @param {string} props.caption   Optional caption.
 * @param {string} props.url       The full URL to the video.
 * @return {Element}               The TwitterEmbed component.
 */
export default function TwitterEmbed({className, caption, url}) {
  const tweetRef = useRef(null)

  useEffect(() => {
    if (url === '') {
      return
    }
    // @see https://stackoverflow.com/a/43268098/921927
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = `https://publish.twitter.com/oembed?url=${url}`
    fetch(proxyUrl + targetUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.html) {
          // @see https://stackoverflow.com/a/43268098/921927
          // Create slot for executing a script file.
          const slotHtml = document
            .createRange()
            .createContextualFragment(data.html) // Create a 'tiny' document and parse the html string.
          tweetRef.current.innerHTML = '' // Clear the container.
          tweetRef.current.appendChild(slotHtml) // Append the new content.
        }
      })
  }, [])

  return (
    <div className={cn(styles.twitterEmbed, className)}>
      <div ref={tweetRef}></div>
      {!!caption && (
        <div className={styles.caption}>
          <RichText tag="span">{caption}</RichText>
        </div>
      )}
    </div>
  )
}

TwitterEmbed.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string,
  url: PropTypes.string.isRequired
}
