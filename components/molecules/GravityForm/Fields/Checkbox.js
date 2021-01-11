import {Field} from 'formik'

export default function Checkbox() {
  return (
    <>
      <div id="checkbox-group">Checked</div>
      <div role="group" aria-labelledby="checkbox-group">
        <label htmlFor="One">
          <Field type="checkbox" name="checked" value="One" />
          One
        </label>
        <label htmlFor="Two">
          <Field type="checkbox" name="checked" value="Two" />
          Two
        </label>
        <label htmlFor="Three">
          <Field type="checkbox" name="checked" value="Three" />
          Three
        </label>
      </div>
    </>
  )
}
