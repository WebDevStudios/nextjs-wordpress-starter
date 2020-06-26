const API_URL = process.env.WORDPRESS_API_URL

/**
 * Primary data fetcher.
 *
 * @param {string} query     The query to pass onto the API.
 * @param {object} variables Any necessary API variables.
 * @return {object}          The API reponse in JSON.
 */
export async function fetchAPI(query, {variables} = {}) {
  // Set default headers.
  const headers = {'Content-Type': 'application/json'}

  // If we're in preview mdoe, grab the refresh token
  // and append it to the default headers.
  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // Fetch data from API endpoint.
  // eslint-disable-next-line no-undef
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  })

  // Set our response to JSON.
  const json = await res.json()

  // Errors? Bail...
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}
