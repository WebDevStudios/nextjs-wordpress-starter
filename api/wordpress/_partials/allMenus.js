// Query partial: retrieve all menus.
const allMenus = `
  menus {
    nodes {
      locations
      menuItems {
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
  }
`

export default allMenus
