import slice from 'array-slice'

export function arrayFirst<T>(arr: T[], num: number): T {
  if (arr.length === 0) {
    return null
  }

  const first = slice(arr, 0, +num)
  if (+num === 1 || num == null) {
    return first[0]
  }
  return first
}
