import AcfMediaText from '@/components/organisms/AcfMediaText'
import PropTypes from 'prop-types'

/**
 * Handle the AcfBlockMediaText block.
 *
 * @author WebDevStudios
 * @param  {object}  props            The props.
 * @param  {object}  props.attributes The attributes object.
 * @return {Element}                  The component.
 */
export default function AcfBlockMediaText({attributes}) {
  return (
    <>
      {attributes ? (
        <AcfMediaText {...attributes.data} />
      ) : (
        'There was a problem with attributes in AcfBlockMediaText.js.'
      )}
    </>
  )
}

AcfBlockMediaText.propTypes = {
  attributes: PropTypes.object
}
