import PropTypes from 'prop-types'
/**
 * YouTube block
 *
 * The core YouTube embed block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockVideoEmbed({props}) {
  const {
    align,
    allowResponsive,
    anchor,
    caption,
    className,
    id,
    providerNameSlug,
    type,
    url
  } = props

  // TODO Add settings for unused props
  const videoID = url ? url.split('?v=') : null

  return (
    <pre>
      {JSON.stringify(
        videoID,
        {
          align,
          allowResponsive,
          anchor,
          caption,
          className,
          id,
          providerNameSlug,
          type,
          url
        },
        null,
        2
      )}
    </pre>
  )
}

BlockVideoEmbed.propTypes = {
  props: PropTypes.object.isRequired,
  align: PropTypes.string,
  allowResponsive: PropTypes.bool,
  anchor: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  providerNameSlug: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string
}
