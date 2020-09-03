import PropTypes from 'prop-types'

export default function Avatar({author}) {
  const name =
    author.node.firstName && author.node.lastName
      ? `${author.node.firstName} ${author.node.lastName}`
      : author.node.name

  return (
    <div className="flex items-center">
      <img
        src={author.node.avatar.url}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

Avatar.propTypes = {
  author: PropTypes.object
}
