import { describe, it } from 'vitest'
import { uno } from '~/utils'


describe.concurrent('layer', () => {
  it('"animate-in" should be generated under "una-base" layer, and everything else to the "default" layer', async ({ expect }) => {
    const { css } = await uno.generate('animate-in fade-in-50')

    expect(css).toMatchInlineSnapshot(`
      "/* layer: una-base */
      .animate-in{animation:una-in;animation-name:una-in;animation-duration:150ms;--una-enter-opacity:initial;--una-enter-scale:initial;--una-enter-rotate:initial;--una-enter-translate-x:initial;--una-enter-translate-y:initial;}
      /* layer: default */
      @keyframes una-in{from{opacity:var(--una-enter-opacity,1);transform:translate3d(var(--una-enter-translate-x,0),var(--una-enter-translate-y,0),0) scale3d(var(--una-enter-scale,1),var(--una-enter-scale,1),var(--una-enter-scale,1)) rotate(var(--una-enter-rotate,0))}}
      .fade-in-50{--una-enter-opacity:0.5;}"
    `)
  })


  it('"animate-out" should be generated under "una-base" layer, and everything else to the "default" layer', async ({ expect }) => {
    const { css } = await uno.generate('animate-out fade-out-50')

    expect(css).toMatchInlineSnapshot(`
      "/* layer: una-base */
      .animate-out{animation:una-out;animation-name:una-out;animation-duration:150ms;--una-exit-opacity:initial;--una-exit-scale:initial;--una-exit-rotate:initial;--una-exit-translate-x:initial;--una-exit-translate-y:initial;}
      /* layer: default */
      @keyframes una-out{to{opacity:var(--una-exit-opacity,1);transform:translate3d(var(--una-exit-translate-x,0),var(--una-exit-translate-y,0),0) scale3d(var(--una-exit-scale,1),var(--una-exit-scale,1),var(--una-exit-scale,1)) rotate(var(--una-exit-rotate,0))}}
      .fade-out-50{--una-exit-opacity:0.5;}"
    `)
  })
})
