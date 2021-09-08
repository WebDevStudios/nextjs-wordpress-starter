import {gql} from '@apollo/client'

// Fragment: retrieve single menu fields.
export const singleMenuFragment = gql`
  fragment SingleMenuFields on Menu {
    locations
    menuItems(first: 100) {
      nodes {
        id
        parentId
        label
        path
        target
        title
      }
    }
  }
`
