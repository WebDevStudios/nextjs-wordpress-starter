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
 * @param {object} props           The component properties.
 * @param {string} props.value     The quote content of the block.
 * @param {string} props.citation  The optional author citation.
 * @param {string} props.id        Optional anchor/id.
 * @param {string} props.className Optional classnames.
 * @return {Element}               The Quote component.
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
            <figcaption className={styles.cite}>
              ~ <RichText tag="span">{citation}</RichText>
            </figcaption>
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
