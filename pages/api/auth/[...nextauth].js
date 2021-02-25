import registerUser from '@/api/frontend/wp/user/registerUser'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Providers.Credentials({
      id: 'wpLogin',
      name: 'WordPress',
      credentials: {
        username: {
          label: 'Username / Email',
          type: 'text'
        },
        password: {
          label: 'Password',
          type: 'password'
        },
        credType: {
          type: 'hidden',
          value: 'login'
        }
      },
      async authorize() {
        // console.log('login authorize')
        // console.log(credentials)
        return null
      }
    }),
    Providers.Credentials({
      id: 'wpRegister',
      name: 'Register',
      credentials: {
        email: {
          label: 'Email',
          type: 'email'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize(credentials) {
        const { email, password, username } = credentials
        const response = await registerUser(email, password, username)

        if (response.error) {
          throw `/register?error=${response.errorMessage}`
        }

        return {
          id: response.databaseId,
          username: response.username,
          jwtAuthToken: response.jwtAuthToken
        }
      }
    })
  ],
  pages: {
    signIn: '/register'
  },
  session: {
    jwt: true
  },
  callbacks: {
    async session(session, token) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
      }

      if (token?.user_id) {
        session.user.user_id = token.user_id
      }

      return session
    },
    async jwt(token, user) {
      if (user?.jwtAuthToken) {
        token.accessToken = user.jwtAuthToken
      }

      if (user?.id) {
        token.user_id = user.id
      }

      if (user?.username) {
        token.name = user.username
      }

      return token
    }
  }
})
