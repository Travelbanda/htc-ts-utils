import { fake, stub } from 'sinon'
import * as assert from 'assert'

import { getObject, getString, removeItem, setObject, setString } from '../src'

const a = { a: 1, b: 2 }
const ri = fake()
let si = fake()
let isError = false

describe('utils/localStorage', () => {

  (global as any).localStorage = {
    setItem: si,
    getItem: () => {
    },
    removeItem: ri,
    asd: a
  }

  stub((global as any).localStorage, 'getItem').callsFake(() => {
      if (isError) {
        throw new Error()
      }
      return JSON.stringify(a)
    }
  )

  it('setString', () => {
    setString('asd', 'qwe')
    assert(si.calledWith('asd', 'qwe'))
  })

  it('getString', () => {
    assert.strictEqual(getString('asd'), '{"a":1,"b":2}')
  })

  describe('object', () => {

    it('setObject', () => {
      setObject('asd', a)
      assert(si.calledWith('asd', JSON.stringify(a)))
    })


    it('getObject', () => {
      assert.strictEqual(JSON.stringify(getObject('asd')), JSON.stringify(a))
    })
  })

  it('removeItem', () => {
    removeItem('asd')
    assert(ri.calledOnce)
    assert(ri.calledWith('asd'))
  })

  it('getItem error', () => {
    isError = true
    assert.strictEqual(getString('asd'), '')
    isError = false
  })
})
