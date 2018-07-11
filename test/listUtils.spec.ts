import { deepStrictEqual } from 'assert'

import { sliceArray } from '../src'

describe('utils/listUtils', () => {
  describe('sliceArray()', () => {
    it('not smooth', () => {

      deepStrictEqual(sliceArray([], 5), [])
      deepStrictEqual(sliceArray([1, 2, 3, 4], 3), [[1, 2, 3], [4]])
    })

    it('smooth', () => {
      deepStrictEqual(sliceArray([], 5), [])
      deepStrictEqual(sliceArray([1, 2, 3, 4], 3, true), [[1, 2], [3, 4]])
    })
  })
})
