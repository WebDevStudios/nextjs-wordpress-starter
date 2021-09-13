---
title: Gravity Forms
---

This document will explain how to enable Gravity Forms with the Next.js Starter.

## Backend

### WDS Headless Gravity Forms Plugin

Install the WDS Headless Gravity Forms plugin by uploading [wds-headless-gravityforms.zip](https://nextjs.wpengine.com/downloads/wds-headless-gravityforms.zip) or as a [Composer dependency](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/canary/backend/composer.json#L65).

### Enable the Gravity Forms REST API

The Gravity Forms REST API must be enabled separately from the WordPress REST API.

1. Under "Forms", click "Settings.
2. Click "REST API", then click the "Enable" checkbox

![screenshot](/img/screenshot-setup-gravity-forms.png)

### Turn off error displays

The Gravity Forms plugin will throw PHP warnings under many valid circumstances. These errors do not affect the actual submission of the form, but they will cause errors in the Javascript frontend.

1. **Turn off error displays in `php.ini`.** If you are using Local, this can be found in `conf/php/php.ini.hbs` in the site folder. Check lines 16-24 for these settings.
2. **Turn off `WP_DEBUG` if it is enabled.** This is in your `wp-config.php` file.

If you get an error involving `Access-Control-Allow-Origin` or "The string did not match the expected pattern", then this is likely the culprit.

### Ensure WordPress is accessible from the internet

The Gravity Forms submission process requires the Javascript frontend to be able to access the WordPress API directly. It will not work if WordPress is behind a firewall or otherwise restricted in access.

## Frontend

### Using Gravity Forms

To display a Gravity Form, simply use the Gravity Form block. The Next.js starter will pull the information from GraphQL and render the form.

The Gravity Form block component is a simple wrapper around the `GravityForm` component found in `components/molecules/GravityForm`. Both are designed to work with information from GraphQL.

The `GravityForm` component itself uses the `Form` component from `components/molecules/form` which uses the [Formik] library. The individual fields are rendered from components in the `Fields` folder with the components being chosen in the `Fields` component itself.

[formik]: https://formik.org/docs/overview

If a field does not have a corresponding component, a message will be displayed on the frontend. Create a new component and add it to the `Fields` component.

### Submitting a Gravity Form entry

The process required to successfully submit a Gravity Form is a little complicated due to the potential presence of a file upload field. The process works as follows:

1. User submits the form which triggers the `onSubmit` handler in `GravityForm`.
2. The component first fetches the Next.js endpoint at `/api/wp/getWPUrl` in order to get the URL of the original WordPress instance.
3. The component translates the Formik output into a [FormData] object.
4. The form is submitted as a `multipart/form-data` request to the Gravity Forms API.
5. If there is an error, it is shown to the user using the `formFeedback` state variable.
6. If the form was submitted successfully, the success message from Gravity Forms is shown. This can include rich HTML.

[formdata]: https://developer.mozilla.org/en-US/docs/Web/API/FormData

Ideally, this should just work. Check the [Backend Setup](/docs/backend/index) section first
if issues arise.
