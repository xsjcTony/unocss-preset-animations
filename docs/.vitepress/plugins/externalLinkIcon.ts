import type MarkdownIt from 'markdown-it'
import type { RenderRule } from 'markdown-it/lib/renderer.mjs'


const externalIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="0.9em">
  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
</svg>
`


function externalLinkIcon(md: MarkdownIt): void {
  const renderToken: RenderRule = (tokens, idx, options, env, self) =>
    self.renderToken(tokens, idx, options)

  const defaultLinkOpenRenderer = md.renderer.rules.link_open ?? renderToken
  const defaultLinkCloseRenderer = md.renderer.rules.link_close ?? renderToken

  let isExternalLink = false

  md.renderer.rules.link_open = (tokens, idx, options, env, self): string => {
    const token = tokens[idx]
    const href = token?.attrGet('href')

    if (href && /^((ht|f)tps?):\/\/?/.test(href)) {
      isExternalLink = true
      token?.attrSet('style', 'display: inline-flex; align-items: center; column-gap: .3em;')
    }

    return defaultLinkOpenRenderer(tokens, idx, options, env, self)
  }

  md.renderer.rules.link_close = (
    tokens,
    idx,
    options,
    env,
    self,
  ): string => {
    if (isExternalLink) {
      isExternalLink = false
      return `${externalIcon}${self.renderToken(tokens, idx, options)}`
    }

    return defaultLinkCloseRenderer(tokens, idx, options, env, self)
  }
}


export default externalLinkIcon
