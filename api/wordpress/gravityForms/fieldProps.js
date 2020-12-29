// Define Gravity Form global field props.
export const globalFieldProps = `
  id
  adminLabel
  adminOnly
  allowsPrepopulate
  conditionalLogic {
    rules {
      fieldId
      operator
      value
    }
    actionType
    logicType
  }
  cssClassList
  label
  type
  visibility
`
