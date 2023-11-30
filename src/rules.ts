import { h } from '@unocss/preset-mini/utils'
import { CSS_VARIABLE_PREFIX } from '@/constants'
import { handleSlide } from '@/utils'
import type { Theme } from '@unocss/preset-mini'
import type { Rule } from 'unocss'


const DEFAULT_FADE_OPACITY = '0'
const DEFAULT_ZOOM_SCALE = '0'
const DEFAULT_SPIN_DEGREE = '30deg'
export const DEFAULT_SLIDE_TRANSLATE = '100%'


const DIRECTIONS_AUTOCOMPLETE = '(t|b|l|r|top|bottom|left|right)'


const fadeRules: Rule<Theme>[] = [
  [
    /^fade-in(?:-(.+))?$/,
    ([, op]) => ({
      [`${CSS_VARIABLE_PREFIX}-enter-opacity`]: h.cssvar.percent(op || DEFAULT_FADE_OPACITY)
    }),
    { autocomplete: 'fade-(in|out)-<percent>' }
  ],
  [
    /^fade-out(?:-(.+))?$/,
    ([, op]) => ({
      [`${CSS_VARIABLE_PREFIX}-exit-opacity`]: h.cssvar.percent(op || DEFAULT_FADE_OPACITY)
    })
  ]
]


const zoomRules: Rule<Theme>[] = [
  [
    /^zoom-in(?:-(.+))?$/,
    ([, scale]) => ({
      [`${CSS_VARIABLE_PREFIX}-enter-scale`]: h.cssvar.fraction.percent(scale || DEFAULT_ZOOM_SCALE)
    }),
    { autocomplete: 'zoom-(in|out)-<percent>' }
  ],
  [
    /^zoom-out(?:-(.+))?$/,
    ([, scale]) => ({
      [`${CSS_VARIABLE_PREFIX}-exit-scale`]: h.cssvar.fraction.percent(scale || DEFAULT_ZOOM_SCALE)
    })
  ]
]


const spinRules: Rule<Theme>[] = [
  [
    /^spin-in(?:-(.+))?$/,
    ([, deg]) => ({
      [`${CSS_VARIABLE_PREFIX}-enter-rotate`]: h.cssvar.degree(deg || DEFAULT_SPIN_DEGREE)
    }),
    { autocomplete: 'spin-(in|out)-<percent>' }
  ],
  [
    /^spin-out(?:-(.+))?$/, ([, deg]) => ({
      [`${CSS_VARIABLE_PREFIX}-exit-rotate`]: h.cssvar.degree(deg || DEFAULT_SPIN_DEGREE)
    })
  ]
]


const slideRules: Rule<Theme>[] = [
  [
    /^slide-in(?:-from)?-(t|b|l|r|top|bottom|left|right)(?:-(.+))?$/,
    ([, dir, val]) => {
      const [value, direction] = handleSlide(val, dir)

      if (!value)
        return

      switch (direction) {
        case 'top':
        case 'bottom':
          return { [`${CSS_VARIABLE_PREFIX}-enter-translate-y`]: value }
        case 'left':
        case 'right':
          return { [`${CSS_VARIABLE_PREFIX}-enter-translate-x`]: value }
        default:
          return
      }
    },
    {
      autocomplete: [
        `slide-(in|out)-${DIRECTIONS_AUTOCOMPLETE}-<percent>`,
        `slide-(in|out)-${DIRECTIONS_AUTOCOMPLETE}-full`,
        `slide-in-from-${DIRECTIONS_AUTOCOMPLETE}-<percent>`,
        `slide-in-from-${DIRECTIONS_AUTOCOMPLETE}-full`
      ]
    }
  ],

  [
    /^slide-out(?:-to)?-(t|b|l|r|top|bottom|left|right)(?:-(.+))?$/,
    ([, dir, val]) => {
      const [value, direction] = handleSlide(val, dir)

      if (!value)
        return

      switch (direction) {
        case 'top':
        case 'bottom':
          return { [`${CSS_VARIABLE_PREFIX}-exit-translate-y`]: value }
        case 'left':
        case 'right':
          return { [`${CSS_VARIABLE_PREFIX}-exit-translate-x`]: value }
        default:
          return
      }
    },
    {
      autocomplete: [
        `slide-out-to-${DIRECTIONS_AUTOCOMPLETE}-<percent>`,
        `slide-out-to-${DIRECTIONS_AUTOCOMPLETE}-full`
      ]
    }
  ]
]


export const rules: Rule<Theme>[] = [
  ...fadeRules,
  ...zoomRules,
  ...spinRules,
  ...slideRules
]
