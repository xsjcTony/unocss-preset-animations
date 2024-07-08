import { h } from '@unocss/preset-mini/utils'
import { DEFAULT_SLIDE_TRANSLATE } from '@/rules'


function normalizeDirection(dir: string | undefined): string | undefined {
  const dirMap: Record<string, string> = {
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
  }

  return dirMap[dir ?? ''] ?? dir
}


export function handleSlide(
  val: string | undefined,
  dir: string | undefined,
): [value?: string | undefined, direction?: string | undefined] {
  let value = h.cssvar.fraction.rem(val || DEFAULT_SLIDE_TRANSLATE)

  if (!value)
    return []

  dir = normalizeDirection(dir)

  if (!value.startsWith('var(--') && ['top', 'left'].includes(dir ?? '')) {
    if (value.startsWith('-'))
      value = value.slice(1)
    else if (value !== '0')
      value = `-${value}`
  }

  return [value, dir]
}
