import loginUser from '@/functions/wordpress/auth/loginUser'
import refreshAuthToken from '@/functions/wordpress/auth/refreshAuthToken'
import registerUser from '@/functions/wordpress/auth/registerUser'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const userFields = [
  'accessToken',
  'userId',
  'username',
  'firstName',
  'lastName',
  'email',
  'token_exp',
  'refresh_token'
]

/**
 * Populate `obj` with new data from `source`.
 *
 * This function gets the `source`.[ userField ] and add this to the
 * `newObj`.
 *
 * @author WebDevStudios
 * @param {object} obj    Original object.
 * @param {object} source Source object where new data is present.
 * @return {object}       A new object containing the original data + new data.
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
 * @author WebDevStudios
 * @param {object} response Response from WP GraphQL.
 * @return {object}         User object.
 */
function createUserObj(response) {
  return {
    userId: response.databaseId,
    username: response.username,
    accessToken: response.jwtAuthToken,
    firstName: response.firstName,
    lastName: response.lastName,
    email: response.email,
    token_exp: response.jwtAuthExpiration,
    refresh_token: response.jwtRefreshToken
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
  async jwt(token, user) {
    const token_exp = parseInt(token?.token_exp, 10)

    // Get seconds elapsed.
    const date_now = Date.now() / 1000

    if (Number.isInteger(token_exp) && date_now > token_exp) {
      const refreshToken = token?.refresh_token

      if (!refreshToken) {
        return {}
      }

      // Attempt to get a new token using refresh token.
      const new_auth_token = await refreshAuthToken(refreshToken)

      // Possibly return to login?
      if (new_auth_token.error) {
        return {}
      }

      // Update the access token in session.
      token.accessToken = new_auth_token
    }

    return populateObj(token, user)
  },
  async session(session, token) {
    session.user = populateObj(session.user, token)

    return session
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
  return NextAuth(req, res, options)
}
