import PropTypes from 'prop-types'
import Form from '@/components/molecules/Form'
import Fields from './Fields'

export default function GravityForm({formData}) {
  const fieldData = formData?.fields?.edges

  return <Form>{fieldData && <Fields fields={fieldData} />}</Form>
}

GravityForm.propTypes = {
  formData: PropTypes.object
}
