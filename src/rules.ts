import { h } from '@unocss/preset-mini/utils'
import { CSS_VARIABLE_PREFIX } from './constants'
import type { Theme } from '@unocss/preset-mini'
import type { Rule } from 'unocss'


const DEFAULT_FADE_OPACITY = '0'
const DEFAULT_ZOOM_SCALE = '0'
const DEFAULT_SPIN_DEGREE = '30'
const DEFAULT_SLIDE_TRANSLATE = '100%'


const fadeRules: Rule<Theme>[] = [
  [
    /^fade-in(?:-(.+))?$/,
    ([, op]) => ({
      [`${CSS_VARIABLE_PREFIX}-enter-opacity`]: h.bracket.cssvar.percent(op || DEFAULT_FADE_OPACITY)
    }),
    { autocomplete: 'fade-(in|out)-<percent>' }
  ],
  [
    /^fade-out(?:-(.+))?$/,
    ([, op]) => ({
      [`${CSS_VARIABLE_PREFIX}-exit-opacity`]: h.bracket.cssvar.percent(op || DEFAULT_FADE_OPACITY)
    })
  ]
]


const zoomRules: Rule<Theme>[] = [
  [
    /^zoom-in(?:-(.+))?$/,
    ([, scale]) => ({
      [`${CSS_VARIABLE_PREFIX}-enter-scale`]: h.bracket.cssvar.fraction.percent(scale || DEFAULT_ZOOM_SCALE)
    }),
    { autocomplete: 'zoom-(in|out)-<percent>' }
  ],
  [
    /^zoom-out(?:-(.+))?$/,
    ([, scale]) => ({
      [`${CSS_VARIABLE_PREFIX}-exit-scale`]: h.bracket.cssvar.fraction.percent(scale || DEFAULT_ZOOM_SCALE)
    })
  ]
]


const spinRules: Rule<Theme>[] = [
  [
    /^spin-in(?:-(.+))?$/,
    ([, deg]) => ({
      [`${CSS_VARIABLE_PREFIX}-enter-rotate`]: h.bracket.cssvar.degree(deg || DEFAULT_SPIN_DEGREE)
    }),
    { autocomplete: 'spin-(in|out)-<percent>' }
  ],
  [
    /^spin-out(?:-(.+))?$/, ([, deg]) => ({
      [`${CSS_VARIABLE_PREFIX}-exit-rotate`]: h.bracket.cssvar.degree(deg || DEFAULT_SPIN_DEGREE)
    })
  ]
]


const slideRules: Rule<Theme>[] = [
  [
    /^slide-in-from-(top|bottom|left|right)(?:-(.+))?$/,
    ([, dir, val]) => {
      const value = h.bracket.cssvar.fraction.rem(val || DEFAULT_SLIDE_TRANSLATE)

      if (!value)
        return

      switch (dir) {
        case 'top':
          return { [`${CSS_VARIABLE_PREFIX}-enter-translate-y`]: `-${value}` }
        case 'bottom':
          return { [`${CSS_VARIABLE_PREFIX}-enter-translate-y`]: value }
        case 'left':
          return { [`${CSS_VARIABLE_PREFIX}-enter-translate-x`]: `-${value}` }
        case 'right':
          return { [`${CSS_VARIABLE_PREFIX}-enter-translate-x`]: value }
        default:
          return
      }
    },
    {
      autocomplete: [
        'slide-in-(from|to)-(top|bottom|left|right)-<percent>',
        'slide-in-(from|to)-(top|bottom|left|right)-full'
      ]
    }
  ],

  [
    /^slide-out-to-(top|bottom|left|right)(?:-(.+))?$/,
    ([, dir, val]) => {
      const value = h.bracket.cssvar.fraction.rem(val || DEFAULT_SLIDE_TRANSLATE)

      if (!value)
        return

      switch (dir) {
        case 'top':
          return { [`${CSS_VARIABLE_PREFIX}-exit-translate-y`]: `-${value}` }
        case 'bottom':
          return { [`${CSS_VARIABLE_PREFIX}-exit-translate-y`]: value }
        case 'left':
          return { [`${CSS_VARIABLE_PREFIX}-exit-translate-x`]: `-${value}` }
        case 'right':
          return { [`${CSS_VARIABLE_PREFIX}-exit-translate-x`]: value }
        default:
          return
      }
    }
  ]
]


export const rules: Rule<Theme>[] = [
  ...fadeRules,
  ...zoomRules,
  ...spinRules,
  ...slideRules
]
