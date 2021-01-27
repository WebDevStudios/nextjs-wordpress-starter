import GravityForm from '@/components/molecules/GravityForm'
import PropTypes from 'prop-types'

/**
 * GravityForm block.
 *
 * @author WebDevStudios
 * @param {object} props            The component attributes as props.
 * @param {object} props.attributes The attributes from the GravityForms block.
 * @return {Element}                The rendered GravityForm.
 */
export default function BlockGravityForm({attributes}) {
  return <GravityForm {...attributes} />
}

BlockGravityForm.propTypes = {
  attributes: PropTypes.object
}
