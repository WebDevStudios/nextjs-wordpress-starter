// Generic data fetcher.
export default fetcher = (...args) => fetch(...args).then((res) => res.json()) // eslint-disable-line no-undef
