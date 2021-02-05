import {addons} from '@storybook/addons'
import theme from './theme'

/**
 * Configure Storybook features and behavior.
 *
 * @see https://storybook.js.org/docs/react/configure/features-and-behavior
 */
addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: theme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false
})
