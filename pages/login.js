import Container from '@/components/atoms/Container'
import Text from '@/components/atoms/Inputs/Text'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import Form from '@/components/molecules/Form'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import {signIn, useSession} from 'next-auth/client'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'

/**
 * Render the Login component.
 *
 * @author WebDevStudios
 * @return {Element} The Login component.
 */
export default function Login() {
  const [session] = useSession()
  const router = useRouter()

  // Redirect to Profile page if user already logged in.
  useEffect(() => {
    if (session && session.user) {
      router.push('/profile')
    }
  })

  return (
    <Layout>
      <Container>
        <RichText tag="h1">Login</RichText>
        <Form
          className="login-form"
          id="login-form"
          title="Login"
          formDefaults={{
            username: '',
            password: ''
          }}
          onSubmit={async (values, {setSubmitting}) => {
            const {username, password} = values
            signIn('wpLogin', {
              username,
              password,
              callbackUrl: '/profile'
            })

            setSubmitting(false)
          }}
        >
          <Text id="username" label="Username" isRequired type="text" />
          <Text id="password" label="Password" isRequired type="password" />
        </Form>
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
