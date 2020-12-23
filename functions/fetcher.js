// Generic data fetcher.
const fetcher = (...args) => fetch(...args).then((res) => res.json()) // eslint-disable-line no-undef

export default fetcher
