import MediaText from '@/components/organisms/MediaText'
import PropTypes from 'prop-types'

/**
 * Handle the MediaText block.
 *
 * @author WebDevStudios
 * @param {object} props            The props.
 * @param {object} props.attributes The attributes object.
 * @return {Element}                The component.
 */
export default function BlockMediaText({attributes}) {
  attributes = {
    ...attributes,
    image: JSON.parse(decodeURIComponent(attributes.image))
  }

  return (
    <>
      {attributes ? (
        <MediaText {...attributes} />
      ) : (
        'There was a problem with attributes in BlockMediaText.js.'
      )}
    </>
  )
}

BlockMediaText.propTypes = {
  attributes: PropTypes.object
}
