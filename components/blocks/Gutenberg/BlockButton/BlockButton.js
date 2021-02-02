import Button from '@/components/atoms/Button'
import PropTypes from 'prop-types'

/**
 * Button Block
 *
 * The core Button block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props            The component properties.
 * @param {string} props.anchor     Optional anchor/id.
 * @param {string} props.className  Optional classnames.
 * @param {string} props.linkTarget The target for the link.
 * @param {string} props.rel        The rel attribute for the link.
 * @param {string} props.text       The link label.
 * @param {string} props.url        The link for the button.
 * @return {Element} The Button component.
 */
export default function BlockButton({
  anchor,
  className,
  linkTarget,
  rel,
  text,
  url
}) {
  return (
    <Button
      className={className}
      text={text}
      url={url}
      urlExternal={true}
      attributes={{
        id: anchor || null,
        target: linkTarget || null,
        rel: rel || null
      }}
    />
  )
}

BlockButton.propTypes = {
  anchor: PropTypes.string,
  className: PropTypes.string,
  linkTarget: PropTypes.string,
  rel: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string
}
