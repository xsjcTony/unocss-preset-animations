import { describe, it, expect } from 'vitest'
import { CSS_VARIABLE_PREFIX } from '@/constants'
import { CSS_VARIABLES, DECIMALS_0_TO_100, INTEGERS_0_TO_100 } from '~/data'
import { uno } from '~/utils'


describe('fade animation', () => {
  describe('fade-in', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-enter-opacity" css variable and default to "0"`, async () => {
      const { css } = await uno.generate('fade-in')

      expect(css).toContain(`.fade-in{${CSS_VARIABLE_PREFIX}-enter-opacity:0;}`)
    })


    describe('percentage', () => {
      it(`should covert percentages from "0" to "100"`, async () => {
        const classnames = INTEGERS_0_TO_100.map(i => `fade-in-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .fade-in-0{--una-enter-opacity:0;}
          .fade-in-10{--una-enter-opacity:0.1;}
          .fade-in-100{--una-enter-opacity:1;}
          .fade-in-20{--una-enter-opacity:0.2;}
          .fade-in-30{--una-enter-opacity:0.3;}
          .fade-in-40{--una-enter-opacity:0.4;}
          .fade-in-50{--una-enter-opacity:0.5;}
          .fade-in-60{--una-enter-opacity:0.6;}
          .fade-in-70{--una-enter-opacity:0.7;}
          .fade-in-80{--una-enter-opacity:0.8;}
          .fade-in-90{--una-enter-opacity:0.9;}"
        `)
      })


      it(`should also convert decimals`, async () => {
        const classnames = DECIMALS_0_TO_100.map(i => `fade-in-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .fade-in-0\\.1{--una-enter-opacity:0.001;}
          .fade-in-10\\.1{--una-enter-opacity:0.101;}
          .fade-in-52\\.1{--una-enter-opacity:0.521;}
          .fade-in-66\\.66{--una-enter-opacity:0.6666;}
          .fade-in-99\\.9{--una-enter-opacity:0.999;}"
        `)
      })
    })


    describe('css variable', () => {
      it(`should handle css variables`, async () => {
        const classnames = CSS_VARIABLES.map(i => `fade-in-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .fade-in-\\$foo{--una-enter-opacity:var(--foo);}
          .fade-in-\\$foo-bar{--una-enter-opacity:var(--foo-bar);}
          .fade-in-\\$fooBar{--una-enter-opacity:var(--fooBar);}"
        `)
      })
    })
  })


  describe('fade-out', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-exit-opacity" css variable and default to "0"`, async () => {
      const { css } = await uno.generate('fade-out')

      expect(css).toContain(`.fade-out{${CSS_VARIABLE_PREFIX}-exit-opacity:0;}`)
    })


    describe('percentage', () => {
      it(`should covert percentages from "0" to "100"`, async () => {
        const classnames = INTEGERS_0_TO_100.map(i => `fade-out-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .fade-out-0{--una-exit-opacity:0;}
          .fade-out-10{--una-exit-opacity:0.1;}
          .fade-out-100{--una-exit-opacity:1;}
          .fade-out-20{--una-exit-opacity:0.2;}
          .fade-out-30{--una-exit-opacity:0.3;}
          .fade-out-40{--una-exit-opacity:0.4;}
          .fade-out-50{--una-exit-opacity:0.5;}
          .fade-out-60{--una-exit-opacity:0.6;}
          .fade-out-70{--una-exit-opacity:0.7;}
          .fade-out-80{--una-exit-opacity:0.8;}
          .fade-out-90{--una-exit-opacity:0.9;}"
        `)
      })


      it(`should also convert decimals`, async () => {
        const classnames = DECIMALS_0_TO_100.map(i => `fade-out-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .fade-out-0\\.1{--una-exit-opacity:0.001;}
          .fade-out-10\\.1{--una-exit-opacity:0.101;}
          .fade-out-52\\.1{--una-exit-opacity:0.521;}
          .fade-out-66\\.66{--una-exit-opacity:0.6666;}
          .fade-out-99\\.9{--una-exit-opacity:0.999;}"
        `)
      })
    })


    describe('css variable', () => {
      it(`should handle css variables`, async () => {
        const classnames = CSS_VARIABLES.map(i => `fade-out-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .fade-out-\\$foo{--una-exit-opacity:var(--foo);}
          .fade-out-\\$foo-bar{--una-exit-opacity:var(--foo-bar);}
          .fade-out-\\$fooBar{--una-exit-opacity:var(--fooBar);}"
        `)
      })
    })
  })
})
