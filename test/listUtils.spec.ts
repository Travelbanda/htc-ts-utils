import { deepStrictEqual } from 'assert'

import { sliceArray, sortUniq } from '../src'

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

  describe('sortUniq()', () => {
    it('sortUniq', () => {

      deepStrictEqual(sortUniq([15, 2, 0, 12, 124, -12, 1, 414, -100, 2, 2, 0, 15, 1, 14, 414]),
        [ -100, -12, 0, 1, 12, 124, 14, 15, 2, 414 ])
    })
  })
})
