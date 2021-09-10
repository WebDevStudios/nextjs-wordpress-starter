// Query partial: retrieve all menus.
const allMenus = `
  menus {
    nodes {
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
  }
`

export default allMenus
