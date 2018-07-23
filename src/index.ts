import { Map as IMap } from 'immutable'

// common utils

/** @deprecated */
export const noop = () => {
}

export const NOOP = noop

// object utils

export function filterObject<T extends { [o: string]: any }>(obj: T) {
  const ret: T = {} as any

  Object.keys(obj)
    .filter((key) => obj[key] !== undefined)
    .forEach((key) => ret[key] = obj[key])

  return ret
}

// ui utils

export function isScrollbarVisible(el: { scrollHeight: number, clientHeight: number }) {
  return el.scrollHeight > el.clientHeight
}

export function scrollDistanceToBottom(el: { scrollTop: number, clientHeight: number, scrollHeight: number }) {
  const { scrollTop, clientHeight, scrollHeight } = el

  return scrollHeight - scrollTop - clientHeight
}

export const moveCaretToTheEnd = (i: { value: string }, text: string) => {
  if (text) {
    i.value = ''
    i.value = text
  }
}

// date utils

export function isSameDay(date1: Date, date2: Date): boolean {
  return (date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear())
}

export const serverTimeToDate = (seconds: number) => new Date(seconds * 1000)
export const dateTimeToServer = (d: Date) => Math.floor(d.getTime() / 1000)

export const daysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate()

export const dateFormat = 'DD.MM.YYYY'

export function createBirthdate(date: Date): Date {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
}

// email utils

export function validateEmail(email: string): boolean {
  if (email.length < 5 || email.length > 196 || !(/^[^@]+@[^@]+$/.test(email))) {
    return false
  }
  return true
}

// DOM utils

export function getFileFromInput<T>(input: { files?: ArrayLike<T> | null }): T | null {
  return input.files && input.files.length ? input.files[0] : null
}

// list utils

export const sliceArray = <T>(arr: T[], amount: number, smooth?: boolean) => {
  const res: T[][] = []
  if (arr.length) {
    if (smooth) {
      amount = Math.ceil(arr.length / Math.ceil(arr.length / amount))
    }
    for (let i = 0; i < arr.length; i += amount) {
      res.push(arr.slice(i, i + amount))
    }
  }
  return res
}

export const sortUniq = <T>(array: T[], compare?: () => number) => array
  .sort(compare)
  .filter((v, ind, arr) => !ind || arr[ind - 1] !== v)

export const getNewElements = <T>(oldArray: T[], newArray: T[]): T[] =>
  newArray.filter((element) => oldArray.indexOf(element) === -1)

export const getRemovedElements = <T>(oldArray: T[], newArray: T[]): T[] =>
  getNewElements(newArray, oldArray)

// local storage utils

const setItem = (key: string, obj: any) => {
  try {
    localStorage.setItem(key, obj)
  } catch {
    // nothing
  }
}
const getItem = (key: string) => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key)
  } catch {
    // nothing
  }
}

export const setObject = (key: string, obj: object) => {
  setItem(key, JSON.stringify(obj))
}

export type ISetString = (key: string, val: string) => void

export const setString: ISetString = (key, val) => {
  setItem(key, val)
}

export type IGetObject = (key: string) => object

export const getObject: IGetObject = (key) => {
  let result = null
  try {
    result = JSON.parse(localStorage.getItem(key) || '')
  } catch {
    // nothing
  }
  return result
}

export type IGetString = (key: string) => string

export const getString: IGetString = (key) => getItem(key) || ''

// immutable utils

export const mergeArrayToMap =
  <K, V extends { id: K }>(arr: ReadonlyArray<V>, map: IMap<K, V>) => map.withMutations((m) => {
    for (const el of arr) {
      m.set(el.id, el)
    }
  })

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
}

export type DeepPartialNullable<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartialNullable<T[P]> : T[P] | null
}


// formatters

export const stringFormatter = (s: string): string =>
  s.trim().replace(/\s+/g, ' ')
