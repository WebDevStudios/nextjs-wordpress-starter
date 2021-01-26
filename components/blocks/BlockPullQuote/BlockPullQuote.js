import PullQuote from '@/components/atoms/PullQuote'
import PropTypes from 'prop-types'

/**
 * Pull Quote Block
 *
 * The core Pull Quote block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string} value     The quote content of the block.
 * @param {string} citation  The optional author citation.
 * @param {string} anchor    Optional anchor/id.
 * @param {string} className Optional classnames.
 * @return {Element}          The Quote component.
 */
export default function BlockPullQuote({value, citation, anchor, className}) {
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
  value: PropTypes.string,
  citation: PropTypes.string,
  anchor: PropTypes.string,
  className: PropTypes.string
}
