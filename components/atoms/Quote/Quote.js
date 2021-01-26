import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './Quote.module.css'

/**
 * Quote Block
 *
 * The core Quote block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string} value     The quote content of the block.
 * @param {string} citation  The optional author citation.
 * @param {string} id        Optional anchor/id.
 * @param {string} className Optional classnames.
 * @return {Element}         The Quote component.
 */
export default function Quote({value, citation, id, className}) {
  return (
    <>
      {!!value && (
        <figure id={id ? id : null} className={cn(styles.quote, className)}>
          <blockquote>
            <div className={styles.content}>
              <RichText tag="div">{value}</RichText>
            </div>
          </blockquote>
          {!!citation && (
            <figcaption className={styles.cite}>~ {citation}</figcaption>
          )}
        </figure>
      )}
    </>
  )
}

Quote.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  citation: PropTypes.string
}
