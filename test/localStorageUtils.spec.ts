import { fake, stub } from 'sinon'
import * as assert from 'assert'

import { getObject, getString, removeItem, setObject, setString } from '../src'

const a = { a: 1, b: 2 }
const ri = fake()
let si = fake()

describe('utils/localStorage', () => {
  (global as any).localStorage = {
    setItem: si,
    getItem: () => {
    },
    removeItem: ri,
    asd: a
  }

  let stb = stub((global as any).localStorage, 'getItem')

  it('setString', () => {
    setString('asd', 'qwe')
    assert(si.calledWith('asd', 'qwe'))
  })

  it('getString', () => {
    stb.returns(JSON.stringify(a))
    assert.strictEqual(getString('asd'), '{"a":1,"b":2}')
  })

  it('setObject', () => {
    setObject('asd', a)
    assert(si.calledWith('asd', JSON.stringify(a)))
  })


  it('getObject', () => {
    stb.returns(JSON.stringify(a))
    assert.strictEqual(JSON.stringify(getObject('asd')), JSON.stringify(a))
  })

  it('removeItem', () => {
    removeItem('asd')
    assert(ri.calledOnce)
    assert(ri.calledWith('asd'))
  })

  it('getItem error', () => {
    stb.throws()
    assert.strictEqual(getString('asd'), '')
  })
})
