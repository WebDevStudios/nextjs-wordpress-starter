import loginUser from '@/lib/wordpress/users/loginUser'

/**
 * Log user into WP.
 *
 * @author WebDevStudios
 * @param {object} req Instance of http.IncomingMessage.
 * @param {object} res Instance of http.ServerResponse.
 */
export default async function login(req, res) {
  try {
    // Retrieve props from request query params.
    const {username, password} = req.query

    const userData = await loginUser(username, password)

    // Check for errors.
    if (userData.error) {
      throw new Error(userData.errorMessage)
    }

    // Remove Apollo client from return.
    delete userData?.apolloClient

    res.status(200).send(userData)
  } catch (error) {
    res
      .status(error?.status || 500)
      .end(
        error?.message || 'An error occurred while attempted to load more posts'
      )
  }
}
