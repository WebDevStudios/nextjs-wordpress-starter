// Define Gravity Form global field props.
export const globalFieldProps = `
  id
  adminLabel
  adminOnly
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
    allowsPrepopulate
    visibility
  `,
  CaptchaField: `
    captchaTheme
    captchaType
    errorMessage
    simpleCaptchaBackgroundColor
    simpleCaptchaFontColor
    simpleCaptchaSize
    allowsPrepopulate
    visibility
  `,
  ChainedSelectField: `
    chainedSelectsAlignment
    chainedSelectsHideInactive
    chainedSelectChoices: choices {
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
    allowsPrepopulate
    visibility
  `,
  CheckboxField: `
    checkboxChoices: choices {
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
  `,
  FileUploadField: `
    description
    errorMessage
    inputName
    isRequired
    size
    allowsPrepopulate
    visibility
  `,
  HiddenField: `
    defaultValue
    inputName
    isRequired
    noDuplicates
    size
    allowsPrepopulate
    visibility
  `,
  HtmlField: `
    content
    inputName
    allowsPrepopulate
    visibility
  `,
  ListField: `
    addIconUrl
    allowsPrepopulate
    listChoices: choices {
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
    allowsPrepopulate
    visibility
  `,
  MultiSelectField: `
    multiSelectChoices: choices {
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
  `,
  PasswordField: `
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
    allowsPrepopulate
    visibility
  `,
  PostCategoryField: `
    allowsPrepopulate
    postCategoryChoices: choices {
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
    allowsPrepopulate
    visibility
  `,
  PostContentField: `
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
  `,
  RadioField: `
    allowsPrepopulate
    radioChoices: choices {
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
    allowsPrepopulate
    visibility
  `,
  SectionField: `
    allowsPrepopulate
    description
    allowsPrepopulate
    visibility
  `,
  SignatureField: `
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
    selectChoices: choices {
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
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
    allowsPrepopulate
    visibility
  `,
  TimeField: `
    allowsPrepopulate
    description
    errorMessage
    inputName
    isRequired
    noDuplicates
    size
    allowsPrepopulate
    visibility
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
