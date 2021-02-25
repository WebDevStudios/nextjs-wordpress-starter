import { initializeWpApollo } from '@/api/wordpress/connector'
import mutationRegisterUser from './mutationRegisterUser'

/**
 * Register a user in WP
 *
 * @author WebDevStudios
 * @param {string} email    Email address
 * @param {string} password Password
 * @param {string} username Username
 * @param {object} data     Other user data
 * @return {object}         User data or error object.
 */
export default async function registerUser(email, password, username, data) {
  const apolloClient = initializeWpApollo()

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
