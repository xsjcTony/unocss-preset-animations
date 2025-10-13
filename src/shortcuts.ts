import type { PresetAnimationsOptions } from '@/index'
import type { Theme } from '@unocss/preset-mini'
import type { CSSObject, UserShortcuts } from 'unocss'
import { CSS_VARIABLE_PREFIX, ENTER_ANIMATION_NAME, EXIT_ANIMATION_NAME } from '@/constants'


export function shortcuts(options: PresetAnimationsOptions): UserShortcuts<Theme> {
  const { unit = 'ms' } = options


  const getSharedAnimationProperties = (theme: Theme): CSSObject => ({
    // theme.duration?.DEFAULT is undefined if `presetWind4.preflights.theme.mode` is 'on-demand' by default
    // so we fallback to '150ms' if theme.duration?.DEFAULT is undefined
    'animation-duration': options.duration ? `${options.duration}${unit}` : theme.duration?.DEFAULT || '150ms',
    ...options.delay && { 'animation-delay': `${options.delay}${unit}` },
    ...options.direction && { 'animation-direction': options.direction },
    ...options.fillMode && { 'animation-fill-mode': options.fillMode },
    ...options.iterationCount && { 'animation-iteration-count': options.iterationCount },
    ...options.playState && { 'animation-play-state': options.playState },
    ...options.timingFunction && { 'animation-timing-function': options.timingFunction },
  })


  return [
    [
      /^animate-in$/,
      (_, { theme }) => [
        `keyframes-${ENTER_ANIMATION_NAME}`,
        {
          'animation-name': ENTER_ANIMATION_NAME,
          ...getSharedAnimationProperties(theme),
          [`${CSS_VARIABLE_PREFIX}-enter-opacity`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-enter-scale`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-enter-rotate`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-enter-translate-x`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-enter-translate-y`]: 'initial',
        },
      ],
      { layer: 'una-base', autocomplete: 'animate-in' },
    ],
    [
      /^animate-out$/,
      (_, { theme }) => [
        `keyframes-${EXIT_ANIMATION_NAME}`,
        {
          'animation-name': EXIT_ANIMATION_NAME,
          ...getSharedAnimationProperties(theme),
          [`${CSS_VARIABLE_PREFIX}-exit-opacity`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-exit-scale`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-exit-rotate`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-exit-translate-x`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-exit-translate-y`]: 'initial',
        },
      ],
      { layer: 'una-base', autocomplete: 'animate-out' },
    ],
  ]
}
