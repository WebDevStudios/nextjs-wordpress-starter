import React from 'react'
import Hero from './Hero'

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
  title: 'Design System/Molecules/Hero',
  component: Hero
}

const Template = (args) => <Hero {...args} />

export const Default = Template.bind({})
export const NoBackground = Template.bind({})
export const TooMuchText = Template.bind({})

Default.args = {
  background:
    'https://images.unsplash.com/photo-1513106021000-168e5f56609d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=70',
  title: 'Next.js Starter',
  description: 'A slightly opinionated, yet bare-bones Next.js starter.'
}

NoBackground.args = {
  background: '',
  title: 'Next.js Starter',
  description: 'A slightly opinionated, yet bare-bones Next.js starter.'
}

TooMuchText.args = {
  background:
    'https://images.unsplash.com/photo-1513106021000-168e5f56609d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=70',
  title: 'Next.js Starter With Too Much Text',
  description: `Tempora aut rerum aliquam optio asperiores tempore est. Eos aut vitae eos asperiores saepe minima. Maiores consequatur ut magnam sint nobis et et.
  Cumque quia cumque in quis animi est. Distinctio perferendis id in totam. Ut itaque iure laboriosam blanditiis qui. Et voluptatem ea vero eum eius. Cum voluptas fugit autem. Et non odit modi consequatur quia.
  Quam ut alias corrupti ullam eos. Tempore eos ad eligendi non eum quibusdam itaque. Asperiores repellendus et sed laudantium molestias incidunt rerum. Officiis quibusdam sed vero provident non eos sit. Rerum ut labore quas molestias odio molestiae eveniet qui.
  Quidem voluptatibus voluptas maxime qui aut. Culpa culpa amet id doloribus recusandae. Tenetur necessitatibus est aliquid. Id enim qui est. Quo neque molestiae quam quisquam molestias.
  Nobis veritatis perferendis soluta. Sed cum quis occaecati accusamus earum corrupti neque quia. Enim provident nobis molestiae molestias exercitationem amet et. Consectetur vitae porro sed maxime ipsa eos voluptas ea. Omnis commodi voluptas accusantium magni. Voluptas dicta consectetur magni.`
}
