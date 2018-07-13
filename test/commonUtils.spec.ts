import { strictEqual } from 'assert'
import { NOOP } from '../src'

describe('utils/commonUtils', () => {
  it('NOOP()', () => {
    strictEqual(NOOP(), undefined)
  })
})