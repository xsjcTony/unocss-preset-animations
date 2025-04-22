import type { PresetAnimationsOptions } from '@/index'
import { describe, it } from 'vitest'
import { generator, uno } from '~/utils'


describe.concurrent('base', () => {
  describe('animate classnames', () => {
    it('"animate-in" should generate enter keyframe and css variables', async ({ expect }) => {
      const { css } = await uno.generate('animate-in')

      expect(css).toMatchInlineSnapshot(`
        "/* layer: una-base */
        .animate-in{animation:una-in;animation-name:una-in;animation-duration:150ms;--una-enter-opacity:initial;--una-enter-scale:initial;--una-enter-rotate:initial;--una-enter-translate-x:initial;--una-enter-translate-y:initial;}
        /* layer: default */
        @keyframes una-in{from{opacity:var(--una-enter-opacity,1);transform:translate3d(var(--una-enter-translate-x,0),var(--una-enter-translate-y,0),0) scale3d(var(--una-enter-scale,1),var(--una-enter-scale,1),var(--una-enter-scale,1)) rotate(var(--una-enter-rotate,0))}}"
      `)
    })


    it('"animate-out" should generate exit keyframe and css variables', async ({ expect }) => {
      const { css } = await uno.generate('animate-out')

      expect(css).toMatchInlineSnapshot(`
        "/* layer: una-base */
        .animate-out{animation:una-out;animation-name:una-out;animation-duration:150ms;--una-exit-opacity:initial;--una-exit-scale:initial;--una-exit-rotate:initial;--una-exit-translate-x:initial;--una-exit-translate-y:initial;}
        /* layer: default */
        @keyframes una-out{to{opacity:var(--una-exit-opacity,1);transform:translate3d(var(--una-exit-translate-x,0),var(--una-exit-translate-y,0),0) scale3d(var(--una-exit-scale,1),var(--una-exit-scale,1),var(--una-exit-scale,1)) rotate(var(--una-exit-rotate,0))}}"
      `)
    })
  })


  it('"animation-duration" should be default to "theme.duration"', async ({ expect }) => {
    const DURATION = '500ms'

    const uno = await generator({ theme: { duration: { DEFAULT: DURATION } } })
    const { css } = await uno.generate('animate-in')

    expect(css).toContain(`animation-duration:${DURATION};`)
  })


  describe('options', () => {
    const DEFAULT_UNIT = 'ms'


    describe('unit', () => {
      it('should respect the given value', async ({ expect }) => {
        const DURATION = 500
        const UNIT: NonNullable<PresetAnimationsOptions['unit']> = 's'

        const uno = await generator({ presetOptions: { unit: UNIT, duration: DURATION } })
        const { css } = await uno.generate('animate-in')

        expect(css).toContain(`animation-duration:${DURATION}${UNIT}`)
      })


      it('should default to "ms" if no unit is provided', async ({ expect }) => {
        const DURATION = 500

        const uno = await generator({ presetOptions: { duration: DURATION } })
        const { css } = await uno.generate('animate-in')

        expect(css).toContain(`animation-duration:${DURATION}${DEFAULT_UNIT}`)
      })
    })


    describe('delay', () => {
      it('should generate "animation-delay" based on given value', async ({ expect }) => {
        const DELAY = 100

        const uno = await generator({ presetOptions: { delay: DELAY } })
        const { css } = await uno.generate('animate-in')

        expect(css).toContain(`animation-delay:${DELAY}${DEFAULT_UNIT}`)
      })


      it('should not generate "animation-delay" if no value is provided', async ({ expect }) => {
        const { css } = await uno.generate('animate-in')

        expect(css).not.toContain('animation-delay')
      })
    })


    describe('direction', () => {
      it('should generate "animation-direction" based on given value', async ({ expect }) => {
        const DIRECTION: NonNullable<PresetAnimationsOptions['direction']> = 'reverse'

        const uno = await generator({ presetOptions: { direction: DIRECTION } })
        const { css } = await uno.generate('animate-in')

        expect(css).toContain(`animation-direction:${DIRECTION}`)
      })


      it('should not generate "animation-direction" if no value is provided', async ({ expect }) => {
        const { css } = await uno.generate('animate-in')

        expect(css).not.toContain('animation-direction')
      })
    })


    describe('duration', () => {
      it('should generate "animation-duration" based on given value', async ({ expect }) => {
        const DURATION = 100

        const uno = await generator({ presetOptions: { duration: DURATION } })
        const { css } = await uno.generate('animate-in')

        expect(css).toContain(`animation-duration:${DURATION}${DEFAULT_UNIT}`)
      })


      it('should fallback to default "animation-duration" if no value is provided', async ({ expect }) => {
        const { css } = await uno.generate('animate-in')

        expect(css).toContain('animation-duration')
      })
    })


    describe('fill-mode', () => {
      it('should generate "animation-fill-mode" based on given value', async ({ expect }) => {
        const FILL_MODE: NonNullable<PresetAnimationsOptions['fillMode']> = 'forwards'

        const uno = await generator({ presetOptions: { fillMode: FILL_MODE } })
        const { css } = await uno.generate('animate-in')

        expect(css).toContain(`animation-fill-mode:${FILL_MODE}`)
      })


      it('should not generate "animation-fill-mode" if no value is provided', async ({ expect }) => {
        const { css } = await uno.generate('animate-in')

        expect(css).not.toContain('animation-fill-mode')
      })
    })


    describe('iteration-count', () => {
      it('should generate "animation-iteration-count" based on given value', async ({ expect }) => {
        const ITERATION_COUNT = 3

        const uno = await generator({ presetOptions: { iterationCount: ITERATION_COUNT } })
        const { css } = await uno.generate('animate-in')

        expect(css).toContain(`animation-iteration-count:${ITERATION_COUNT}`)
      })


      it('should not generate "animation-iteration-count" if no value is provided', async ({ expect }) => {
        const { css } = await uno.generate('animate-in')

        expect(css).not.toContain('animation-iteration-count')
      })
    })


    describe('play-state', () => {
      it('should generate "animation-play-state" based on given value', async ({ expect }) => {
        const PLAY_STATE: NonNullable<PresetAnimationsOptions['playState']> = 'paused'

        const uno = await generator({ presetOptions: { playState: PLAY_STATE } })
        const { css } = await uno.generate('animate-in')

        expect(css).toContain(`animation-play-state:${PLAY_STATE}`)
      })


      it('should not generate "animation-play-state" if no value is provided', async ({ expect }) => {
        const { css } = await uno.generate('animate-in')

        expect(css).not.toContain('animation-play-state')
      })
    })


    describe('timing-function', () => {
      it('should generate "animation-timing-function" based on given value', async ({ expect }) => {
        const TIMING_FUNCTION: NonNullable<PresetAnimationsOptions['timingFunction']> = 'ease-in-out'

        const uno = await generator({ presetOptions: { timingFunction: TIMING_FUNCTION } })
        const { css } = await uno.generate('animate-in')

        expect(css).toContain(`animation-timing-function:${TIMING_FUNCTION}`)
      })


      it('should not generate "animation-timing-function" if no value is provided', async ({ expect }) => {
        const { css } = await uno.generate('animate-in')

        expect(css).not.toContain('animation-timing-function')
      })
    })
  })
})
