import cn from 'classnames'
import PropTypes from 'prop-types'
import RichText from '../RichText'
import styles from './PullQuote.module.css'

/**
 * PullQuote Block
 *
 * @author WebDevStudios
 * @param  {object}  props            The component properties.
 * @param  {string}  props.citation   The optional author citation.
 * @param  {string}  props.className  Optional classnames.
 * @param  {string}  props.id         Optional anchor/id.
 * @param  {object}  props.style      Custom pullquote styles.
 * @param  {boolean} props.styleSolid Whether this pullquote has the solid style.
 * @param  {string}  props.value      The pull quote content of the block.
 * @return {Element}                  The PullQuote component.
 */
export default function PullQuote({
  citation,
  className,
  id,
  style,
  styleSolid,
  value
}) {
  return (
    <>
      {!!value && (
        <figure
          id={id ? id : null}
          className={cn(
            styles.pullquote,
            className,
            styleSolid && styles.styleSolid
          )}
          style={style}
        >
          <div className={styles.wrap}>
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
          </div>
        </figure>
      )}
    </>
  )
}

PullQuote.propTypes = {
  citation: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string
  }),
  styleSolid: PropTypes.bool,
  value: PropTypes.string
}
