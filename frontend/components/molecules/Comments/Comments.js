import Input from '@/components/atoms/Input'
import processPostComment from '@/functions/next-api/wordpress/comments/processPostComment'
import cn from 'classnames'
import {Form, Formik} from 'formik'
import {useSession} from 'next-auth/react'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import * as Yup from 'yup'
import styles from './Comments.module.css'

/**
 * Render an individual comment component.
 *
 * @author WebDevStudios
 * @param  {object}  props         The component attributes as props.
 * @param  {object}  props.comment The comment to display.
 * @return {Element}               The Comment component.
 */
export function SingleComment({comment}) {
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
 * @param  {object}  props          The component attributes as props.
 * @param  {Array}   props.comments The array of comments to display.
 * @param  {number}  props.postId   The database ID of the post.
 * @return {Element}                The Comments component.
 */
export default function Comments({comments, postId}) {
  const [message, setMessage] = useState('')
  const [postedComment, setPostedComment] = useState(false)
  const {data: session, status} = useSession()
  const loading = status === 'loading'

  // Avoid flash if loading.
  if (loading) {
    return null
  }

  /**
   * Handle post comment submission.
   *
   * @author WebDevStudios
   * @param {object} values Form values.
   */
  async function handlePostComment(values) {
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
      return
    }

    if (response.success && !response.comment) {
      setMessage('Your comment was sent and will appear after moderation.')
    }

    if (response.comment) {
      setPostedComment(response.comment)
      setMessage(`Thank you, ${author}! Your comment has been published.`)
    }
  }

  // Set form field default values.
  const initialValues = !session
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
    <section>
      <h3>Comments</h3>
      {
        // If user has a previously appoved comment, display it immediately.
        !!postedComment && (
          <SingleComment comment={postedComment} key="posted-comment" />
        )
      }

      {
        // If there are comments, loop over and display.
        !!comments?.length && (
          <ol className={styles.commentList}>
            {comments.map((comment, index) => (
              <SingleComment comment={comment.node} key={index} />
            ))}
          </ol>
        )
      }

      {
        // If there is a message, display it.
        !!message && <div>{message}</div>
      }

      <Formik
        initialValues={initialValues}
        validationSchema={
          !session
            ? // If not logged in...
              Yup.object().shape({
                author: Yup.string().required('Your name is required.'),
                authorEmail: Yup.string().required(
                  'Your email address is required.'
                ),
                content: Yup.string().required(
                  'Please write a comment before submitting.'
                )
              })
            : // If logged in...
              Yup.object().shape({
                content: Yup.string().required(
                  'Please write a comment before submitting.'
                )
              })
        }
        onSubmit={(values, actions) => {
          actions.setSubmitting(true)
          handlePostComment(values)
          actions.resetForm()
          actions.setSubmitting(false)
        }}
      >
        {({isSubmitting, isValid}) => (
          <Form
            className={styles.commentForm}
            id="comment-form"
            title="Add a comment"
          >
            {
              // Don't render author fields if user is logged in.
              !session && (
                <>
                  <Input
                    className={styles.field}
                    id="author"
                    label="Your Name"
                    name="author"
                    placeholder="Your Name"
                    required
                  />

                  <Input
                    className={styles.field}
                    id="authorEmail"
                    label="Your Email"
                    name="authorEmail"
                    placeholder="Your Email"
                    required
                    type="email"
                  />

                  <Input
                    className={styles.field}
                    id="authorUrl"
                    label="Your Website URL"
                    name="authorUrl"
                    placeholder="Your Website URL"
                    type="url"
                  />
                </>
              )
            }

            <Input
              as="textarea"
              className={cn(styles.field, styles.textarea)}
              id="content"
              label="Your Comment"
              name="content"
              required
              placeholder="Your Comment"
            />

            <p className={styles.description}>
              Basic HTML tags such as{' '}
              <span className={styles.code}>&lt;strong&gt;</span>,{' '}
              <span className={styles.code}>&lt;em&gt;</span>,{' '}
              <span className={styles.code}>&lt;pre&gt;</span>,{' '}
              <span className={styles.code}>&lt;code&gt;</span>, are allowed.
              Press enter twice to create a new paragraph.
            </p>

            <button type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? 'Submitting' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </section>
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
