import Container from '@/components/atoms/Container'
import Input from '@/components/atoms/Input'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import {Form, Formik} from 'formik'
import {signIn, useSession} from 'next-auth/react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'

/**
 * Render the Login component.
 *
 * @author WebDevStudios
 * @param  {object}  props      The component attributes as props.
 * @param  {object}  props.post Post data from WordPress.
 * @return {Element}            The Login component.
 */
export default function Login({post}) {
  const [errorMessage, setErrorMessage] = useState('')
  const {data: session} = useSession()
  const router = useRouter()

  // Redirect to Profile page if user already logged in.
  useEffect(() => {
    if (session && session.user) {
      router.push('/profile')
    }
  })

  /**
   * Submit login form.
   *
   * @author WebDevStudios
   * @param {object} values Field values to submit.
   */
  async function submitForm(values) {
    const {username, password} = values
    const response = await signIn('wpLogin', {
      username,
      password,
      redirect: false
    })

    if (response.error) {
      setErrorMessage(response.error)
    }
  }

  return (
    <Layout seo={{...post?.seo}}>
      <Container>
        <RichText tag="h1">Login</RichText>
        {!!errorMessage && <div>{errorMessage}</div>}

        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required('Your username is required.'),
            password: Yup.string().required('Your password is required.')
          })}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true)
            await submitForm(values)
            actions.setSubmitting(false)
          }}
        >
          {({isSubmitting, isValid}) => (
            <Form id="login-form" title="Login">
              <Input
                id="username"
                label="Username"
                name="username"
                placeholder="Username"
                required
              />

              <Input
                id="password"
                label="Password"
                name="password"
                placeholder="Password"
                required
                type="password"
              />

              <button type="submit" disabled={isSubmitting || !isValid}>
                {isSubmitting ? 'Logging In' : 'Log In'}
              </button>
            </Form>
          )}
        </Formik>

        <Link href="/register">
          <a>Create an Account</a>
        </Link>
      </Container>
    </Layout>
  )
}

/**
 * Get post static props.
 *
 * @author WebDevStudios
 * @return {object} Post props.
 */
export async function getStaticProps() {
  return await getPostTypeStaticProps(null, 'login')
}
