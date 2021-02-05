import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import PropTypes from 'prop-types'
import {TwitterTweetEmbed} from 'react-twitter-embed'
import styles from './TwitterEmbed.module.css'

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
  const tweetURL = url ? url.split('/') : '' // Split URL string into array.
  const tweetId = tweetURL ? tweetURL[tweetURL.length - 1] : '' // Get ID from url array.

  return (
    <>
      {!!tweetId && (
        <div className={cn(styles.twitterEmbed, className)}>
          <TwitterTweetEmbed tweetId={tweetId} />
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

TwitterEmbed.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string,
  url: PropTypes.string.isRequired
}
