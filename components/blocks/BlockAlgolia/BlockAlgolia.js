import PropTypes from 'prop-types'

/**
 * Algolia Block
 *
 * A custom ACF Block for displaying Algolia results.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockAlgolia({props, indexName}) {
  const {
    data: {title, post_type, show_filters, sort_order}
  } = props

  return (
    <pre>
      {JSON.stringify(
        indexName,
        {title, post_type, show_filters, sort_order},
        null,
        2
      )}
    </pre>
  )
}

BlockAlgolia.propTypes = {
  indexName: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
  id: PropTypes.string,
  anchor: PropTypes.string,
  align: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string,
    post_type: PropTypes.string,
    show_filters: PropTypes.string,
    sort_order: PropTypes.string
  })
}
