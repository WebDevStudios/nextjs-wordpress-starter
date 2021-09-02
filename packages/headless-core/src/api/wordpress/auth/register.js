import {gql} from '@apollo/client'
import {initializeWpApollo} from '../client'

// Mutation: Register a user in WP.
export const mutationRegisterUser = gql`
  mutation REGISTER_USER(
    $email: String!
    $username: String!
    $password: String!
    $firstName: String
    $lastName: String
  ) {
    registerUser(
      input: {
        email: $email
        username: $username
        password: $password
        firstName: $firstName
        lastName: $lastName
        clientMutationId: "RegisterUser"
      }
    ) {
      user {
        databaseId
        username
        firstName
        lastName
        jwtAuthToken
        email
      }
    }
  }
`

/**
 * Register a user in WP.
 *
 * @author WebDevStudios
 * @param  {string} email    User email address.
 * @param  {string} password User password.
 * @param  {string} username Usernamel
 * @param  {object} data     Other user data.
 * @param  {object} client   Apollo client instance.
 * @return {object}          User data or error object.
 */
export async function registerUser(
  email,
  password,
  username,
  data,
  client = null
) {
  const apolloClient = client ?? initializeWpApollo()

  const firstName = data?.firstName ?? ''
  const lastName = data?.lastName ?? ''

  return apolloClient
    .mutate({
      mutation: mutationRegisterUser,
      variables: {
        email,
        password,
        username,
        firstName,
        lastName
      }
    })
    .then(
      (response) =>
        response?.data?.registerUser?.user ?? {
          error: true,
          errorMessage: `An error occurred while trying to register a user.`
        }
    )
    .catch((error) => {
      return {
        error: true,
        errorMessage: error.message
      }
    })
}
