import PullQuote from '@/components/atoms/PullQuote'
import PropTypes from 'prop-types'

/**
 * Pull Quote Block
 *
 * The core Pull Quote block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props           The component props.
 * @param  {string}  props.anchor    Optional anchor/id.
 * @param  {string}  props.citation  The optional author citation.
 * @param  {string}  props.className Optional classnames.
 * @param  {string}  props.value     The quote content of the block.
 * @return {Element}                 The Quote component.
 */
export default function BlockPullQuote({anchor, citation, className, value}) {
  return (
    <PullQuote
      id={anchor}
      className={className}
      value={value}
      citation={citation}
    />
  )
}

BlockPullQuote.propTypes = {
  anchor: PropTypes.string,
  citation: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string
}
