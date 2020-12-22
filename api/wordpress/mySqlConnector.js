import mysql from 'serverless-mysql'
import {getEnvVar} from '@/lib/functions'

// Define env vars.
const mySqlDatabase = getEnvVar('MYSQL_DATABASE')
const mySqlUsername = getEnvVar('MYSQL_USERNAME')
const mySqlPassword = getEnvVar('MYSQL_PASSWORD')

// Set connection parameters.
const db = mysql({
  config: {
    database: mySqlDatabase,
    user: mySqlUsername,
    password: mySqlPassword,
    socketPath:
      'development' === process.env.VERCEL_ENV ? getEnvVar('SOCKET_PATH') : ''
  }
})

/**
 * Generic MySQL query handler.
 *
 * @param {string} query A MySQL formatted query.
 * @return {string}      Results of the query.
 */
export async function query(query) {
  try {
    const results = await db.query(query)
    await db.end()
    return JSON.stringify(results)
  } catch (e) {
    throw Error(e.message)
  }
}
