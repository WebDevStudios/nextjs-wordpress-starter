import RegisterUser from '@/api/frontend/wp/user/registerUser'
import Container from '@/components/atoms/Container'
import Text from '@/components/atoms/Inputs/Text'
import Layout from '@/components/common/Layout'
import Form from '@/components/molecules/Form'
import React, {useState} from 'react'

/**
 *
 */
export default function Register() {
  const [message, setMessage] = useState('')
  return (
    <Layout>
      <Container>
        <Form
          className="registration-form"
          id="registration-form"
          title="Register"
          onSubmit={async (values, {setSubmitting}) => {
            const {email, username, password} = values
            const response = await RegisterUser(email, password, username)

            // console.log(response);

            if (response.error) {
              setMessage(response.errorMessage)
              setSubmitting(false)
              return
            }

            if (response.username) {
              setMessage('Successfully registered.')
            }

            setSubmitting(false)
          }}
        >
          {!!message && <div>{message}</div>}
          <Text id="email" label="Email" isRequired type="email" />
          <Text id="username" label="username" isRequired type="text" />
          <Text id="password" label="password" isRequired type="password" />
        </Form>
      </Container>
    </Layout>
  )
}
