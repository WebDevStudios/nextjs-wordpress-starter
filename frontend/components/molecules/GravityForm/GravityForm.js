import Input from '@/components/atoms/Input'
import processGfFormSubmission from '@/functions/next-api/wordpress/gravityForms/processGfFormSubmission'
import getGfFormDefaults from '@/functions/wordpress/gravityForms/getGfFormDefaults'
import getGfFormValidationSchema from '@/functions/wordpress/gravityForms/getGfFormValidationSchema'
import cn from 'classnames'
import {Form, Formik} from 'formik'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import styles from './GravityForm.module.css'

/**
 * Render the GravityForm component.
 *
 * @param  {object}  props                      The GravityForm block attributes as props.
 * @param  {object}  props.formData             GravityForm form data.
 * @param  {string}  props.formData.cssClass    GravityForm form classname.
 * @param  {string}  props.formData.description GravityForm form description.
 * @param  {object}  props.formData.formFields  GravityForm form fields.
 * @param  {number}  props.formData.formId      GravityForm form id.
 * @param  {string}  props.formData.title       GravityForm form title.
 * @return {Element}                            The GravityForm component.
 */
export default function GravityForm({
  formData: {cssClass, description, formFields, formId, title}
}) {
  // Setup initial values and validation based on GravityForm field data.
  const fields = formFields?.edges
  const formValidationSchema = getGfFormValidationSchema(fields)
  const initialValues = getGfFormDefaults(fields)

  const [message, setMessage] = useState('')

  /**
   * Handle form submission.
   *
   * @author WebDevStudios
   * @param {object} values Form values.
   */
  async function handleFormSubmission(values) {
    const response = await processGfFormSubmission(formId, values, formFields)

    if (response?.error) {
      setMessage(response.errorMessage)
      return
    }

    setMessage(response.confirmationMessage)
  }

  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true)
          handleFormSubmission(values)
          actions.resetForm()
          actions.setSubmitting(false)
        }}
        validationSchema={formValidationSchema}
      >
        {({isSubmitting, isValid}) => (
          <Form
            className={cn(styles.gravityForm, cssClass)}
            id={formId && `gform-${formId}`}
          >
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p>{description}</p>}

            {!!fields?.length &&
              fields.map((field) => {
                if (!field?.node?.type) {
                  return null
                }

                const id = `field-${field.node.id}`

                let type = ''

                // Determine type of input.
                switch (field.node.type) {
                  case 'fileupload':
                    type = 'file'
                    break

                  case 'select':
                  case 'textarea':
                    type = 'text'
                    break

                  default:
                    type = field.node.type
                    break
                }

                // Reformat field props.
                const fieldProps = {
                  as: ['select', 'textarea'].includes(field.node.type)
                    ? field.node.type
                    : 'input',
                  className: field.node?.cssClass || '',
                  id,
                  label: field.node?.label || '',
                  name: id,
                  placeholder: field.node?.placeholder || '',
                  required: !!field.node?.isRequired,
                  type
                }

                // Handle select field separately due to children prop.
                if (field.node.type === 'select') {
                  if (!field.node?.selectChoices?.length) {
                    return
                  }

                  // Determine selected option.
                  const selected = field.node.selectChoices.filter(
                    (choice) => choice?.isSelected
                  )

                  return (
                    <Input
                      key={id}
                      {...fieldProps}
                      value={selected?.[0]?.value ?? undefined}
                    >
                      <>
                        {field.node.selectChoices.map((choice, index) => (
                          <option key={index} value={choice?.value || ''}>
                            {choice?.text || ''}
                          </option>
                        ))}
                      </>
                    </Input>
                  )
                }

                return <Input key={id} {...fieldProps} />
              })}

            <button type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? 'Submitting' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>

      {
        // If there is a message, display it.
        !!message && (
          <div
            className={styles.feedback}
            dangerouslySetInnerHTML={{__html: message}}
          />
        )
      }
    </section>
  )
}

GravityForm.propTypes = {
  formData: PropTypes.shape({
    cssClass: PropTypes.string,
    description: PropTypes.string,
    formFields: PropTypes.object,
    formId: PropTypes.number,
    title: PropTypes.string
  })
}
