// tslint:disable:no-expression-statement

export function diff<T>(...arrs: T[][]): T[] {
  const len = arguments.length
  let arr: T[] = arrs[0]
  let idx: number = 0
  while (++idx < len) {
    arr = diffArray(arr, arguments[idx])
    console.log('arr', arr)
  }
  return arr
}

function diffArray<T>(one: T[], two: T[]): T[] {
  const tlen = two.length
  const olen = one.length
  let idx = -1
  const arr: T[] = []

  while (++idx < olen) {
    const ele = one[idx]

    let hasEle = false
    for (let i = 0; i < tlen; i++) {
      const val = two[i]

      if (ele === val) {
        hasEle = true
        break
      }
    }
    if (hasEle === false) {
      arr.push(ele)
    }
  }
  return arr
}

console.log(diff([1,2,3], [2]))