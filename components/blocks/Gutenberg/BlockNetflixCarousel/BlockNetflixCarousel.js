import PropTypes from 'prop-types'

/**
 * Netflix Carousel Block
 *
 * A custom ACF Block for displaying a carousel of cards.
 *
 * @author WebDevStudios
 * @param props.props.props
 * @param props.props.props.props
 * @param {object}                props.props The component attributes as props.
 */
export default function BlockNetflixCarousel({props}) {
  const {
    id,
    anchor,
    className,
    data: {
      button_label,
      button_url,
      cards,
      cards_expanded,
      cards_per_page,
      description,
      title
    }
  } = props

  return (
    <pre>
      {JSON.stringify(
        {
          id,
          anchor,
          className,
          data: {
            button_label,
            button_url,
            cards,
            cards_expanded,
            cards_per_page,
            description,
            title
          }
        },
        null,
        2
      )}
    </pre>
  )
}

BlockNetflixCarousel.propTypes = {
  id: PropTypes.string,
  anchor: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.shape({
    button_label: PropTypes.string,
    button_url: PropTypes.string,
    cards: PropTypes.array,
    cards_per_page: PropTypes.string,
    cards_expanded: PropTypes.array,
    description: PropTypes.string,
    title: PropTypes.string
  }),
  props: PropTypes.object.isRequired
}
