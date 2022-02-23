import Input from '@/components/atoms/Input'
import processPostComment from '@/functions/next-api/wordpress/comments/processPostComment'
import sanitizeComment from '@/functions/sanitizeComment'
import cn from 'classnames'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
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
 * @param  {number}  props.depth   The current depth of nesting.
 * @return {Element}               The Comment component.
 */
export function SingleComment({comment, depth = 0}) {
  // No comment? Bail...
  if (!comment) {
    return ''
  }

  // Load the timezone plugin.
  dayjs.extend(utc)
  dayjs.extend(timezone)

  const {content, date, author} = comment
  const {gravatarUrl, name, url} = author.node

  return (
    <li
      id={`comment-${comment?.databaseId}`}
      className={cn(styles.comment, depth % 2 && styles.odd)}
    >
      <article>
        <header className={styles.author}>
          <img
            alt={name}
            height="52"
            loading="lazy"
            src={gravatarUrl}
            width="52"
          />
          <h4>
            {url ? (
              <a href={url} rel="external nofollow ugc">
                {name}
              </a>
            ) : (
              name
            )}
          </h4>
          <a href={`#comment-${comment?.databaseId}`}>
            <time
              dateTime={dayjs
                .utc(date)
                .tz('America/New_York')
                .format('YYYY-MM-DDTHH:mm:ssZ[Z]')}
            >
              {dayjs
                .utc(date)
                .tz('America/New_York')
                .format('MMMM D, YYYY h:mm a')}
            </time>
          </a>
        </header>
        {sanitizeComment(content)}
      </article>
      {!!comment?.children?.length && (
        <ol className={cn(depth < 2 && styles.nestedComments)}>
          {comment.children.map((child, index) => (
            <SingleComment comment={child} depth={depth + 1} key={index} />
          ))}
        </ol>
      )}
    </li>
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
  const {data: session} = useSession()

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
      const authorName = response?.comment?.author?.node?.name || 'user'

      setPostedComment(response.comment)
      setMessage(`Thank you, ${authorName}! Your comment has been published.`)
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
    <section id="comments" className={styles.comments}>
      <h2>Comments</h2>

      {
        // If there are comments, loop over and display.
        !!comments?.length && (
          <ol>
            {comments?.map((comment, index) => (
              <SingleComment comment={comment} key={index} />
            ))}
          </ol>
        )
      }

      {
        // If user has a previously appoved comment, display it immediately.
        !!postedComment && (
          <ol>
            <SingleComment comment={postedComment} key="posted-comment" />
          </ol>
        )
      }

      {
        // If there is a message, display it.
        !!message && <div className={styles.message}>{message}</div>
      }

      <h3>{comments.length < 1 ? `Start a` : `Join the`} discussion!</h3>

      <p>
        Your email address will not be published. Required fields are marked *
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          // Validate user fields if not logged in.
          ...(!session && {
            author: Yup.string().required('Your name is required.'),
            authorEmail: Yup.string()
              .email(
                'Your email address must be properly formatted: email@example.com'
              )
              .required('Your email address is required.')
          }),
          content: Yup.string().required(
            'Please write a comment before submitting.'
          )
        })}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true)
          handlePostComment(values)
          actions.resetForm()
          actions.setSubmitting(false)
        }}
      >
        {({isSubmitting, isValid}) => (
          <Form id="comment-form" title="Add a comment">
            {
              // Don't render author fields if user is logged in.
              !session && (
                <>
                  <Input
                    id="author"
                    label="Your Name"
                    name="author"
                    placeholder="Your Name"
                    required
                  />

                  <Input
                    id="authorEmail"
                    label="Your Email"
                    name="authorEmail"
                    placeholder="Your Email"
                    required
                    type="email"
                  />

                  <Input
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
              id="content"
              label="Your Comment"
              name="content"
              required
              placeholder="Your Comment"
            />

            <p>
              Basic HTML tags such as <span>&lt;strong&gt;</span>,{' '}
              <span>&lt;em&gt;</span>, <span>&lt;pre&gt;</span>,{' '}
              <span>&lt;code&gt;</span>, are allowed. Press enter twice to
              create a new paragraph.
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
