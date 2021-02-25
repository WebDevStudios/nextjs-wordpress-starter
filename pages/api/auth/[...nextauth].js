import registerUser from '@/api/frontend/wp/user/registerUser'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const userFields = ["accessToken", "userId", "username", "firstName", "lastName", "email"]

/**
 * Populate `obj` with new data from `source`.
 * 
 * This function gets the `source`.[ userField ] and add this to the
 * `newObj`.
 * 
 * @param {object} obj    Original object 
 * @param {object} source Source object where new data is present
 * @returns {object} A new object containing the original data + new data
 */
function populateObj(obj, source) {
  let newObj = { ...obj }
  for (let field in source) {
    if (!userFields.includes(field)) {
      continue;
    }

    newObj[field] = source[field]
  }

  return newObj
}

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
        const { firstName, lastName, email, password, username } = credentials
        const response = await registerUser(
          email,
          password,
          username,
          {
            firstName,
            lastName
          }
        )

        if (response.error) {
          throw `/register?error=${response.errorMessage}`
        }

        return {
          userId: response.databaseId,
          username: response.username,
          accessToken: response.jwtAuthToken,
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email
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
      session.user = populateObj(session.user, token)

      return session
    },
    async jwt(token, user) {
      return populateObj(token, user)
    }
  }
})
