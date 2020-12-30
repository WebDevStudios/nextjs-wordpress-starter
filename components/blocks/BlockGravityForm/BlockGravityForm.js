import GravityForm from '@/components/molecules/GravityForm'
import PropTypes from 'prop-types'

/**
 * GravityForm block.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockGravityForm({attributes}) {
  return <GravityForm {...attributes} />
}

BlockGravityForm.propTypes = {
  attributes: PropTypes.object
}
