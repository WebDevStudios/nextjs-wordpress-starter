import Hero from '@/components/organisms/Hero'
import PropTypes from 'prop-types'

/**
 * Handle the LzbHero block.
 *
 * @author WebDevStudios
 * @param {object} props            The props.
 * @param {object} props.attributes The attributes object.
 * @return {Element}                The component.
 */
export default function LzbBlockHero({attributes}) {
  attributes = {
    ...attributes,
    backgroundImage: JSON.parse(decodeURIComponent(attributes.backgroundImage))
  }

  return (
    <>
      {attributes ? (
        <Hero {...attributes} />
      ) : (
        'There was a problem with attributes in LzbBlockHero.js.'
      )}
    </>
  )
}

LzbBlockHero.propTypes = {
  attributes: PropTypes.object
}
