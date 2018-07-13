import { deepStrictEqual } from 'assert'
import { filterObject } from '../src'

describe('utils/objectUtils', () => {
  it('filterObject()', () => {
    const obj = {
      a: 'a',
      b: 123,
      c: undefined,
      d: undefined,
      e: null,
      f: false,
    }
    deepStrictEqual(filterObject(obj), { a: 'a', b: 123, e: null, f: false })
  })
})