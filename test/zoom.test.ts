import { describe, expect, it } from 'vitest'
import { CSS_VARIABLE_PREFIX } from '@/constants'
import { CSS_VARIABLES, DECIMALS, FRACTIONS, INTEGERS } from '~/data'
import { uno } from '~/utils'


describe('zoom animation', () => {
  describe('zoom-in', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-enter-scale" css variable and default to "0"`, async () => {
      const { css } = await uno.generate('zoom-in')

      expect(css).toContain(`.zoom-in{${CSS_VARIABLE_PREFIX}-enter-scale:0;}`)
    })


    describe('percentage', () => {
      it(`should covert any percentages including negative`, async () => {
        const classnames = INTEGERS.map(i => `zoom-in-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in--10{--una-enter-scale:-0.1;}
          .zoom-in--100{--una-enter-scale:-1;}
          .zoom-in--110{--una-enter-scale:-1.1;}
          .zoom-in--120{--una-enter-scale:-1.2;}
          .zoom-in--130{--una-enter-scale:-1.3;}
          .zoom-in--140{--una-enter-scale:-1.4;}
          .zoom-in--150{--una-enter-scale:-1.5;}
          .zoom-in--160{--una-enter-scale:-1.6;}
          .zoom-in--170{--una-enter-scale:-1.7;}
          .zoom-in--180{--una-enter-scale:-1.8;}
          .zoom-in--190{--una-enter-scale:-1.9;}
          .zoom-in--20{--una-enter-scale:-0.2;}
          .zoom-in--200{--una-enter-scale:-2;}
          .zoom-in--30{--una-enter-scale:-0.3;}
          .zoom-in--40{--una-enter-scale:-0.4;}
          .zoom-in--50{--una-enter-scale:-0.5;}
          .zoom-in--60{--una-enter-scale:-0.6;}
          .zoom-in--70{--una-enter-scale:-0.7;}
          .zoom-in--80{--una-enter-scale:-0.8;}
          .zoom-in--90{--una-enter-scale:-0.9;}
          .zoom-in-0{--una-enter-scale:0;}
          .zoom-in-10{--una-enter-scale:0.1;}
          .zoom-in-100{--una-enter-scale:1;}
          .zoom-in-110{--una-enter-scale:1.1;}
          .zoom-in-120{--una-enter-scale:1.2;}
          .zoom-in-130{--una-enter-scale:1.3;}
          .zoom-in-140{--una-enter-scale:1.4;}
          .zoom-in-150{--una-enter-scale:1.5;}
          .zoom-in-160{--una-enter-scale:1.6;}
          .zoom-in-170{--una-enter-scale:1.7;}
          .zoom-in-180{--una-enter-scale:1.8;}
          .zoom-in-190{--una-enter-scale:1.9;}
          .zoom-in-20{--una-enter-scale:0.2;}
          .zoom-in-200{--una-enter-scale:2;}
          .zoom-in-30{--una-enter-scale:0.3;}
          .zoom-in-40{--una-enter-scale:0.4;}
          .zoom-in-50{--una-enter-scale:0.5;}
          .zoom-in-60{--una-enter-scale:0.6;}
          .zoom-in-70{--una-enter-scale:0.7;}
          .zoom-in-80{--una-enter-scale:0.8;}
          .zoom-in-90{--una-enter-scale:0.9;}"
        `)
      })


      it(`should also convert decimals including negative`, async () => {
        const classnames = DECIMALS.map(i => `zoom-in-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in--0\\.1{--una-enter-scale:-0.001;}
          .zoom-in--10\\.1{--una-enter-scale:-0.101;}
          .zoom-in--180\\.37{--una-enter-scale:-1.8037;}
          .zoom-in--199\\.9{--una-enter-scale:-1.999;}
          .zoom-in--52\\.1{--una-enter-scale:-0.521;}
          .zoom-in--66\\.66{--una-enter-scale:-0.6666;}
          .zoom-in-0\\.1{--una-enter-scale:0.001;}
          .zoom-in-10\\.1{--una-enter-scale:0.101;}
          .zoom-in-180\\.37{--una-enter-scale:1.8037;}
          .zoom-in-199\\.9{--una-enter-scale:1.999;}
          .zoom-in-52\\.1{--una-enter-scale:0.521;}
          .zoom-in-66\\.66{--una-enter-scale:0.6666;}
          .zoom-in-99\\.9{--una-enter-scale:0.999;}"
        `)
      })
    })


    describe('fraction', () => {
      it(`should covert any fractions including negative`, async () => {
        const classnames = FRACTIONS.map(i => `zoom-in-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in--1\\/3{--una-enter-scale:-33.3333333333%;}
          .zoom-in--1\\/4{--una-enter-scale:-25%;}
          .zoom-in--1\\/6{--una-enter-scale:-16.6666666667%;}
          .zoom-in--2\\/3{--una-enter-scale:-66.6666666667%;}
          .zoom-in--3\\/4{--una-enter-scale:-75%;}
          .zoom-in--5\\/6{--una-enter-scale:-83.3333333333%;}
          .zoom-in-1\\/3{--una-enter-scale:33.3333333333%;}
          .zoom-in-1\\/4{--una-enter-scale:25%;}
          .zoom-in-1\\/6{--una-enter-scale:16.6666666667%;}
          .zoom-in-2\\/3{--una-enter-scale:66.6666666667%;}
          .zoom-in-3\\/4{--una-enter-scale:75%;}
          .zoom-in-5\\/6{--una-enter-scale:83.3333333333%;}"
        `)
      })


      it(`should convert "full" to "100%`, async () => {
        const { css } = await uno.generate('zoom-in-full')

        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in-full{--una-enter-scale:100%;}"
        `)
      })
    })


    describe('css variable', () => {
      it(`should handle css variables`, async () => {
        const classnames = CSS_VARIABLES.map(i => `zoom-in-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in-\\$foo{--una-enter-scale:var(--foo);}
          .zoom-in-\\$foo-bar{--una-enter-scale:var(--foo-bar);}
          .zoom-in-\\$fooBar{--una-enter-scale:var(--fooBar);}"
        `)
      })
    })
  })


  describe('zoom-out', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-exit-scale" css variable and default to "0"`, async () => {
      const { css } = await uno.generate('zoom-out')

      expect(css).toContain(`.zoom-out{${CSS_VARIABLE_PREFIX}-exit-scale:0;}`)
    })


    describe('percentage', () => {
      it(`should covert any percentages including negative`, async () => {
        const classnames = INTEGERS.map(i => `zoom-out-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out--10{--una-exit-scale:-0.1;}
          .zoom-out--100{--una-exit-scale:-1;}
          .zoom-out--110{--una-exit-scale:-1.1;}
          .zoom-out--120{--una-exit-scale:-1.2;}
          .zoom-out--130{--una-exit-scale:-1.3;}
          .zoom-out--140{--una-exit-scale:-1.4;}
          .zoom-out--150{--una-exit-scale:-1.5;}
          .zoom-out--160{--una-exit-scale:-1.6;}
          .zoom-out--170{--una-exit-scale:-1.7;}
          .zoom-out--180{--una-exit-scale:-1.8;}
          .zoom-out--190{--una-exit-scale:-1.9;}
          .zoom-out--20{--una-exit-scale:-0.2;}
          .zoom-out--200{--una-exit-scale:-2;}
          .zoom-out--30{--una-exit-scale:-0.3;}
          .zoom-out--40{--una-exit-scale:-0.4;}
          .zoom-out--50{--una-exit-scale:-0.5;}
          .zoom-out--60{--una-exit-scale:-0.6;}
          .zoom-out--70{--una-exit-scale:-0.7;}
          .zoom-out--80{--una-exit-scale:-0.8;}
          .zoom-out--90{--una-exit-scale:-0.9;}
          .zoom-out-0{--una-exit-scale:0;}
          .zoom-out-10{--una-exit-scale:0.1;}
          .zoom-out-100{--una-exit-scale:1;}
          .zoom-out-110{--una-exit-scale:1.1;}
          .zoom-out-120{--una-exit-scale:1.2;}
          .zoom-out-130{--una-exit-scale:1.3;}
          .zoom-out-140{--una-exit-scale:1.4;}
          .zoom-out-150{--una-exit-scale:1.5;}
          .zoom-out-160{--una-exit-scale:1.6;}
          .zoom-out-170{--una-exit-scale:1.7;}
          .zoom-out-180{--una-exit-scale:1.8;}
          .zoom-out-190{--una-exit-scale:1.9;}
          .zoom-out-20{--una-exit-scale:0.2;}
          .zoom-out-200{--una-exit-scale:2;}
          .zoom-out-30{--una-exit-scale:0.3;}
          .zoom-out-40{--una-exit-scale:0.4;}
          .zoom-out-50{--una-exit-scale:0.5;}
          .zoom-out-60{--una-exit-scale:0.6;}
          .zoom-out-70{--una-exit-scale:0.7;}
          .zoom-out-80{--una-exit-scale:0.8;}
          .zoom-out-90{--una-exit-scale:0.9;}"
        `)
      })


      it(`should also convert decimals including negative`, async () => {
        const classnames = DECIMALS.map(i => `zoom-out-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out--0\\.1{--una-exit-scale:-0.001;}
          .zoom-out--10\\.1{--una-exit-scale:-0.101;}
          .zoom-out--180\\.37{--una-exit-scale:-1.8037;}
          .zoom-out--199\\.9{--una-exit-scale:-1.999;}
          .zoom-out--52\\.1{--una-exit-scale:-0.521;}
          .zoom-out--66\\.66{--una-exit-scale:-0.6666;}
          .zoom-out-0\\.1{--una-exit-scale:0.001;}
          .zoom-out-10\\.1{--una-exit-scale:0.101;}
          .zoom-out-180\\.37{--una-exit-scale:1.8037;}
          .zoom-out-199\\.9{--una-exit-scale:1.999;}
          .zoom-out-52\\.1{--una-exit-scale:0.521;}
          .zoom-out-66\\.66{--una-exit-scale:0.6666;}
          .zoom-out-99\\.9{--una-exit-scale:0.999;}"
        `)
      })
    })


    describe('fraction', () => {
      it(`should covert any fractions including negative`, async () => {
        const classnames = FRACTIONS.map(i => `zoom-out-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out--1\\/3{--una-exit-scale:-33.3333333333%;}
          .zoom-out--1\\/4{--una-exit-scale:-25%;}
          .zoom-out--1\\/6{--una-exit-scale:-16.6666666667%;}
          .zoom-out--2\\/3{--una-exit-scale:-66.6666666667%;}
          .zoom-out--3\\/4{--una-exit-scale:-75%;}
          .zoom-out--5\\/6{--una-exit-scale:-83.3333333333%;}
          .zoom-out-1\\/3{--una-exit-scale:33.3333333333%;}
          .zoom-out-1\\/4{--una-exit-scale:25%;}
          .zoom-out-1\\/6{--una-exit-scale:16.6666666667%;}
          .zoom-out-2\\/3{--una-exit-scale:66.6666666667%;}
          .zoom-out-3\\/4{--una-exit-scale:75%;}
          .zoom-out-5\\/6{--una-exit-scale:83.3333333333%;}"
        `)
      })


      it(`should convert "full" to "100%`, async () => {
        const { css } = await uno.generate('zoom-out-full')

        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out-full{--una-exit-scale:100%;}"
        `)
      })
    })


    describe('css variable', () => {
      it(`should handle css variables`, async () => {
        const classnames = CSS_VARIABLES.map(i => `zoom-out-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out-\\$foo{--una-exit-scale:var(--foo);}
          .zoom-out-\\$foo-bar{--una-exit-scale:var(--foo-bar);}
          .zoom-out-\\$fooBar{--una-exit-scale:var(--fooBar);}"
        `)
      })
    })
  })
})
