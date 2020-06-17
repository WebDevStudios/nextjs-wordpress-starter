import PropTypes from 'prop-types'
import styles from './post-body.module.css'

export default function PostBody({content}) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{__html: content}}
      />
    </div>
  )
}

PostBody.propTypes = {
  content: PropTypes.string
}
