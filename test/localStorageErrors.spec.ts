import { fake, stub } from 'sinon'
import * as assert from 'assert'
import { getString } from '../src'

const a = { a: 1, b: 2 }
const ri = fake()
let si = fake()

describe('localStorageErrors', () => {
  
  (global as any).localStorage = {
    setItem: si,
    getItem: () => {
    },
    removeItem: ri,
    asd: a
  }
  stub((global as any).localStorage, 'getItem').throws()

  it('getItem error', () => {
    assert.strictEqual(getString('asd'), '')
  })

})