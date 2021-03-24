import {initializeFeApollo} from '../../connector'
import mutationLoginUserFe from './mutationLoginUserFe'

/**
 * Log user into WP via FE.
 *
 * @author WebDevStudios
 * @param {string} username Username
 * @param {string} password Password
 * @return {object}         User data or error object.
 */
export default async function loginUserFe(username, password) {
  const apolloClient = initializeFeApollo()

  return apolloClient
    .mutate({
      mutation: mutationLoginUserFe,
      variables: {
        username,
        password
      }
    })
    .then(
      (response) =>
        response?.data?.user ?? {
          error: true,
          errorMessage: `An error occurred while attempting to login.`
        }
    )
    .catch((error) => {
      return {
        error: true,
        errorMessage: error.message
      }
    })
}
