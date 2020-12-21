import React from 'react'
import {Info, Warning} from './Alerts'

/**
 * The following is a story.
 *
 * It follows the "Component Story Format" (CSF), an open standard
 * based on ES6 modules which is portable beyond Storybook. This is
 * version 2 of that standard and uses args.
 *
 * @see https://storybook.js.org/docs/react/api/csf
 * @see https://storybook.js.org/docs/react/writing-stories/introduction
 * @see https://medium.com/storybookjs/introducing-storybook-args-2dadcdb777cc
 */

export default {
  title: 'Design System/Molecules/Alerts',
  component: Info
}

const InfoTemplate = (args) => <Info>{args.children}</Info>
const WarningTemplate = (args) => <Warning>{args.children}</Warning>

export const AlertInfo = InfoTemplate.bind({})
export const EmptyInfo = InfoTemplate.bind({})

export const AlertWarning = WarningTemplate.bind({})
export const EmptyWarning = WarningTemplate.bind({})

AlertInfo.args = {
  children: 'This is an informational alert.'
}

AlertWarning.args = {
  children: 'Something has happened that needs your attention.'
}

EmptyInfo.args = {
  children: ''
}

EmptyWarning.args = {
  children: ''
}
