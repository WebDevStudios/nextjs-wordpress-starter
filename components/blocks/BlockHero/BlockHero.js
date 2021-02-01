import Hero from '@/components/organisms/Hero'
import PropTypes from 'prop-types'

/**
 * Handle the Hero block.
 *
 * @author WebDevStudios
 * @param {object} props            The props.
 * @param {object} props.attributes The attributes object.
 * @return {Element}                The component.
 */
export default function BlockHero({attributes}) {
  attributes = {
    ...attributes,
    backgroundImage: JSON.parse(decodeURIComponent(attributes.backgroundImage))
  }

  return (
    <>
      {attributes ? (
        <Hero {...attributes} />
      ) : (
        'There was a problem with attributes in BlockHero.js.'
      )}
    </>
  )
}

BlockHero.propTypes = {
  attributes: PropTypes.object
}
