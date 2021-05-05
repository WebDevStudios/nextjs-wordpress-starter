// Define Gravity Form field names and unique props.
const fieldProps = {
  AddressField: `
    label
    adminLabel
    adminOnly
    addressType
    defaultCountry
    defaultProvince
    defaultState
    description
    errorMessage
    inputs {
      id
      isHidden
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
    label
    captchaTheme
    captchaType
    errorMessage
    simpleCaptchaBackgroundColor
    simpleCaptchaFontColor
    simpleCaptchaSize
  `,
  ChainedSelectField: `
    label
    adminLabel
    adminOnly
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
      label
    }
    isRequired
    size
    allowsPrepopulate
    visibility
  `,
  CheckboxField: `
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
    description
    errorMessage
    isRequired
    size
    visibility
  `,
  HiddenField: `
    label
    defaultValue
    inputName
    size
    allowsPrepopulate
  `,
  HtmlField: `
    label
    content
  `,
  ListField: `
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
    allowsPrepopulate
    description
    errorMessage
    inputs {
      id
      isHidden
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    placeholder
    size
  `,
  PostCustomField: `
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    description
  `,
  SignatureField: `
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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
    label
    adminLabel
    adminOnly
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

export default fieldProps
