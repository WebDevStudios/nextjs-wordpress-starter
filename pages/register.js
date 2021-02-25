import Container from '@/components/atoms/Container'
import Text from '@/components/atoms/Inputs/Text'
import Layout from '@/components/common/Layout'
import Form from '@/components/molecules/Form'
import { csrfToken, signIn } from 'next-auth/client'
import React from 'react'

/**
 * Register Component
 */
export default function Register() {
  return (
    <Layout>
      <Container>
        <Form
          className="registration-form"
          id="registration-form"
          title="Register"
          onSubmit={async (values, { setSubmitting }) => {
            const { email, password, username } = values
            signIn('wpRegister', { email, password, username })
            // console.log(values);
            // const response = await fetch('/api/auth/callback/credentials', {
            //   method: 'POST',
            //   body: JSON.stringify({
            //     email,
            //     password,
            //     credType: "register",
            //     csrfToken
            //   })
            // })

            // console.log(response);
            // const response = await RegisterUser(email, password, username)

            // console.log(response);

            // if (response.error) {
            //   setMessage(response.errorMessage)
            //   setSubmitting(false)
            //   return
            // }

            // if (response.username) {
            //   setMessage('Successfully registered.')
            // }

            setSubmitting(false)
          }}
        >
          <Text id="email" label="Email" isRequired type="email" />
          <Text id="username" label="username" isRequired type="text" />
          <Text id="password" label="password" isRequired type="password" />
        </Form>
      </Container>
    </Layout>
  )
}

Register.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}
