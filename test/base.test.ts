import { describe, it } from 'vitest'
import { generator, uno } from '~/utils'


describe.concurrent('base classname', () => {
  it('"animate-in" should generate enter keyframe and css variables', async ({ expect }) => {
    const { css } = await uno.generate('animate-in')

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @keyframes una-in{from{opacity:var(--una-enter-opacity,1);transform:translate3d(var(--una-enter-translate-x,0),var(--una-enter-translate-y,0),0) scale3d(var(--una-enter-scale,1),var(--una-enter-scale,1),var(--una-enter-scale,1)) rotate(var(--una-enter-rotate,0))}}
      .animate-in{animation:una-in;animation-name:una-in;animation-duration:150ms;--una-enter-opacity:initial;--una-enter-scale:initial;--una-enter-rotate:initial;--una-enter-translate-x:initial;--una-enter-translate-y:initial;}"
    `)
  })


  it('"animate-out" should generate exit keyframe and css variables', async ({ expect }) => {
    const { css } = await uno.generate('animate-out')

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @keyframes una-out{to{opacity:var(--una-exit-opacity,1);transform:translate3d(var(--una-exit-translate-x,0),var(--una-exit-translate-y,0),0) scale3d(var(--una-exit-scale,1),var(--una-exit-scale,1),var(--una-exit-scale,1)) rotate(var(--una-exit-rotate,0))}}
      .animate-out{animation:una-out;animation-name:una-out;animation-duration:150ms;--una-exit-opacity:initial;--una-exit-scale:initial;--una-exit-rotate:initial;--una-exit-translate-x:initial;--una-exit-translate-y:initial;}"
    `)
  })


  it('"animation-duration" should be default to "theme.duration"', async ({ expect }) => {
    const DURATION = '500ms'

    const uno = generator({ duration: { DEFAULT: DURATION } })
    const { css } = await uno.generate('animate-in')

    expect(css).toContain(`animation-duration:${DURATION};`)
  })
})
