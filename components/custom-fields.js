import PropTypes from 'prop-types'

export default function CustomFields({customFields}) {
  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="mt-8 text-lg font-bold">What I&apos;m Into</h3>
      {customFields.book && <p className="mt-3">Book: {customFields.book}</p>}
      {customFields.music && (
        <p className="mt-3">Music: {customFields.music}</p>
      )}
      {customFields.television && (
        <p className="mt-3">Television: {customFields.television}</p>
      )}
    </div>
  )
}

CustomFields.propTypes = {
  customFields: PropTypes.object
}
