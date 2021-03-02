import Text from '@/components/atoms/Inputs/Text'
import Form from '@/components/molecules/Form'
import postComment from '@/lib/frontend/wp/comments/postComment'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import * as Yup from 'yup'

/**
 * Render an individual comment component.
 *
 * @author WebDevStudios
 * @param {object} props         The component attributes as props.
 * @param {Array}  props.comment The comment to display.
 * @return {Element}             The Comment component.
 */
function SingleComment({comment}) {
  if (!comment) {
    return ''
  }
  const {content, date, author} = comment
  const {name, url} = author.node
  let nameElement = <span>{name}</span>
  if (url) {
    nameElement = (
      <a href={url} rel="nofollow noreferrer" target="_blank">
        {name}
      </a>
    )
  }
  return (
    <>
      <h4>
        {nameElement}
        {` at ${date}`}
      </h4>
      <div
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
      <hr />
    </>
  )
}

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired
}

SingleComment.defaultProps = {
  comment: {}
}

/**
 * Render the Comments component.
 *
 * @author WebDevStudios
 * @param {object} props          The component attributes as props.
 * @param {Array}  props.comments The array of comments to display.
 * @param {number} props.postId   The database ID of the post.
 * @return {Element}              The Comments component.
 */
export default function Comments({comments, postId}) {
  const [message, setMessage] = useState('')
  const [postedComment, setPostedComment] = useState(false)

  return (
    <>
      <h3>Comments</h3>
      {
        // If there are comments, loop over and display.
        !!comments?.length &&
          comments.map((comment, index) => (
            <SingleComment comment={comment.node} key={index} />
          ))
      }

      {!!postedComment && (
        <SingleComment comment={postedComment} key="posted-comment" />
      )}

      <Form
        className="comment-form"
        id="comment-form"
        title="Add a comment"
        validationSchema={Yup.object().shape({
          author: Yup.string().required('This field is required.'),
          authorEmail: Yup.string().required('This field is required.')
        })}
        onSubmit={async (values, {setSubmitting}) => {
          const {author, authorEmail, authorUrl, content} = values
          const response = await postComment(
            author,
            authorEmail,
            authorUrl,
            postId,
            content
          )
          if (response.error) {
            setMessage(response.errorMessage)
            setSubmitting(false)
            return
          }

          // alert(JSON.stringify(response))
          if (response.success && !response.comment) {
            setMessage(
              'Your comment was sent and will appear after moderation.'
            )
          }

          if (response.comment) {
            setPostedComment(response.comment)
          }
          setSubmitting(false)
        }}
      >
        {!!message && <div>{message}</div>}
        <Text id="author" label="Author" isRequired type="text" />
        <Text id="authorEmail" label="Email" isRequired type="email" />
        <Text id="authorUrl" label="Website" type="url" />
        <Text id="content" label="Comment" isRequired type="text" />
      </Form>
    </>
  )
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.number.isRequired
}

Comments.defaultProps = {
  comments: [],
  postId: 0
}
