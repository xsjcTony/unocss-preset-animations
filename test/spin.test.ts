import { describe, expect, it } from 'vitest'
import { CSS_VARIABLE_PREFIX } from '@/constants'
import { CSS_VARIABLES, DECIMALS, INTEGERS } from '~/data'
import { uno } from '~/utils'


describe('spin animation', () => {
  describe('spin-in', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-enter-rotate" css variable and default to "30deg"`, async () => {
      const { css } = await uno.generate('spin-in')

      expect(css).toContain(`.spin-in{${CSS_VARIABLE_PREFIX}-enter-rotate:30deg;}`)
    })


    describe('angle', () => {
      it(`should handle any numbers including negative and unit default to "deg"`, async () => {
        const classnames = INTEGERS.map(i => `spin-in-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .spin-in--10{--una-enter-rotate:-10deg;}
          .spin-in--100{--una-enter-rotate:-100deg;}
          .spin-in--110{--una-enter-rotate:-110deg;}
          .spin-in--120{--una-enter-rotate:-120deg;}
          .spin-in--130{--una-enter-rotate:-130deg;}
          .spin-in--140{--una-enter-rotate:-140deg;}
          .spin-in--150{--una-enter-rotate:-150deg;}
          .spin-in--160{--una-enter-rotate:-160deg;}
          .spin-in--170{--una-enter-rotate:-170deg;}
          .spin-in--180{--una-enter-rotate:-180deg;}
          .spin-in--190{--una-enter-rotate:-190deg;}
          .spin-in--20{--una-enter-rotate:-20deg;}
          .spin-in--200{--una-enter-rotate:-200deg;}
          .spin-in--30{--una-enter-rotate:-30deg;}
          .spin-in--40{--una-enter-rotate:-40deg;}
          .spin-in--50{--una-enter-rotate:-50deg;}
          .spin-in--60{--una-enter-rotate:-60deg;}
          .spin-in--70{--una-enter-rotate:-70deg;}
          .spin-in--80{--una-enter-rotate:-80deg;}
          .spin-in--90{--una-enter-rotate:-90deg;}
          .spin-in-0{--una-enter-rotate:0;}
          .spin-in-10{--una-enter-rotate:10deg;}
          .spin-in-100{--una-enter-rotate:100deg;}
          .spin-in-110{--una-enter-rotate:110deg;}
          .spin-in-120{--una-enter-rotate:120deg;}
          .spin-in-130{--una-enter-rotate:130deg;}
          .spin-in-140{--una-enter-rotate:140deg;}
          .spin-in-150{--una-enter-rotate:150deg;}
          .spin-in-160{--una-enter-rotate:160deg;}
          .spin-in-170{--una-enter-rotate:170deg;}
          .spin-in-180{--una-enter-rotate:180deg;}
          .spin-in-190{--una-enter-rotate:190deg;}
          .spin-in-20{--una-enter-rotate:20deg;}
          .spin-in-200{--una-enter-rotate:200deg;}
          .spin-in-30{--una-enter-rotate:30deg;}
          .spin-in-40{--una-enter-rotate:40deg;}
          .spin-in-50{--una-enter-rotate:50deg;}
          .spin-in-60{--una-enter-rotate:60deg;}
          .spin-in-70{--una-enter-rotate:70deg;}
          .spin-in-80{--una-enter-rotate:80deg;}
          .spin-in-90{--una-enter-rotate:90deg;}"
        `)
      })


      it(`should also handle decimals including negative`, async () => {
        const classnames = DECIMALS.map(i => `spin-in-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .spin-in--0\\.1{--una-enter-rotate:-0.1deg;}
          .spin-in--10\\.1{--una-enter-rotate:-10.1deg;}
          .spin-in--180\\.37{--una-enter-rotate:-180.37deg;}
          .spin-in--199\\.9{--una-enter-rotate:-199.9deg;}
          .spin-in--52\\.1{--una-enter-rotate:-52.1deg;}
          .spin-in--66\\.66{--una-enter-rotate:-66.66deg;}
          .spin-in-0\\.1{--una-enter-rotate:0.1deg;}
          .spin-in-10\\.1{--una-enter-rotate:10.1deg;}
          .spin-in-180\\.37{--una-enter-rotate:180.37deg;}
          .spin-in-199\\.9{--una-enter-rotate:199.9deg;}
          .spin-in-52\\.1{--una-enter-rotate:52.1deg;}
          .spin-in-66\\.66{--una-enter-rotate:66.66deg;}
          .spin-in-99\\.9{--una-enter-rotate:99.9deg;}"
        `)
      })


      it(`should use units ("deg", "rad", "grad", "turn") as is`, async () => {
        const DATASET = INTEGERS.filter(Boolean)

        const classnames = [
          ...DATASET.map(i => `spin-in-${i}deg`),
          ...DATASET.map(i => `spin-in-${i}rad`),
          ...DATASET.map(i => `spin-in-${i}grad`),
          ...DATASET.map(i => `spin-in-${i}turn`),
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .spin-in--100deg{--una-enter-rotate:-100deg;}
          .spin-in--100grad{--una-enter-rotate:-100grad;}
          .spin-in--100rad{--una-enter-rotate:-100rad;}
          .spin-in--100turn{--una-enter-rotate:-100turn;}
          .spin-in--10deg{--una-enter-rotate:-10deg;}
          .spin-in--10grad{--una-enter-rotate:-10grad;}
          .spin-in--10rad{--una-enter-rotate:-10rad;}
          .spin-in--10turn{--una-enter-rotate:-10turn;}
          .spin-in--110deg{--una-enter-rotate:-110deg;}
          .spin-in--110grad{--una-enter-rotate:-110grad;}
          .spin-in--110rad{--una-enter-rotate:-110rad;}
          .spin-in--110turn{--una-enter-rotate:-110turn;}
          .spin-in--120deg{--una-enter-rotate:-120deg;}
          .spin-in--120grad{--una-enter-rotate:-120grad;}
          .spin-in--120rad{--una-enter-rotate:-120rad;}
          .spin-in--120turn{--una-enter-rotate:-120turn;}
          .spin-in--130deg{--una-enter-rotate:-130deg;}
          .spin-in--130grad{--una-enter-rotate:-130grad;}
          .spin-in--130rad{--una-enter-rotate:-130rad;}
          .spin-in--130turn{--una-enter-rotate:-130turn;}
          .spin-in--140deg{--una-enter-rotate:-140deg;}
          .spin-in--140grad{--una-enter-rotate:-140grad;}
          .spin-in--140rad{--una-enter-rotate:-140rad;}
          .spin-in--140turn{--una-enter-rotate:-140turn;}
          .spin-in--150deg{--una-enter-rotate:-150deg;}
          .spin-in--150grad{--una-enter-rotate:-150grad;}
          .spin-in--150rad{--una-enter-rotate:-150rad;}
          .spin-in--150turn{--una-enter-rotate:-150turn;}
          .spin-in--160deg{--una-enter-rotate:-160deg;}
          .spin-in--160grad{--una-enter-rotate:-160grad;}
          .spin-in--160rad{--una-enter-rotate:-160rad;}
          .spin-in--160turn{--una-enter-rotate:-160turn;}
          .spin-in--170deg{--una-enter-rotate:-170deg;}
          .spin-in--170grad{--una-enter-rotate:-170grad;}
          .spin-in--170rad{--una-enter-rotate:-170rad;}
          .spin-in--170turn{--una-enter-rotate:-170turn;}
          .spin-in--180deg{--una-enter-rotate:-180deg;}
          .spin-in--180grad{--una-enter-rotate:-180grad;}
          .spin-in--180rad{--una-enter-rotate:-180rad;}
          .spin-in--180turn{--una-enter-rotate:-180turn;}
          .spin-in--190deg{--una-enter-rotate:-190deg;}
          .spin-in--190grad{--una-enter-rotate:-190grad;}
          .spin-in--190rad{--una-enter-rotate:-190rad;}
          .spin-in--190turn{--una-enter-rotate:-190turn;}
          .spin-in--200deg{--una-enter-rotate:-200deg;}
          .spin-in--200grad{--una-enter-rotate:-200grad;}
          .spin-in--200rad{--una-enter-rotate:-200rad;}
          .spin-in--200turn{--una-enter-rotate:-200turn;}
          .spin-in--20deg{--una-enter-rotate:-20deg;}
          .spin-in--20grad{--una-enter-rotate:-20grad;}
          .spin-in--20rad{--una-enter-rotate:-20rad;}
          .spin-in--20turn{--una-enter-rotate:-20turn;}
          .spin-in--30deg{--una-enter-rotate:-30deg;}
          .spin-in--30grad{--una-enter-rotate:-30grad;}
          .spin-in--30rad{--una-enter-rotate:-30rad;}
          .spin-in--30turn{--una-enter-rotate:-30turn;}
          .spin-in--40deg{--una-enter-rotate:-40deg;}
          .spin-in--40grad{--una-enter-rotate:-40grad;}
          .spin-in--40rad{--una-enter-rotate:-40rad;}
          .spin-in--40turn{--una-enter-rotate:-40turn;}
          .spin-in--50deg{--una-enter-rotate:-50deg;}
          .spin-in--50grad{--una-enter-rotate:-50grad;}
          .spin-in--50rad{--una-enter-rotate:-50rad;}
          .spin-in--50turn{--una-enter-rotate:-50turn;}
          .spin-in--60deg{--una-enter-rotate:-60deg;}
          .spin-in--60grad{--una-enter-rotate:-60grad;}
          .spin-in--60rad{--una-enter-rotate:-60rad;}
          .spin-in--60turn{--una-enter-rotate:-60turn;}
          .spin-in--70deg{--una-enter-rotate:-70deg;}
          .spin-in--70grad{--una-enter-rotate:-70grad;}
          .spin-in--70rad{--una-enter-rotate:-70rad;}
          .spin-in--70turn{--una-enter-rotate:-70turn;}
          .spin-in--80deg{--una-enter-rotate:-80deg;}
          .spin-in--80grad{--una-enter-rotate:-80grad;}
          .spin-in--80rad{--una-enter-rotate:-80rad;}
          .spin-in--80turn{--una-enter-rotate:-80turn;}
          .spin-in--90deg{--una-enter-rotate:-90deg;}
          .spin-in--90grad{--una-enter-rotate:-90grad;}
          .spin-in--90rad{--una-enter-rotate:-90rad;}
          .spin-in--90turn{--una-enter-rotate:-90turn;}
          .spin-in-100deg{--una-enter-rotate:100deg;}
          .spin-in-100grad{--una-enter-rotate:100grad;}
          .spin-in-100rad{--una-enter-rotate:100rad;}
          .spin-in-100turn{--una-enter-rotate:100turn;}
          .spin-in-10deg{--una-enter-rotate:10deg;}
          .spin-in-10grad{--una-enter-rotate:10grad;}
          .spin-in-10rad{--una-enter-rotate:10rad;}
          .spin-in-10turn{--una-enter-rotate:10turn;}
          .spin-in-110deg{--una-enter-rotate:110deg;}
          .spin-in-110grad{--una-enter-rotate:110grad;}
          .spin-in-110rad{--una-enter-rotate:110rad;}
          .spin-in-110turn{--una-enter-rotate:110turn;}
          .spin-in-120deg{--una-enter-rotate:120deg;}
          .spin-in-120grad{--una-enter-rotate:120grad;}
          .spin-in-120rad{--una-enter-rotate:120rad;}
          .spin-in-120turn{--una-enter-rotate:120turn;}
          .spin-in-130deg{--una-enter-rotate:130deg;}
          .spin-in-130grad{--una-enter-rotate:130grad;}
          .spin-in-130rad{--una-enter-rotate:130rad;}
          .spin-in-130turn{--una-enter-rotate:130turn;}
          .spin-in-140deg{--una-enter-rotate:140deg;}
          .spin-in-140grad{--una-enter-rotate:140grad;}
          .spin-in-140rad{--una-enter-rotate:140rad;}
          .spin-in-140turn{--una-enter-rotate:140turn;}
          .spin-in-150deg{--una-enter-rotate:150deg;}
          .spin-in-150grad{--una-enter-rotate:150grad;}
          .spin-in-150rad{--una-enter-rotate:150rad;}
          .spin-in-150turn{--una-enter-rotate:150turn;}
          .spin-in-160deg{--una-enter-rotate:160deg;}
          .spin-in-160grad{--una-enter-rotate:160grad;}
          .spin-in-160rad{--una-enter-rotate:160rad;}
          .spin-in-160turn{--una-enter-rotate:160turn;}
          .spin-in-170deg{--una-enter-rotate:170deg;}
          .spin-in-170grad{--una-enter-rotate:170grad;}
          .spin-in-170rad{--una-enter-rotate:170rad;}
          .spin-in-170turn{--una-enter-rotate:170turn;}
          .spin-in-180deg{--una-enter-rotate:180deg;}
          .spin-in-180grad{--una-enter-rotate:180grad;}
          .spin-in-180rad{--una-enter-rotate:180rad;}
          .spin-in-180turn{--una-enter-rotate:180turn;}
          .spin-in-190deg{--una-enter-rotate:190deg;}
          .spin-in-190grad{--una-enter-rotate:190grad;}
          .spin-in-190rad{--una-enter-rotate:190rad;}
          .spin-in-190turn{--una-enter-rotate:190turn;}
          .spin-in-200deg{--una-enter-rotate:200deg;}
          .spin-in-200grad{--una-enter-rotate:200grad;}
          .spin-in-200rad{--una-enter-rotate:200rad;}
          .spin-in-200turn{--una-enter-rotate:200turn;}
          .spin-in-20deg{--una-enter-rotate:20deg;}
          .spin-in-20grad{--una-enter-rotate:20grad;}
          .spin-in-20rad{--una-enter-rotate:20rad;}
          .spin-in-20turn{--una-enter-rotate:20turn;}
          .spin-in-30deg{--una-enter-rotate:30deg;}
          .spin-in-30grad{--una-enter-rotate:30grad;}
          .spin-in-30rad{--una-enter-rotate:30rad;}
          .spin-in-30turn{--una-enter-rotate:30turn;}
          .spin-in-40deg{--una-enter-rotate:40deg;}
          .spin-in-40grad{--una-enter-rotate:40grad;}
          .spin-in-40rad{--una-enter-rotate:40rad;}
          .spin-in-40turn{--una-enter-rotate:40turn;}
          .spin-in-50deg{--una-enter-rotate:50deg;}
          .spin-in-50grad{--una-enter-rotate:50grad;}
          .spin-in-50rad{--una-enter-rotate:50rad;}
          .spin-in-50turn{--una-enter-rotate:50turn;}
          .spin-in-60deg{--una-enter-rotate:60deg;}
          .spin-in-60grad{--una-enter-rotate:60grad;}
          .spin-in-60rad{--una-enter-rotate:60rad;}
          .spin-in-60turn{--una-enter-rotate:60turn;}
          .spin-in-70deg{--una-enter-rotate:70deg;}
          .spin-in-70grad{--una-enter-rotate:70grad;}
          .spin-in-70rad{--una-enter-rotate:70rad;}
          .spin-in-70turn{--una-enter-rotate:70turn;}
          .spin-in-80deg{--una-enter-rotate:80deg;}
          .spin-in-80grad{--una-enter-rotate:80grad;}
          .spin-in-80rad{--una-enter-rotate:80rad;}
          .spin-in-80turn{--una-enter-rotate:80turn;}
          .spin-in-90deg{--una-enter-rotate:90deg;}
          .spin-in-90grad{--una-enter-rotate:90grad;}
          .spin-in-90rad{--una-enter-rotate:90rad;}
          .spin-in-90turn{--una-enter-rotate:90turn;}"
        `)
      })


      it(`should not use any unit for "0"`, async () => {
        const classnames = [
          'spin-in-0',
          'spin-in-0deg',
          'spin-in-0rad',
          'spin-in-0grad',
          'spin-in-0turn',
        ]

        const { matched, css } = await uno.generate(classnames)

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .spin-in-0,
          .spin-in-0deg,
          .spin-in-0grad,
          .spin-in-0rad,
          .spin-in-0turn{--una-enter-rotate:0;}"
        `)
      })
    })


    describe('css variable', () => {
      it(`should handle css variables`, async () => {
        const classnames = CSS_VARIABLES.map(i => `spin-in-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .spin-in-\\$foo{--una-enter-rotate:var(--foo);}
          .spin-in-\\$foo-bar{--una-enter-rotate:var(--foo-bar);}
          .spin-in-\\$fooBar{--una-enter-rotate:var(--fooBar);}"
        `)
      })
    })
  })


  describe('spin-out', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-exit-rotate" css variable and default to "30deg"`, async () => {
      const { css } = await uno.generate('spin-out')

      expect(css).toContain(`.spin-out{${CSS_VARIABLE_PREFIX}-exit-rotate:30deg;}`)
    })


    describe('angle', () => {
      it(`should handle any numbers including negative and unit default to "deg"`, async () => {
        const classnames = INTEGERS.map(i => `spin-out-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .spin-out--10{--una-exit-rotate:-10deg;}
          .spin-out--100{--una-exit-rotate:-100deg;}
          .spin-out--110{--una-exit-rotate:-110deg;}
          .spin-out--120{--una-exit-rotate:-120deg;}
          .spin-out--130{--una-exit-rotate:-130deg;}
          .spin-out--140{--una-exit-rotate:-140deg;}
          .spin-out--150{--una-exit-rotate:-150deg;}
          .spin-out--160{--una-exit-rotate:-160deg;}
          .spin-out--170{--una-exit-rotate:-170deg;}
          .spin-out--180{--una-exit-rotate:-180deg;}
          .spin-out--190{--una-exit-rotate:-190deg;}
          .spin-out--20{--una-exit-rotate:-20deg;}
          .spin-out--200{--una-exit-rotate:-200deg;}
          .spin-out--30{--una-exit-rotate:-30deg;}
          .spin-out--40{--una-exit-rotate:-40deg;}
          .spin-out--50{--una-exit-rotate:-50deg;}
          .spin-out--60{--una-exit-rotate:-60deg;}
          .spin-out--70{--una-exit-rotate:-70deg;}
          .spin-out--80{--una-exit-rotate:-80deg;}
          .spin-out--90{--una-exit-rotate:-90deg;}
          .spin-out-0{--una-exit-rotate:0;}
          .spin-out-10{--una-exit-rotate:10deg;}
          .spin-out-100{--una-exit-rotate:100deg;}
          .spin-out-110{--una-exit-rotate:110deg;}
          .spin-out-120{--una-exit-rotate:120deg;}
          .spin-out-130{--una-exit-rotate:130deg;}
          .spin-out-140{--una-exit-rotate:140deg;}
          .spin-out-150{--una-exit-rotate:150deg;}
          .spin-out-160{--una-exit-rotate:160deg;}
          .spin-out-170{--una-exit-rotate:170deg;}
          .spin-out-180{--una-exit-rotate:180deg;}
          .spin-out-190{--una-exit-rotate:190deg;}
          .spin-out-20{--una-exit-rotate:20deg;}
          .spin-out-200{--una-exit-rotate:200deg;}
          .spin-out-30{--una-exit-rotate:30deg;}
          .spin-out-40{--una-exit-rotate:40deg;}
          .spin-out-50{--una-exit-rotate:50deg;}
          .spin-out-60{--una-exit-rotate:60deg;}
          .spin-out-70{--una-exit-rotate:70deg;}
          .spin-out-80{--una-exit-rotate:80deg;}
          .spin-out-90{--una-exit-rotate:90deg;}"
        `)
      })


      it(`should also handle decimals including negative`, async () => {
        const classnames = DECIMALS.map(i => `spin-out-${i}`)

        const { css } = await uno.generate(classnames.join(' '))

        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .spin-out--0\\.1{--una-exit-rotate:-0.1deg;}
          .spin-out--10\\.1{--una-exit-rotate:-10.1deg;}
          .spin-out--180\\.37{--una-exit-rotate:-180.37deg;}
          .spin-out--199\\.9{--una-exit-rotate:-199.9deg;}
          .spin-out--52\\.1{--una-exit-rotate:-52.1deg;}
          .spin-out--66\\.66{--una-exit-rotate:-66.66deg;}
          .spin-out-0\\.1{--una-exit-rotate:0.1deg;}
          .spin-out-10\\.1{--una-exit-rotate:10.1deg;}
          .spin-out-180\\.37{--una-exit-rotate:180.37deg;}
          .spin-out-199\\.9{--una-exit-rotate:199.9deg;}
          .spin-out-52\\.1{--una-exit-rotate:52.1deg;}
          .spin-out-66\\.66{--una-exit-rotate:66.66deg;}
          .spin-out-99\\.9{--una-exit-rotate:99.9deg;}"
        `)
      })


      it(`should use units ("deg", "rad", "grad", "turn") as is`, async () => {
        const DATASET = INTEGERS.filter(Boolean)

        const classnames = [
          ...DATASET.map(i => `spin-out-${i}deg`),
          ...DATASET.map(i => `spin-out-${i}rad`),
          ...DATASET.map(i => `spin-out-${i}grad`),
          ...DATASET.map(i => `spin-out-${i}turn`),
        ]

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .spin-out--100deg{--una-exit-rotate:-100deg;}
          .spin-out--100grad{--una-exit-rotate:-100grad;}
          .spin-out--100rad{--una-exit-rotate:-100rad;}
          .spin-out--100turn{--una-exit-rotate:-100turn;}
          .spin-out--10deg{--una-exit-rotate:-10deg;}
          .spin-out--10grad{--una-exit-rotate:-10grad;}
          .spin-out--10rad{--una-exit-rotate:-10rad;}
          .spin-out--10turn{--una-exit-rotate:-10turn;}
          .spin-out--110deg{--una-exit-rotate:-110deg;}
          .spin-out--110grad{--una-exit-rotate:-110grad;}
          .spin-out--110rad{--una-exit-rotate:-110rad;}
          .spin-out--110turn{--una-exit-rotate:-110turn;}
          .spin-out--120deg{--una-exit-rotate:-120deg;}
          .spin-out--120grad{--una-exit-rotate:-120grad;}
          .spin-out--120rad{--una-exit-rotate:-120rad;}
          .spin-out--120turn{--una-exit-rotate:-120turn;}
          .spin-out--130deg{--una-exit-rotate:-130deg;}
          .spin-out--130grad{--una-exit-rotate:-130grad;}
          .spin-out--130rad{--una-exit-rotate:-130rad;}
          .spin-out--130turn{--una-exit-rotate:-130turn;}
          .spin-out--140deg{--una-exit-rotate:-140deg;}
          .spin-out--140grad{--una-exit-rotate:-140grad;}
          .spin-out--140rad{--una-exit-rotate:-140rad;}
          .spin-out--140turn{--una-exit-rotate:-140turn;}
          .spin-out--150deg{--una-exit-rotate:-150deg;}
          .spin-out--150grad{--una-exit-rotate:-150grad;}
          .spin-out--150rad{--una-exit-rotate:-150rad;}
          .spin-out--150turn{--una-exit-rotate:-150turn;}
          .spin-out--160deg{--una-exit-rotate:-160deg;}
          .spin-out--160grad{--una-exit-rotate:-160grad;}
          .spin-out--160rad{--una-exit-rotate:-160rad;}
          .spin-out--160turn{--una-exit-rotate:-160turn;}
          .spin-out--170deg{--una-exit-rotate:-170deg;}
          .spin-out--170grad{--una-exit-rotate:-170grad;}
          .spin-out--170rad{--una-exit-rotate:-170rad;}
          .spin-out--170turn{--una-exit-rotate:-170turn;}
          .spin-out--180deg{--una-exit-rotate:-180deg;}
          .spin-out--180grad{--una-exit-rotate:-180grad;}
          .spin-out--180rad{--una-exit-rotate:-180rad;}
          .spin-out--180turn{--una-exit-rotate:-180turn;}
          .spin-out--190deg{--una-exit-rotate:-190deg;}
          .spin-out--190grad{--una-exit-rotate:-190grad;}
          .spin-out--190rad{--una-exit-rotate:-190rad;}
          .spin-out--190turn{--una-exit-rotate:-190turn;}
          .spin-out--200deg{--una-exit-rotate:-200deg;}
          .spin-out--200grad{--una-exit-rotate:-200grad;}
          .spin-out--200rad{--una-exit-rotate:-200rad;}
          .spin-out--200turn{--una-exit-rotate:-200turn;}
          .spin-out--20deg{--una-exit-rotate:-20deg;}
          .spin-out--20grad{--una-exit-rotate:-20grad;}
          .spin-out--20rad{--una-exit-rotate:-20rad;}
          .spin-out--20turn{--una-exit-rotate:-20turn;}
          .spin-out--30deg{--una-exit-rotate:-30deg;}
          .spin-out--30grad{--una-exit-rotate:-30grad;}
          .spin-out--30rad{--una-exit-rotate:-30rad;}
          .spin-out--30turn{--una-exit-rotate:-30turn;}
          .spin-out--40deg{--una-exit-rotate:-40deg;}
          .spin-out--40grad{--una-exit-rotate:-40grad;}
          .spin-out--40rad{--una-exit-rotate:-40rad;}
          .spin-out--40turn{--una-exit-rotate:-40turn;}
          .spin-out--50deg{--una-exit-rotate:-50deg;}
          .spin-out--50grad{--una-exit-rotate:-50grad;}
          .spin-out--50rad{--una-exit-rotate:-50rad;}
          .spin-out--50turn{--una-exit-rotate:-50turn;}
          .spin-out--60deg{--una-exit-rotate:-60deg;}
          .spin-out--60grad{--una-exit-rotate:-60grad;}
          .spin-out--60rad{--una-exit-rotate:-60rad;}
          .spin-out--60turn{--una-exit-rotate:-60turn;}
          .spin-out--70deg{--una-exit-rotate:-70deg;}
          .spin-out--70grad{--una-exit-rotate:-70grad;}
          .spin-out--70rad{--una-exit-rotate:-70rad;}
          .spin-out--70turn{--una-exit-rotate:-70turn;}
          .spin-out--80deg{--una-exit-rotate:-80deg;}
          .spin-out--80grad{--una-exit-rotate:-80grad;}
          .spin-out--80rad{--una-exit-rotate:-80rad;}
          .spin-out--80turn{--una-exit-rotate:-80turn;}
          .spin-out--90deg{--una-exit-rotate:-90deg;}
          .spin-out--90grad{--una-exit-rotate:-90grad;}
          .spin-out--90rad{--una-exit-rotate:-90rad;}
          .spin-out--90turn{--una-exit-rotate:-90turn;}
          .spin-out-100deg{--una-exit-rotate:100deg;}
          .spin-out-100grad{--una-exit-rotate:100grad;}
          .spin-out-100rad{--una-exit-rotate:100rad;}
          .spin-out-100turn{--una-exit-rotate:100turn;}
          .spin-out-10deg{--una-exit-rotate:10deg;}
          .spin-out-10grad{--una-exit-rotate:10grad;}
          .spin-out-10rad{--una-exit-rotate:10rad;}
          .spin-out-10turn{--una-exit-rotate:10turn;}
          .spin-out-110deg{--una-exit-rotate:110deg;}
          .spin-out-110grad{--una-exit-rotate:110grad;}
          .spin-out-110rad{--una-exit-rotate:110rad;}
          .spin-out-110turn{--una-exit-rotate:110turn;}
          .spin-out-120deg{--una-exit-rotate:120deg;}
          .spin-out-120grad{--una-exit-rotate:120grad;}
          .spin-out-120rad{--una-exit-rotate:120rad;}
          .spin-out-120turn{--una-exit-rotate:120turn;}
          .spin-out-130deg{--una-exit-rotate:130deg;}
          .spin-out-130grad{--una-exit-rotate:130grad;}
          .spin-out-130rad{--una-exit-rotate:130rad;}
          .spin-out-130turn{--una-exit-rotate:130turn;}
          .spin-out-140deg{--una-exit-rotate:140deg;}
          .spin-out-140grad{--una-exit-rotate:140grad;}
          .spin-out-140rad{--una-exit-rotate:140rad;}
          .spin-out-140turn{--una-exit-rotate:140turn;}
          .spin-out-150deg{--una-exit-rotate:150deg;}
          .spin-out-150grad{--una-exit-rotate:150grad;}
          .spin-out-150rad{--una-exit-rotate:150rad;}
          .spin-out-150turn{--una-exit-rotate:150turn;}
          .spin-out-160deg{--una-exit-rotate:160deg;}
          .spin-out-160grad{--una-exit-rotate:160grad;}
          .spin-out-160rad{--una-exit-rotate:160rad;}
          .spin-out-160turn{--una-exit-rotate:160turn;}
          .spin-out-170deg{--una-exit-rotate:170deg;}
          .spin-out-170grad{--una-exit-rotate:170grad;}
          .spin-out-170rad{--una-exit-rotate:170rad;}
          .spin-out-170turn{--una-exit-rotate:170turn;}
          .spin-out-180deg{--una-exit-rotate:180deg;}
          .spin-out-180grad{--una-exit-rotate:180grad;}
          .spin-out-180rad{--una-exit-rotate:180rad;}
          .spin-out-180turn{--una-exit-rotate:180turn;}
          .spin-out-190deg{--una-exit-rotate:190deg;}
          .spin-out-190grad{--una-exit-rotate:190grad;}
          .spin-out-190rad{--una-exit-rotate:190rad;}
          .spin-out-190turn{--una-exit-rotate:190turn;}
          .spin-out-200deg{--una-exit-rotate:200deg;}
          .spin-out-200grad{--una-exit-rotate:200grad;}
          .spin-out-200rad{--una-exit-rotate:200rad;}
          .spin-out-200turn{--una-exit-rotate:200turn;}
          .spin-out-20deg{--una-exit-rotate:20deg;}
          .spin-out-20grad{--una-exit-rotate:20grad;}
          .spin-out-20rad{--una-exit-rotate:20rad;}
          .spin-out-20turn{--una-exit-rotate:20turn;}
          .spin-out-30deg{--una-exit-rotate:30deg;}
          .spin-out-30grad{--una-exit-rotate:30grad;}
          .spin-out-30rad{--una-exit-rotate:30rad;}
          .spin-out-30turn{--una-exit-rotate:30turn;}
          .spin-out-40deg{--una-exit-rotate:40deg;}
          .spin-out-40grad{--una-exit-rotate:40grad;}
          .spin-out-40rad{--una-exit-rotate:40rad;}
          .spin-out-40turn{--una-exit-rotate:40turn;}
          .spin-out-50deg{--una-exit-rotate:50deg;}
          .spin-out-50grad{--una-exit-rotate:50grad;}
          .spin-out-50rad{--una-exit-rotate:50rad;}
          .spin-out-50turn{--una-exit-rotate:50turn;}
          .spin-out-60deg{--una-exit-rotate:60deg;}
          .spin-out-60grad{--una-exit-rotate:60grad;}
          .spin-out-60rad{--una-exit-rotate:60rad;}
          .spin-out-60turn{--una-exit-rotate:60turn;}
          .spin-out-70deg{--una-exit-rotate:70deg;}
          .spin-out-70grad{--una-exit-rotate:70grad;}
          .spin-out-70rad{--una-exit-rotate:70rad;}
          .spin-out-70turn{--una-exit-rotate:70turn;}
          .spin-out-80deg{--una-exit-rotate:80deg;}
          .spin-out-80grad{--una-exit-rotate:80grad;}
          .spin-out-80rad{--una-exit-rotate:80rad;}
          .spin-out-80turn{--una-exit-rotate:80turn;}
          .spin-out-90deg{--una-exit-rotate:90deg;}
          .spin-out-90grad{--una-exit-rotate:90grad;}
          .spin-out-90rad{--una-exit-rotate:90rad;}
          .spin-out-90turn{--una-exit-rotate:90turn;}"
        `)
      })


      it(`should not use any unit for "0"`, async () => {
        const classnames = [
          'spin-out-0',
          'spin-out-0deg',
          'spin-out-0rad',
          'spin-out-0grad',
          'spin-out-0turn',
        ]

        const { matched, css } = await uno.generate(classnames)

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .spin-out-0,
          .spin-out-0deg,
          .spin-out-0grad,
          .spin-out-0rad,
          .spin-out-0turn{--una-exit-rotate:0;}"
        `)
      })
    })


    describe('css variable', () => {
      it(`should handle css variables`, async () => {
        const classnames = CSS_VARIABLES.map(i => `spin-out-${i}`)

        const { matched, css } = await uno.generate(classnames.join(' '))

        expect(matched).toStrictEqual(new Set(classnames))
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .spin-out-\\$foo{--una-exit-rotate:var(--foo);}
          .spin-out-\\$foo-bar{--una-exit-rotate:var(--foo-bar);}
          .spin-out-\\$fooBar{--una-exit-rotate:var(--fooBar);}"
        `)
      })
    })
  })
})
