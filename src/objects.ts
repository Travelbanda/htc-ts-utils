export function filterObject<T extends { [o: string]: any }>(obj: T) {
  const ret: T = {} as any

  Object.keys(obj)
    .filter((key) => obj[key] !== undefined)
    .forEach((key) => ret[key] = obj[key])

  return ret
}
