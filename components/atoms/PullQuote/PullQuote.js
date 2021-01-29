import cn from 'classnames'
import PropTypes from 'prop-types'
import RichText from '../RichText'
import styles from './PullQuote.module.css'

/**
 * PullQuote Block
 *
 * @author WebDevStudios
 * @param {string} value     The pull quote content of the block.
 * @param {string} citation  The optional author citation.
 * @param {string} id        Optional anchor/id.
 * @param {string} className Optional classnames.
 * @return {Element} The PullQuote component.
 */
export default function PullQuote({value, citation, id, className}) {
  return (
    <>
      {!!value && (
        <figure id={id ? id : null} className={cn(styles.pullquote, className)}>
          <blockquote>
            <div className={styles.content}>
              <RichText tag="div">{value}</RichText>
            </div>
          </blockquote>
          {!!citation && (
            <figcaption className={styles.cite}>
              ~ <RichText tag="span">{citation}</RichText>
            </figcaption>
          )}
        </figure>
      )}
    </>
  )
}

PullQuote.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  citation: PropTypes.string
}
