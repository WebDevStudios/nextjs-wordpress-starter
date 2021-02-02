import RichText from '@/components/atoms/RichText'
import PropTypes from 'prop-types'

/**
 * List Block
 *
 * The core List block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object}  props           The component props.
 * @param {string}  props.className Optional classnames.
 * @param {boolean} props.ordered   Is this an ordered list.
 * @param {string}  props.anchor    Optional anchor/id.
 * @param {string}  props.values    The content of the block.
 * @return {Element}                The RichText component.
 */
export default function BlockList({className, ordered, anchor, values}) {
  return (
    <RichText tag={ordered ? 'ol' : 'ul'} className={className} id={anchor}>
      {values}
    </RichText>
  )
}

BlockList.propTypes = {
  anchor: PropTypes.string,
  ordered: PropTypes.bool,
  className: PropTypes.string,
  values: PropTypes.string
}
