import AcfMediaText from '@/components/organisms/AcfMediaText'
import PropTypes from 'prop-types'

/**
 * Handle the AcfBlockMediaText block.
 *
 * @author WebDevStudios
 * @param  {object}  props      The props.
 * @param  {object}  props.data The block attribute data.
 * @return {Element}            The component.
 */
export default function AcfBlockMediaText({data}) {
  return (
    <>
      {data ? (
        <AcfMediaText {...data} />
      ) : (
        'There was a problem with attributes in AcfBlockMediaText.js.'
      )}
    </>
  )
}

AcfBlockMediaText.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.string,
    className: PropTypes.string,
    ctaText: PropTypes.string,
    ctaUrl: PropTypes.string,
    image: PropTypes.number,
    imageMeta: PropTypes.shape({
      altText: PropTypes.string,
      mediaItemUrl: PropTypes.string,
      mediaDetails: PropTypes.shape({
        height: PropTypes.number,
        sizes: PropTypes.array,
        width: PropTypes.number
      })
    }),
    mediaLeft: PropTypes.bool,
    title: PropTypes.string
  })
}
