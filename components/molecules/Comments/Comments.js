import Text from '@/components/atoms/Inputs/Text'
import Form from '@/components/molecules/Form'
import processPostComment from '@/functions/next-api/wordpress/comments/processPostComment'
import {useSession} from 'next-auth/client'
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
  const [session, loading] = useSession()

  // Avoid flash if loading.
  if (loading) {
    return null
  }

  /**
   * Handle post comment submission.
   *
   * @author WebDevStudios
   * @param {object}   values                Form values.
   * @param {object}   actions               Formik form actions.
   * @param {Function} actions.setSubmitting Toggle form submitting state.
   */
  async function handlePostComment(values, {setSubmitting}) {
    const {
      author = null,
      authorEmail = null,
      authorUrl = null,
      content
    } = values

    const response = await processPostComment(
      session?.user?.accessToken ?? null,
      postId,
      content,
      author,
      authorEmail,
      authorUrl
    )

    if (response.error) {
      setMessage(response.errorMessage)
      setSubmitting(false)
      return
    }

    if (response.success && !response.comment) {
      setMessage('Your comment was sent and will appear after moderation.')
    }

    if (response.comment) {
      setPostedComment(response.comment)
    }

    setSubmitting(false)
  }

  // Determine form defaults.
  const formDefaults = !session
    ? {
        author: '',
        authorEmail: '',
        authorUrl: '',
        content: ''
      }
    : {
        content: ''
      }

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
        formDefaults={formDefaults}
        validationSchema={
          !session
            ? Yup.object().shape({
                author: Yup.string().required('This field is required.'),
                authorEmail: Yup.string().required('This field is required.')
              })
            : null
        }
        onSubmit={handlePostComment}
      >
        {!!message && <div>{message}</div>}

        {!session && (
          <>
            <Text id="author" label="Author" isRequired type="text" />
            <Text id="authorEmail" label="Email" isRequired type="email" />
            <Text id="authorUrl" label="Website" type="url" />
          </>
        )}

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
