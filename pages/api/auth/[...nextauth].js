import loginUser from '@/api/frontend/wp/user/loginUser'
import registerUser from '@/api/frontend/wp/user/registerUser'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const userFields = [
  'accessToken',
  'userId',
  'username',
  'firstName',
  'lastName',
  'email'
]

/**
 * Populate `obj` with new data from `source`.
 *
 * This function gets the `source`.[ userField ] and add this to the
 * `newObj`.
 *
 * @param {object} obj    Original object
 * @param {object} source Source object where new data is present
 * @return {object} A new object containing the original data + new data
 */
function populateObj(obj, source) {
  let newObj = {...obj}
  for (let field in source) {
    if (!userFields.includes(field)) {
      continue
    }

    newObj[field] = source[field]
  }

  return newObj
}

/**
 * Returns a user object mapped from `response` received from WP GraphQL
 * on user login or registration.
 *
 * @param {object} response Response from WP GraphQL
 * @return {object} User object
 */
function createUserObj(response) {
  return {
    userId: response.databaseId,
    username: response.username,
    accessToken: response.jwtAuthToken,
    firstName: response.firstName,
    lastName: response.lastName,
    email: response.email
  }
}

const providers = [
  Providers.Credentials({
    id: 'wpLogin',
    name: 'Login',
    credentials: {
      username: {
        label: 'Username',
        type: 'text'
      },
      password: {
        label: 'Password',
        type: 'password'
      }
    },
    async authorize(credentials) {
      const {username, password} = credentials
      const response = await loginUser(username, password)

      if (response.error) {
        throw `/login?error=${response.errorMessage}`
      }

      return createUserObj(response)
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
      const {firstName, lastName, email, password, username} = credentials
      const response = await registerUser(email, password, username, {
        firstName,
        lastName
      })

      if (response.error) {
        throw `/register?error=${response.errorMessage}`
      }

      return createUserObj(response)
    }
  })
]

const pages = {
  signIn: '/register'
}

const session = {
  jwt: true
}

const jwt = {
  secret: process.env.JWT_SECRET_KEY
}

const callbacks = {
  async session(session, token) {
    session.user = populateObj(session.user, token)

    return session
  },
  async jwt(token, user) {
    return populateObj(token, user)
  },
  async redirect(url) {
    return url
  }
}

const options = {
  providers,
  pages,
  session,
  jwt,
  callbacks
}

export default (req, res) => {
  console.log( 'next auth' )
  console.log( 'req', req )
  console.log( 'res', res )
  return NextAuth(req, res, options)
}
