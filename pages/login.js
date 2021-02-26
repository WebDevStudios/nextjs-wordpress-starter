import Container from '@/components/atoms/Container'
import Text from '@/components/atoms/Inputs/Text'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import Form from '@/components/molecules/Form'
import { signIn } from 'next-auth/client'
import React from 'react'

/**
 * Login Component
 */
export default function Login() {
    return (
        <Layout>
            <Container>
                <RichText tag="h1">Login</RichText>
                <Form
                    className="login-form"
                    id="login-form"
                    title="Login"
                    onSubmit={async (values, { setSubmitting }) => {
                        const { username, password } = values
                        signIn('wpLogin', {
                            username,
                            password
                        })

                        setSubmitting(false)
                    }}
                >
                    <Text id="username" label="Username" isRequired type="text" />
                    <Text id="password" label="Password" isRequired type="password" />
                </Form>
            </Container>
        </Layout>
    )
}
