import { CSS_VARIABLE_PREFIX, ENTER_ANIMATION_NAME, EXIT_ANIMATION_NAME } from '@/constants'
import type { Theme } from '@unocss/preset-mini'
import type { UserShortcuts } from 'unocss'


export const shortcuts: UserShortcuts<Theme> = [
  [
    /^animate-in$/,
    (_, { theme }) => [
      `keyframes-${ENTER_ANIMATION_NAME}`,
      {
        'animation-name': ENTER_ANIMATION_NAME,
        'animation-duration': theme.duration?.DEFAULT,
        [`${CSS_VARIABLE_PREFIX}-enter-opacity`]: 'initial',
        [`${CSS_VARIABLE_PREFIX}-enter-scale`]: 'initial',
        [`${CSS_VARIABLE_PREFIX}-enter-rotate`]: 'initial',
        [`${CSS_VARIABLE_PREFIX}-enter-translate-x`]: 'initial',
        [`${CSS_VARIABLE_PREFIX}-enter-translate-y`]: 'initial'
      }
    ],
    { autocomplete: 'animate-in' }
  ],
  [
    /^animate-out$/,
    (_, { theme }) => [
      `keyframes-${EXIT_ANIMATION_NAME}`,
      {
        'animation-name': EXIT_ANIMATION_NAME,
        'animation-duration': theme.duration?.DEFAULT,
        [`${CSS_VARIABLE_PREFIX}-exit-opacity`]: 'initial',
        [`${CSS_VARIABLE_PREFIX}-exit-scale`]: 'initial',
        [`${CSS_VARIABLE_PREFIX}-exit-rotate`]: 'initial',
        [`${CSS_VARIABLE_PREFIX}-exit-translate-x`]: 'initial',
        [`${CSS_VARIABLE_PREFIX}-exit-translate-y`]: 'initial'
      }
    ],
    { autocomplete: 'animate-out' }
  ]
]
