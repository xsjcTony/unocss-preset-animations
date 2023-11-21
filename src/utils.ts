export const normalizeDirection = (dir: string | undefined): string | undefined => {
  const dirMap: Record<string, string> = {
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right'
  }

  return dirMap[dir ?? ''] ?? dir
}
