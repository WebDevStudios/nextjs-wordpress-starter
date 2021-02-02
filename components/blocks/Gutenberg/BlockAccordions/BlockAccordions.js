import PropTypes from 'prop-types'

/**
 * Accordion Block
 *
 * A custom ACF Block for displaying accordions.
 *
 * @author WebDevStudios
 * @param {object} props       The component props.
 * @param {object} props.props The component attributes as props.
 * @return {Element}           The Accordion component.
 */
export default function BlockAccordions({props}) {
  const {
    id,
    anchor,
    className,
    data: {accordions, button_label, button_url, title}
  } = props

  return (
    <pre>
      {JSON.stringify(
        {
          id,
          anchor,
          className,
          data: {accordions, button_label, button_url, title}
        },
        null,
        2
      )}
    </pre>
  )
}

BlockAccordions.propTypes = {
  anchor: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.shape({
    accordions: PropTypes.object,
    button_label: PropTypes.string,
    button_url: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
  }),
  id: PropTypes.string,
  props: PropTypes.object.isRequired
}
