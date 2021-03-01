import Container from '@/components/atoms/Container'
import Text from '@/components/atoms/Inputs/Text'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import Form from '@/components/molecules/Form'
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

/**
 * Register Component
 */
export default function Register() {
  const [session] = useSession()
  const router = useRouter()
  // Redirect to '/profile' if already auth
  useEffect(() => {
    if (session && session.user) {
      router.push('/profile')
    }
  })

  return (
    <Layout>
      <Container>
        <RichText tag="h1">Register</RichText>
        <Form
          className="registration-form"
          id="registration-form"
          title="Register"
          onSubmit={async (values, {setSubmitting}) => {
            const {firstName, lastName, email, password, username} = values
            signIn('wpRegister', {
              firstName,
              lastName,
              email,
              password,
              username,
              callbackUrl: '/profile'
            })

            setSubmitting(false)
          }}
        >
          <Text id="firstName" label="First Name" isRequired type="text" />
          <Text id="lastName" label="Last Name" isRequired type="text" />
          <Text id="email" label="Email" isRequired type="email" />
          <Text id="username" label="username" isRequired type="text" />
          <Text id="password" label="password" isRequired type="password" />
        </Form>
      </Container>
    </Layout>
  )
}
