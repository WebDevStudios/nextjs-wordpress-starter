import Container from '@/components/atoms/Container'
import Input from '@/components/atoms/Input'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import {Form, Formik} from 'formik'
import {signIn, useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'

/**
 * Render the Register component.
 *
 * @author WebDevStudios
 * @param  {object}  props      The component attributes as props.
 * @param  {object}  props.post Post data from WordPress.
 * @return {Element}            The Register component.
 */
export default function Register({post}) {
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
   * Submit registration form.
   *
   * @author WebDevStudios
   * @param {object} values Field values to submit.
   */
  async function submitForm(values) {
    const {firstName, lastName, email, password, username} = values
    const response = await signIn('wpRegister', {
      firstName,
      lastName,
      email,
      password,
      username,
      redirect: false
    })

    if (response.error) {
      setErrorMessage(response.error)
    }
  }

  return (
    <Layout seo={{...post?.seo}}>
      <Container>
        <RichText tag="h1">Register</RichText>
        {!!errorMessage && <div>{errorMessage}</div>}

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            username: ''
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required('Your first name is required.'),
            lastName: Yup.string().required('Your last name is required.'),
            email: Yup.string().required('Your email is required.'),
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
            <Form id="registration-form" title="Register">
              <Input
                id="firstName"
                label="First Name"
                name="firstName"
                placeholder="First Name"
                required
              />

              <Input
                id="lastName"
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
                required
              />

              <Input
                id="email"
                label="Email"
                name="email"
                placeholder="Email"
                required
                type="email"
              />

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
                {isSubmitting ? 'Registering' : 'Register'}
              </button>
            </Form>
          )}
        </Formik>
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
  return await getPostTypeStaticProps(null, 'register')
}
