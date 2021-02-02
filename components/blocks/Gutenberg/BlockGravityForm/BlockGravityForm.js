import GravityForm from '@/components/molecules/GravityForm'
import PropTypes from 'prop-types'

/**
 * GravityForm block.
 *
 * @author WebDevStudios
 * @param {object} props            The component props.
 * @param {object} props.attributes Component attributes.
 * @return {Element}                The GravityForm component.
 */
export default function BlockGravityForm({attributes}) {
  return <GravityForm {...attributes} />
}

BlockGravityForm.propTypes = {
  attributes: PropTypes.object
}
