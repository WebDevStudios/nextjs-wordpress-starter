import Code from '@/components/atoms/Code'
import PropTypes from 'prop-types'

/**
 * Code Block
 *
 * The core Code block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props           The component props.
 * @param {string} props.className Optional classnames.
 * @param {string} props.anchor    Optional anchor/id.
 * @param {string} props.content   The content of the block.
 * @return {Element}               The Code component.
 */
export default function BlockCode({anchor, className, content}) {
  return <Code className={className} id={anchor} content={content} />
}

BlockCode.propTypes = {
  anchor: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string
}
