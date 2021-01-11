import {gql} from '@apollo/client'
import {initializeWpApollo} from '../connector'

export default async function getMenus() {
  const menus = gql`
    query menuQuery {
      menus {
        edges {
          node {
            menuId
            slug
            menuItems {
              edges {
                node {
                  id
                  label
                  path
                  target
                  title
                }
              }
            }
          }
        }
      }
    }
  `

  console.log(menus)
  const apolloClient = initializeWpApollo()
  const posts = await apolloClient.query({menus})
  console.log(posts)
  //const theMenus = data?.menus?.edges || {}

  return {posts}
}
