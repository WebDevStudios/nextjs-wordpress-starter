import { initializeWpApollo } from '@/api/wordpress/connector';
import mutationRegisterUser from './mutationRegisterUser';

/**
 * Register a user in WP
 *
 * @author WebDevStudios
 * @param {string} email    Email address
 * @param {string} password Password
 * @param {string} username Username
 * @return {object}         Comment data or error object.
 */
export default async function registerUser(
    email,
    password,
    username
) {
    const apolloClient = initializeWpApollo()

    return apolloClient
        .mutate({
            mutation: mutationRegisterUser,
            variables: {
                email,
                password,
                username
            }
        })
        .then(
            (response) => response?.data?.registerUser?.user ?? {
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
