import { describe, it } from 'vitest'
import { CSS_VARIABLE_PREFIX } from '@/constants'
import { CSS_VARIABLES, DECIMALS, FRACTIONS, INTEGERS } from '~/data'
import { uno } from '~/utils'


describe.concurrent('slide animation', () => {
  describe('slide-in', () => {
    describe('misc', () => {
      it(`"should generate "${CSS_VARIABLE_PREFIX}-enter-translate-x" and "-y" css variable and default to "100%"`, async ({ expect }) => {
        const classnames = [
          'slide-in-t',
          'slide-in-b',
          'slide-in-l',
          'slide-in-r',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-b{--una-enter-translate-y:100%;}
          .slide-in-l{--una-enter-translate-x:-100%;}
          .slide-in-r{--una-enter-translate-x:100%;}
          .slide-in-t{--una-enter-translate-y:-100%;}"
        `)
      })


      it(`should handle both with or without "-from"`, async ({ expect }) => {
        const classnames = [
          'slide-in-t',
          'slide-in-b',
          'slide-in-l',
          'slide-in-r',
          'slide-in-from-t',
          'slide-in-from-b',
          'slide-in-from-l',
          'slide-in-from-r',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-b,
          .slide-in-from-b{--una-enter-translate-y:100%;}
          .slide-in-from-l,
          .slide-in-l{--una-enter-translate-x:-100%;}
          .slide-in-from-r,
          .slide-in-r{--una-enter-translate-x:100%;}
          .slide-in-from-t,
          .slide-in-t{--una-enter-translate-y:-100%;}"
        `)
      })


      it(`should alias "t|b|l|r" to "top|bottom|left|right"`, async ({ expect }) => {
        const classnames = [
          'slide-in-t',
          'slide-in-b',
          'slide-in-l',
          'slide-in-r',
          'slide-in-top',
          'slide-in-bottom',
          'slide-in-left',
          'slide-in-right',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-b,
          .slide-in-bottom{--una-enter-translate-y:100%;}
          .slide-in-l,
          .slide-in-left{--una-enter-translate-x:-100%;}
          .slide-in-r,
          .slide-in-right{--una-enter-translate-x:100%;}
          .slide-in-t,
          .slide-in-top{--una-enter-translate-y:-100%;}"
        `)
      })
    })


    describe('direction', () => {
      it(`should generate "top|bottom" as "translate-y"`, async ({ expect }) => {
        const classnames = [
          'slide-in-t',
          'slide-in-b',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-b{--una-enter-translate-y:100%;}
          .slide-in-t{--una-enter-translate-y:-100%;}"
        `)
      })


      it(`should generate "left|right" as "translate-x"`, async ({ expect }) => {
        const classnames = [
          'slide-in-l',
          'slide-in-r',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-l{--una-enter-translate-x:-100%;}
          .slide-in-r{--una-enter-translate-x:100%;}"
        `)
      })
    })


    describe('positivity and negativity', () => {
      it(`should generate negative value for "top|left"`, async ({ expect }) => {
        const classnames = [
          'slide-in-t',
          'slide-in-l',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-l{--una-enter-translate-x:-100%;}
          .slide-in-t{--una-enter-translate-y:-100%;}"
        `)
      })


      it(`should generate positive value for "bottom|right"`, async ({ expect }) => {
        const classnames = [
          'slide-in-b',
          'slide-in-r',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-b{--una-enter-translate-y:100%;}
          .slide-in-r{--una-enter-translate-x:100%;}"
        `)
      })


      it(`should convert negative value to positive for "top|left"`, async ({ expect }) => {
        const classnames = [
          'slide-in-t--10',
          'slide-in-l--10',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-l--10{--una-enter-translate-x:2.5rem;}
          .slide-in-t--10{--una-enter-translate-y:2.5rem;}"
        `)
      })
    })


    describe('rem', () => {
      it(`should convert any numbers to "rem" (x / 4rem) including negative`, async ({ expect }) => {
        const classnames = INTEGERS.map(i => `slide-in-t-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-t--10{--una-enter-translate-y:2.5rem;}
          .slide-in-t--100{--una-enter-translate-y:25rem;}
          .slide-in-t--110{--una-enter-translate-y:27.5rem;}
          .slide-in-t--120{--una-enter-translate-y:30rem;}
          .slide-in-t--130{--una-enter-translate-y:32.5rem;}
          .slide-in-t--140{--una-enter-translate-y:35rem;}
          .slide-in-t--150{--una-enter-translate-y:37.5rem;}
          .slide-in-t--160{--una-enter-translate-y:40rem;}
          .slide-in-t--170{--una-enter-translate-y:42.5rem;}
          .slide-in-t--180{--una-enter-translate-y:45rem;}
          .slide-in-t--190{--una-enter-translate-y:47.5rem;}
          .slide-in-t--20{--una-enter-translate-y:5rem;}
          .slide-in-t--200{--una-enter-translate-y:50rem;}
          .slide-in-t--30{--una-enter-translate-y:7.5rem;}
          .slide-in-t--40{--una-enter-translate-y:10rem;}
          .slide-in-t--50{--una-enter-translate-y:12.5rem;}
          .slide-in-t--60{--una-enter-translate-y:15rem;}
          .slide-in-t--70{--una-enter-translate-y:17.5rem;}
          .slide-in-t--80{--una-enter-translate-y:20rem;}
          .slide-in-t--90{--una-enter-translate-y:22.5rem;}
          .slide-in-t-0{--una-enter-translate-y:0;}
          .slide-in-t-10{--una-enter-translate-y:-2.5rem;}
          .slide-in-t-100{--una-enter-translate-y:-25rem;}
          .slide-in-t-110{--una-enter-translate-y:-27.5rem;}
          .slide-in-t-120{--una-enter-translate-y:-30rem;}
          .slide-in-t-130{--una-enter-translate-y:-32.5rem;}
          .slide-in-t-140{--una-enter-translate-y:-35rem;}
          .slide-in-t-150{--una-enter-translate-y:-37.5rem;}
          .slide-in-t-160{--una-enter-translate-y:-40rem;}
          .slide-in-t-170{--una-enter-translate-y:-42.5rem;}
          .slide-in-t-180{--una-enter-translate-y:-45rem;}
          .slide-in-t-190{--una-enter-translate-y:-47.5rem;}
          .slide-in-t-20{--una-enter-translate-y:-5rem;}
          .slide-in-t-200{--una-enter-translate-y:-50rem;}
          .slide-in-t-30{--una-enter-translate-y:-7.5rem;}
          .slide-in-t-40{--una-enter-translate-y:-10rem;}
          .slide-in-t-50{--una-enter-translate-y:-12.5rem;}
          .slide-in-t-60{--una-enter-translate-y:-15rem;}
          .slide-in-t-70{--una-enter-translate-y:-17.5rem;}
          .slide-in-t-80{--una-enter-translate-y:-20rem;}
          .slide-in-t-90{--una-enter-translate-y:-22.5rem;}"
        `)
      })


      it(`should also convert decimals including negative`, async ({ expect }) => {
        const classnames = DECIMALS.map(i => `slide-in-t-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-t--0\\.1{--una-enter-translate-y:0.025rem;}
          .slide-in-t--10\\.1{--una-enter-translate-y:2.525rem;}
          .slide-in-t--180\\.37{--una-enter-translate-y:45.0925rem;}
          .slide-in-t--199\\.9{--una-enter-translate-y:49.975rem;}
          .slide-in-t--52\\.1{--una-enter-translate-y:13.025rem;}
          .slide-in-t--66\\.66{--una-enter-translate-y:16.665rem;}
          .slide-in-t-0\\.1{--una-enter-translate-y:-0.025rem;}
          .slide-in-t-10\\.1{--una-enter-translate-y:-2.525rem;}
          .slide-in-t-180\\.37{--una-enter-translate-y:-45.0925rem;}
          .slide-in-t-199\\.9{--una-enter-translate-y:-49.975rem;}
          .slide-in-t-52\\.1{--una-enter-translate-y:-13.025rem;}
          .slide-in-t-66\\.66{--una-enter-translate-y:-16.665rem;}
          .slide-in-t-99\\.9{--una-enter-translate-y:-24.975rem;}"
        `)
      })
    })


    describe('percentage', () => {
      it(`should leave any percentage with "%" symbol as is`, async ({ expect }) => {
        const classnames = [
          ...INTEGERS.map(i => `slide-in-t-${i}%`),
          ...DECIMALS.map(i => `slide-in-t-${i}%`),
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-t--0\\.1\\%{--una-enter-translate-y:0.1%;}
          .slide-in-t--10\\.1\\%{--una-enter-translate-y:10.1%;}
          .slide-in-t--10\\%{--una-enter-translate-y:10%;}
          .slide-in-t--100\\%{--una-enter-translate-y:100%;}
          .slide-in-t--110\\%{--una-enter-translate-y:110%;}
          .slide-in-t--120\\%{--una-enter-translate-y:120%;}
          .slide-in-t--130\\%{--una-enter-translate-y:130%;}
          .slide-in-t--140\\%{--una-enter-translate-y:140%;}
          .slide-in-t--150\\%{--una-enter-translate-y:150%;}
          .slide-in-t--160\\%{--una-enter-translate-y:160%;}
          .slide-in-t--170\\%{--una-enter-translate-y:170%;}
          .slide-in-t--180\\.37\\%{--una-enter-translate-y:180.37%;}
          .slide-in-t--180\\%{--una-enter-translate-y:180%;}
          .slide-in-t--190\\%{--una-enter-translate-y:190%;}
          .slide-in-t--199\\.9\\%{--una-enter-translate-y:199.9%;}
          .slide-in-t--20\\%{--una-enter-translate-y:20%;}
          .slide-in-t--200\\%{--una-enter-translate-y:200%;}
          .slide-in-t--30\\%{--una-enter-translate-y:30%;}
          .slide-in-t--40\\%{--una-enter-translate-y:40%;}
          .slide-in-t--50\\%{--una-enter-translate-y:50%;}
          .slide-in-t--52\\.1\\%{--una-enter-translate-y:52.1%;}
          .slide-in-t--60\\%{--una-enter-translate-y:60%;}
          .slide-in-t--66\\.66\\%{--una-enter-translate-y:66.66%;}
          .slide-in-t--70\\%{--una-enter-translate-y:70%;}
          .slide-in-t--80\\%{--una-enter-translate-y:80%;}
          .slide-in-t--90\\%{--una-enter-translate-y:90%;}
          .slide-in-t-0\\.1\\%{--una-enter-translate-y:-0.1%;}
          .slide-in-t-0\\%{--una-enter-translate-y:0;}
          .slide-in-t-10\\.1\\%{--una-enter-translate-y:-10.1%;}
          .slide-in-t-10\\%{--una-enter-translate-y:-10%;}
          .slide-in-t-100\\%{--una-enter-translate-y:-100%;}
          .slide-in-t-110\\%{--una-enter-translate-y:-110%;}
          .slide-in-t-120\\%{--una-enter-translate-y:-120%;}
          .slide-in-t-130\\%{--una-enter-translate-y:-130%;}
          .slide-in-t-140\\%{--una-enter-translate-y:-140%;}
          .slide-in-t-150\\%{--una-enter-translate-y:-150%;}
          .slide-in-t-160\\%{--una-enter-translate-y:-160%;}
          .slide-in-t-170\\%{--una-enter-translate-y:-170%;}
          .slide-in-t-180\\.37\\%{--una-enter-translate-y:-180.37%;}
          .slide-in-t-180\\%{--una-enter-translate-y:-180%;}
          .slide-in-t-190\\%{--una-enter-translate-y:-190%;}
          .slide-in-t-199\\.9\\%{--una-enter-translate-y:-199.9%;}
          .slide-in-t-20\\%{--una-enter-translate-y:-20%;}
          .slide-in-t-200\\%{--una-enter-translate-y:-200%;}
          .slide-in-t-30\\%{--una-enter-translate-y:-30%;}
          .slide-in-t-40\\%{--una-enter-translate-y:-40%;}
          .slide-in-t-50\\%{--una-enter-translate-y:-50%;}
          .slide-in-t-52\\.1\\%{--una-enter-translate-y:-52.1%;}
          .slide-in-t-60\\%{--una-enter-translate-y:-60%;}
          .slide-in-t-66\\.66\\%{--una-enter-translate-y:-66.66%;}
          .slide-in-t-70\\%{--una-enter-translate-y:-70%;}
          .slide-in-t-80\\%{--una-enter-translate-y:-80%;}
          .slide-in-t-90\\%{--una-enter-translate-y:-90%;}
          .slide-in-t-99\\.9\\%{--una-enter-translate-y:-99.9%;}"
        `)
      })
    })


    describe('fraction', () => {
      it(`should convert any fractions including negative`, async ({ expect }) => {
        const classnames = FRACTIONS.map(i => `slide-in-t-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-t--1\\/3{--una-enter-translate-y:33.3333333333%;}
          .slide-in-t--1\\/4{--una-enter-translate-y:25%;}
          .slide-in-t--1\\/6{--una-enter-translate-y:16.6666666667%;}
          .slide-in-t--2\\/3{--una-enter-translate-y:66.6666666667%;}
          .slide-in-t--3\\/4{--una-enter-translate-y:75%;}
          .slide-in-t--5\\/6{--una-enter-translate-y:83.3333333333%;}
          .slide-in-t-1\\/3{--una-enter-translate-y:-33.3333333333%;}
          .slide-in-t-1\\/4{--una-enter-translate-y:-25%;}
          .slide-in-t-1\\/6{--una-enter-translate-y:-16.6666666667%;}
          .slide-in-t-2\\/3{--una-enter-translate-y:-66.6666666667%;}
          .slide-in-t-3\\/4{--una-enter-translate-y:-75%;}
          .slide-in-t-5\\/6{--una-enter-translate-y:-83.3333333333%;}"
        `)
      })


      it(`should convert "full" to "100%`, async ({ expect }) => {
        const { css } = await uno.generate('slide-in-t-full')

        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-t-full{--una-enter-translate-y:-100%;}"
        `)
      })
    })


    describe('css variable', () => {
      it(`should handle css variables`, async ({ expect }) => {
        const classnames = CSS_VARIABLES.map(i => `slide-in-t-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-in-t-\\$foo{--una-enter-translate-y:var(--foo);}
          .slide-in-t-\\$foo-bar{--una-enter-translate-y:var(--foo-bar);}
          .slide-in-t-\\$fooBar{--una-enter-translate-y:var(--fooBar);}"
        `)
      })
    })
  })


  describe('slide-out', () => {
    describe('misc', () => {
      it(`"should generate "${CSS_VARIABLE_PREFIX}-exit-translate-x" and "-y" css variable and default to "100%"`, async ({ expect }) => {
        const classnames = [
          'slide-out-t',
          'slide-out-b',
          'slide-out-l',
          'slide-out-r',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-b{--una-exit-translate-y:100%;}
          .slide-out-l{--una-exit-translate-x:-100%;}
          .slide-out-r{--una-exit-translate-x:100%;}
          .slide-out-t{--una-exit-translate-y:-100%;}"
        `)
      })


      it(`should handle both with or without "-to"`, async ({ expect }) => {
        const classnames = [
          'slide-out-t',
          'slide-out-b',
          'slide-out-l',
          'slide-out-r',
          'slide-out-to-t',
          'slide-out-to-b',
          'slide-out-to-l',
          'slide-out-to-r',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-b,
          .slide-out-to-b{--una-exit-translate-y:100%;}
          .slide-out-l,
          .slide-out-to-l{--una-exit-translate-x:-100%;}
          .slide-out-r,
          .slide-out-to-r{--una-exit-translate-x:100%;}
          .slide-out-t,
          .slide-out-to-t{--una-exit-translate-y:-100%;}"
        `)
      })


      it(`should alias "t|b|l|r" to "top|bottom|left|right"`, async ({ expect }) => {
        const classnames = [
          'slide-out-t',
          'slide-out-b',
          'slide-out-l',
          'slide-out-r',
          'slide-out-top',
          'slide-out-bottom',
          'slide-out-left',
          'slide-out-right',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-b,
          .slide-out-bottom{--una-exit-translate-y:100%;}
          .slide-out-l,
          .slide-out-left{--una-exit-translate-x:-100%;}
          .slide-out-r,
          .slide-out-right{--una-exit-translate-x:100%;}
          .slide-out-t,
          .slide-out-top{--una-exit-translate-y:-100%;}"
        `)
      })
    })


    describe('direction', () => {
      it(`should generate "top|bottom" as "translate-y"`, async ({ expect }) => {
        const classnames = [
          'slide-out-t',
          'slide-out-b',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-b{--una-exit-translate-y:100%;}
          .slide-out-t{--una-exit-translate-y:-100%;}"
        `)
      })


      it(`should generate "left|right" as "translate-x"`, async ({ expect }) => {
        const classnames = [
          'slide-out-l',
          'slide-out-r',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-l{--una-exit-translate-x:-100%;}
          .slide-out-r{--una-exit-translate-x:100%;}"
        `)
      })
    })


    describe('positivity and negativity', () => {
      it(`should generate negative value for "top|left"`, async ({ expect }) => {
        const classnames = [
          'slide-out-t',
          'slide-out-l',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-l{--una-exit-translate-x:-100%;}
          .slide-out-t{--una-exit-translate-y:-100%;}"
        `)
      })


      it(`should generate positive value for "bottom|right"`, async ({ expect }) => {
        const classnames = [
          'slide-out-b',
          'slide-out-r',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-b{--una-exit-translate-y:100%;}
          .slide-out-r{--una-exit-translate-x:100%;}"
        `)
      })


      it(`should convert negative value to positive for "top|left"`, async ({ expect }) => {
        const classnames = [
          'slide-out-t--10',
          'slide-out-l--10',
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-l--10{--una-exit-translate-x:2.5rem;}
          .slide-out-t--10{--una-exit-translate-y:2.5rem;}"
        `)
      })
    })


    describe('rem', () => {
      it(`should convert any numbers to "rem" (x / 4rem) including negative`, async ({ expect }) => {
        const classnames = INTEGERS.map(i => `slide-out-t-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-t--10{--una-exit-translate-y:2.5rem;}
          .slide-out-t--100{--una-exit-translate-y:25rem;}
          .slide-out-t--110{--una-exit-translate-y:27.5rem;}
          .slide-out-t--120{--una-exit-translate-y:30rem;}
          .slide-out-t--130{--una-exit-translate-y:32.5rem;}
          .slide-out-t--140{--una-exit-translate-y:35rem;}
          .slide-out-t--150{--una-exit-translate-y:37.5rem;}
          .slide-out-t--160{--una-exit-translate-y:40rem;}
          .slide-out-t--170{--una-exit-translate-y:42.5rem;}
          .slide-out-t--180{--una-exit-translate-y:45rem;}
          .slide-out-t--190{--una-exit-translate-y:47.5rem;}
          .slide-out-t--20{--una-exit-translate-y:5rem;}
          .slide-out-t--200{--una-exit-translate-y:50rem;}
          .slide-out-t--30{--una-exit-translate-y:7.5rem;}
          .slide-out-t--40{--una-exit-translate-y:10rem;}
          .slide-out-t--50{--una-exit-translate-y:12.5rem;}
          .slide-out-t--60{--una-exit-translate-y:15rem;}
          .slide-out-t--70{--una-exit-translate-y:17.5rem;}
          .slide-out-t--80{--una-exit-translate-y:20rem;}
          .slide-out-t--90{--una-exit-translate-y:22.5rem;}
          .slide-out-t-0{--una-exit-translate-y:0;}
          .slide-out-t-10{--una-exit-translate-y:-2.5rem;}
          .slide-out-t-100{--una-exit-translate-y:-25rem;}
          .slide-out-t-110{--una-exit-translate-y:-27.5rem;}
          .slide-out-t-120{--una-exit-translate-y:-30rem;}
          .slide-out-t-130{--una-exit-translate-y:-32.5rem;}
          .slide-out-t-140{--una-exit-translate-y:-35rem;}
          .slide-out-t-150{--una-exit-translate-y:-37.5rem;}
          .slide-out-t-160{--una-exit-translate-y:-40rem;}
          .slide-out-t-170{--una-exit-translate-y:-42.5rem;}
          .slide-out-t-180{--una-exit-translate-y:-45rem;}
          .slide-out-t-190{--una-exit-translate-y:-47.5rem;}
          .slide-out-t-20{--una-exit-translate-y:-5rem;}
          .slide-out-t-200{--una-exit-translate-y:-50rem;}
          .slide-out-t-30{--una-exit-translate-y:-7.5rem;}
          .slide-out-t-40{--una-exit-translate-y:-10rem;}
          .slide-out-t-50{--una-exit-translate-y:-12.5rem;}
          .slide-out-t-60{--una-exit-translate-y:-15rem;}
          .slide-out-t-70{--una-exit-translate-y:-17.5rem;}
          .slide-out-t-80{--una-exit-translate-y:-20rem;}
          .slide-out-t-90{--una-exit-translate-y:-22.5rem;}"
        `)
      })


      it(`should also convert decimals including negative`, async ({ expect }) => {
        const classnames = DECIMALS.map(i => `slide-out-t-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-t--0\\.1{--una-exit-translate-y:0.025rem;}
          .slide-out-t--10\\.1{--una-exit-translate-y:2.525rem;}
          .slide-out-t--180\\.37{--una-exit-translate-y:45.0925rem;}
          .slide-out-t--199\\.9{--una-exit-translate-y:49.975rem;}
          .slide-out-t--52\\.1{--una-exit-translate-y:13.025rem;}
          .slide-out-t--66\\.66{--una-exit-translate-y:16.665rem;}
          .slide-out-t-0\\.1{--una-exit-translate-y:-0.025rem;}
          .slide-out-t-10\\.1{--una-exit-translate-y:-2.525rem;}
          .slide-out-t-180\\.37{--una-exit-translate-y:-45.0925rem;}
          .slide-out-t-199\\.9{--una-exit-translate-y:-49.975rem;}
          .slide-out-t-52\\.1{--una-exit-translate-y:-13.025rem;}
          .slide-out-t-66\\.66{--una-exit-translate-y:-16.665rem;}
          .slide-out-t-99\\.9{--una-exit-translate-y:-24.975rem;}"
        `)
      })
    })


    describe('percentage', () => {
      it(`should leave any percentage with "%" symbol as is`, async ({ expect }) => {
        const classnames = [
          ...INTEGERS.map(i => `slide-out-t-${i}%`),
          ...DECIMALS.map(i => `slide-out-t-${i}%`),
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-t--0\\.1\\%{--una-exit-translate-y:0.1%;}
          .slide-out-t--10\\.1\\%{--una-exit-translate-y:10.1%;}
          .slide-out-t--10\\%{--una-exit-translate-y:10%;}
          .slide-out-t--100\\%{--una-exit-translate-y:100%;}
          .slide-out-t--110\\%{--una-exit-translate-y:110%;}
          .slide-out-t--120\\%{--una-exit-translate-y:120%;}
          .slide-out-t--130\\%{--una-exit-translate-y:130%;}
          .slide-out-t--140\\%{--una-exit-translate-y:140%;}
          .slide-out-t--150\\%{--una-exit-translate-y:150%;}
          .slide-out-t--160\\%{--una-exit-translate-y:160%;}
          .slide-out-t--170\\%{--una-exit-translate-y:170%;}
          .slide-out-t--180\\.37\\%{--una-exit-translate-y:180.37%;}
          .slide-out-t--180\\%{--una-exit-translate-y:180%;}
          .slide-out-t--190\\%{--una-exit-translate-y:190%;}
          .slide-out-t--199\\.9\\%{--una-exit-translate-y:199.9%;}
          .slide-out-t--20\\%{--una-exit-translate-y:20%;}
          .slide-out-t--200\\%{--una-exit-translate-y:200%;}
          .slide-out-t--30\\%{--una-exit-translate-y:30%;}
          .slide-out-t--40\\%{--una-exit-translate-y:40%;}
          .slide-out-t--50\\%{--una-exit-translate-y:50%;}
          .slide-out-t--52\\.1\\%{--una-exit-translate-y:52.1%;}
          .slide-out-t--60\\%{--una-exit-translate-y:60%;}
          .slide-out-t--66\\.66\\%{--una-exit-translate-y:66.66%;}
          .slide-out-t--70\\%{--una-exit-translate-y:70%;}
          .slide-out-t--80\\%{--una-exit-translate-y:80%;}
          .slide-out-t--90\\%{--una-exit-translate-y:90%;}
          .slide-out-t-0\\.1\\%{--una-exit-translate-y:-0.1%;}
          .slide-out-t-0\\%{--una-exit-translate-y:0;}
          .slide-out-t-10\\.1\\%{--una-exit-translate-y:-10.1%;}
          .slide-out-t-10\\%{--una-exit-translate-y:-10%;}
          .slide-out-t-100\\%{--una-exit-translate-y:-100%;}
          .slide-out-t-110\\%{--una-exit-translate-y:-110%;}
          .slide-out-t-120\\%{--una-exit-translate-y:-120%;}
          .slide-out-t-130\\%{--una-exit-translate-y:-130%;}
          .slide-out-t-140\\%{--una-exit-translate-y:-140%;}
          .slide-out-t-150\\%{--una-exit-translate-y:-150%;}
          .slide-out-t-160\\%{--una-exit-translate-y:-160%;}
          .slide-out-t-170\\%{--una-exit-translate-y:-170%;}
          .slide-out-t-180\\.37\\%{--una-exit-translate-y:-180.37%;}
          .slide-out-t-180\\%{--una-exit-translate-y:-180%;}
          .slide-out-t-190\\%{--una-exit-translate-y:-190%;}
          .slide-out-t-199\\.9\\%{--una-exit-translate-y:-199.9%;}
          .slide-out-t-20\\%{--una-exit-translate-y:-20%;}
          .slide-out-t-200\\%{--una-exit-translate-y:-200%;}
          .slide-out-t-30\\%{--una-exit-translate-y:-30%;}
          .slide-out-t-40\\%{--una-exit-translate-y:-40%;}
          .slide-out-t-50\\%{--una-exit-translate-y:-50%;}
          .slide-out-t-52\\.1\\%{--una-exit-translate-y:-52.1%;}
          .slide-out-t-60\\%{--una-exit-translate-y:-60%;}
          .slide-out-t-66\\.66\\%{--una-exit-translate-y:-66.66%;}
          .slide-out-t-70\\%{--una-exit-translate-y:-70%;}
          .slide-out-t-80\\%{--una-exit-translate-y:-80%;}
          .slide-out-t-90\\%{--una-exit-translate-y:-90%;}
          .slide-out-t-99\\.9\\%{--una-exit-translate-y:-99.9%;}"
        `)
      })
    })


    describe('fraction', () => {
      it(`should convert any fractions including negative`, async ({ expect }) => {
        const classnames = FRACTIONS.map(i => `slide-out-t-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-t--1\\/3{--una-exit-translate-y:33.3333333333%;}
          .slide-out-t--1\\/4{--una-exit-translate-y:25%;}
          .slide-out-t--1\\/6{--una-exit-translate-y:16.6666666667%;}
          .slide-out-t--2\\/3{--una-exit-translate-y:66.6666666667%;}
          .slide-out-t--3\\/4{--una-exit-translate-y:75%;}
          .slide-out-t--5\\/6{--una-exit-translate-y:83.3333333333%;}
          .slide-out-t-1\\/3{--una-exit-translate-y:-33.3333333333%;}
          .slide-out-t-1\\/4{--una-exit-translate-y:-25%;}
          .slide-out-t-1\\/6{--una-exit-translate-y:-16.6666666667%;}
          .slide-out-t-2\\/3{--una-exit-translate-y:-66.6666666667%;}
          .slide-out-t-3\\/4{--una-exit-translate-y:-75%;}
          .slide-out-t-5\\/6{--una-exit-translate-y:-83.3333333333%;}"
        `)
      })


      it(`should convert "full" to "100%`, async ({ expect }) => {
        const { css } = await uno.generate('slide-out-t-full')

        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-t-full{--una-exit-translate-y:-100%;}"
        `)
      })
    })


    describe('css variable', () => {
      it(`should handle css variables`, async ({ expect }) => {
        const classnames = CSS_VARIABLES.map(i => `slide-out-t-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .slide-out-t-\\$foo{--una-exit-translate-y:var(--foo);}
          .slide-out-t-\\$foo-bar{--una-exit-translate-y:var(--foo-bar);}
          .slide-out-t-\\$fooBar{--una-exit-translate-y:var(--fooBar);}"
        `)
      })
    })
  })
})
