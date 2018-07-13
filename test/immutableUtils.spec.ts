import { strictEqual, deepStrictEqual } from 'assert'
import { Map as IMap } from 'immutable'

import { mergeArrayToMap } from '../src'

describe('utils/immutableUtils', () => {
  const one = { id: 'a', ind: 123 }
  const two = { id: 'b', ind: 41 }
  const anotherTwo = { id: 'b', ind: 4646 }
  const three = { id: 'c', ind: 123 }

  it('mergeArrayToMap into empty map', () => {
    const imap = IMap()

    const nMap = mergeArrayToMap([one, two], imap as any)


    deepStrictEqual(nMap.get(one.id), one)
    deepStrictEqual(nMap.get(two.id), two)
    strictEqual(nMap.size, 2)
  })

  it('mergeArrayToMap into map', () => {
    const imap = IMap({ a: one })

    const nMap = mergeArrayToMap([two, three], imap)


    deepStrictEqual(nMap.get(two.id), two)
    deepStrictEqual(nMap.get(three.id), three)
    strictEqual(nMap.size, 3)
  })

  it('mergeArrayToMap into map new value for key', () => {
    const imap = IMap({ a: one,  b: two })

    const nMap = mergeArrayToMap([anotherTwo], imap)


    deepStrictEqual(nMap.get(one.id), one)
    deepStrictEqual(nMap.get(two.id), anotherTwo)
    strictEqual(nMap.size, 2)
  })

})