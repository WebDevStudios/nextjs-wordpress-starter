import PropTypes from 'prop-types'
import {Quote} from '../../atoms/Quote'

/**
 * Quote Block
 *
 * The core Quote block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props           The component props.
 * @param  {string}  props.value     The quote content of the block.
 * @param  {string}  props.citation  The optional author citation.
 * @param  {string}  props.anchor    Optional anchor/id.
 * @param  {string}  props.className Optional classnames.
 * @return {Element}                 The Quote component.
 */
export function BlockQuote({value, citation, anchor, className}) {
  return (
    <Quote
      id={anchor}
      className={className}
      value={value}
      citation={citation}
    />
  )
}

BlockQuote.propTypes = {
  value: PropTypes.string,
  citation: PropTypes.string,
  anchor: PropTypes.string,
  className: PropTypes.string
}
