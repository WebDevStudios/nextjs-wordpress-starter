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

// Define Gravity Form field names and unique props.
export const fieldProps = {
  AddressField: `
    addressType
    defaultCountry
    defaultProvince
    defaultState
    description
    errorMessage
    inputName
    inputs {
      id
      isHidden
      key
      label
      name
    }
    isRequired
    labelPlacement
    size
    subLabelPlacement
  `,
  CaptchaField: `
    captchaTheme
    captchaType
    errorMessage
    simpleCaptchaBackgroundColor
    simpleCaptchaFontColor
    simpleCaptchaSize
  `,
  ChainedSelectField: `
    chainedSelectsAlignment
    chainedSelectsHideInactive
    choices {
      choices {
        choices {
          choices {
            isSelected
            text
            value
          }
          isSelected
          text
          value
        }
        isSelected
        text
        value
      }
      isSelected
      text
      value
    }
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
    description
    errorMessage
    inputs {
      id
      isHidden
      key
      label
      name
    }
    isRequired
    size
  `,
  CheckboxField: `
    choices {
      isSelected
      text
      value
    }
    description
    enableChoiceValue
    enableSelectAll
    errorMessage
    inputName
    inputs {
      id
      label
      name
    }
    isRequired
    size
  `,
  DateField: `
    calendarIconType
    calendarIconUrl
    dateFormat
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    noDuplicates
    placeholder
    size
  `,
  EmailField: `
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    noDuplicates
    placeholder
    size
  `,
  FileUploadField: `
    description
    errorMessage
    inputName
    isRequired
    size
  `,
  HiddenField: `
    defaultValue
    inputName
    isRequired
    noDuplicates
    size
  `,
  HtmlField: `
    content
    inputName
  `,
  ListField: `
    addIconUrl
    allowsPrepopulate
    choices {
      text
      value
    }
    deleteIconUrl
    description
    enableColumns
    errorMessage
    inputName
    isRequired
    labelPlacement
    maxRows
    pageNumber
  `,
  MultiSelectField: `
    choices {
      isSelected
      text
      value
    }
    description
    enableChoiceValue
    enableEnhancedUI
    errorMessage
    inputName
    isRequired
    size
  `,
  NameField: `
    allowsPrepopulate
    description
    errorMessage
    inputName
    inputs {
      id
      isHidden
      key
      label
      name
    }
    isRequired
    nameFormat
    size
  `,
  NumberField: `
    allowsPrepopulate
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    noDuplicates
    numberFormat
    placeholder
    rangeMax
    rangeMin
    size
  `,
  PageField: `
    allowsPrepopulate
    displayOnly
    nextButton {
      conditionalLogic {
        actionType
        logicType
        rules {
          fieldId
          operator
          value
        }
      }
      imageUrl
      text
      type
    }
    pageNumber
    previousButton {
      conditionalLogic {
        actionType
        logicType
        rules {
          fieldId
          operator
          value
        }
      }
      imageUrl
      text
      type
    }
  `,
  PasswordField: `
    allowsPrepopulate
    choices
    description
    errorMessage
    inputs {
      customLabel
      id
      label
      placeholder
    }
    isRequired
    minPasswordStrength
    passwordStrengthEnabled
    placeholder
  `,
  PhoneField: `
    allowsPrepopulate
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    noDuplicates
    phoneFormat
    placeholder
    size
  `,
  PostCategoryField: `
    allowsPrepopulate
    choices {
      isSelected
      text
      value
    }
    description
    displayAllCategories
    errorMessage
    inputName
    isRequired
    size
  `,
  PostContentField: `
    allowsPrepopulate
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    placeholder
    size
  `,
  PostCustomField: `
    allowsPrepopulate
    defaultValue
    description
    errorMessage
    inputName
    inputType
    isRequired
    noDuplicates
    placeholder
    postCustomFieldName
    size
  `,
  PostExcerptField: `
    allowsPrepopulate
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    placeholder
    size
  `,
  PostImageField: `
    allowsPrepopulate
    description
    displayCaption
    displayDescription
    displayTitle
    errorMessage
    inputName
    isRequired
    size
  `,
  PostTagsField: `
    allowsPrepopulate
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    placeholder
    size
  `,
  PostTitleField: `
    allowsPrepopulate
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    placeholder
    size
  `,
  RadioField: `
    allowsPrepopulate
    choices {
      isSelected
      text
      value
    }
    description
    enableChoiceValue
    enableOtherChoice
    errorMessage
    inputName
    isRequired
    noDuplicates
    size
  `,
  SectionField: `
    allowsPrepopulate
    description
  `,
  SignatureField: `
    allowsPrepopulate
    backgroundColor
    borderColor
    borderStyle
    borderWidth
    boxWidth
    description
    errorMessage
    isRequired
    penColor
    penSize
  `,
  SelectField: `
    allowsPrepopulate
    choices {
      isSelected
      text
      value
    }
    description
    enableChoiceValue
    enableEnhancedUI
    errorMessage
    inputName
    isRequired
    noDuplicates
    placeholder
    size
  `,
  TextAreaField: `
    allowsPrepopulate
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    maxLength
    noDuplicates
    placeholder
    size
  `,
  TextField: `
    allowsPrepopulate
    defaultValue
    description
    enablePasswordInput
    errorMessage
    inputName
    isRequired
    maxLength
    noDuplicates
    placeholder
    size
  `,
  TimeField: `
    allowsPrepopulate
    description
    errorMessage
    inputName
    isRequired
    noDuplicates
    size
  `,
  WebsiteField: `
    allowsPrepopulate
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    noDuplicates
    placeholder
    size
  `
}
