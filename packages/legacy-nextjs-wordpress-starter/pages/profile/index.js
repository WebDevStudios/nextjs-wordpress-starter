import Container from '@/components/atoms/Container'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import {signOut, useSession} from 'next-auth/client'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'

/**
 * Render the Profile component.
 *
 * @author WebDevStudios
 * @return {Element} The Profile component.
 */
export default function Profile() {
  const [session, loading] = useSession()
  const router = useRouter()

  // @TODO - Possibly create a model for User.
  let user = {
    firstName: '',
    lastName: '',
    email: '',
    username: ''
  }

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/login')
    }
  })

  // Prevent unauth flash
  if (!session) {
    return null
  }

  if (session?.user) {
    user = session.user
  }

  // Combine first, last names into full name to avoid displaying `null` on FE.
  const fullName = []
  user.firstName && fullName.push(user.firstName)
  user.lastName && fullName.push(user.lastName)

  return (
    <Layout>
      <Container>
        <RichText tag="h1">Profile</RichText>
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            <p>Name: {fullName.join(' ')}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>
              <button onClick={signOut}>Sign out</button>
            </p>
          </>
        )}
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
  return await getPostTypeStaticProps(null, 'profile')
}
