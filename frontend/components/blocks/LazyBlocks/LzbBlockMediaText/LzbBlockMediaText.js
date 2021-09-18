import LzbMediaText from '@/components/organisms/LzbMediaText'
import PropTypes from 'prop-types'

/**
 * Handle the LzbMediaText block.
 *
 * @author WebDevStudios
 * @param  {object}  attributes The attributes object.
 * @return {Element}            The component.
 */
export default function LzbBlockMediaText(attributes) {
  attributes = {
    ...attributes,
    image: JSON.parse(decodeURIComponent(attributes.image))
  }

  return (
    <>
      {attributes ? (
        <LzbMediaText {...attributes} />
      ) : (
        'There was a problem with attributes in LzbBlockMediaText.js.'
      )}
    </>
  )
}

LzbBlockMediaText.propTypes = {
  attributes: PropTypes.object
}
