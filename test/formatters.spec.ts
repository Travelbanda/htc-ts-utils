import { strictEqual } from 'assert'
import { stringFormatter } from '../src'

describe('utils/formatters', () => {
  it('stringFormatter() - empty string', () => {
    strictEqual(stringFormatter(''), '')
  })

  it('stringFormatter() - string of spaces', () => {
    strictEqual(stringFormatter('   '), '')
  })

  it('stringFormatter() - trim check', () => {
    strictEqual(stringFormatter('  a  '), 'a')
  })

  it('stringFormatter() - internal spaces check', () => {
    strictEqual(stringFormatter('a b  c'), 'a b c')
  })

  it('stringFormatter() - aside + internal spaces', () => {
    strictEqual(stringFormatter(' a  b   c  '), 'a b c')
  })

  it('stringFormatter() - no spaces', () => {
    strictEqual(stringFormatter('abc'), 'abc')
  })
})
