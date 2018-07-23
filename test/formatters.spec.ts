import { strictEqual } from 'assert'
import { trimSpaces } from '../src'

describe('utils/formatters', () => {
  it('trimSpaces() - empty string', () => {
    strictEqual(trimSpaces(''), '')
  })

  it('trimSpaces() - string of spaces', () => {
    strictEqual(trimSpaces('   '), '')
  })

  it('trimSpaces() - trim check', () => {
    strictEqual(trimSpaces('  a  '), 'a')
  })

  it('trimSpaces() - internal spaces check', () => {
    strictEqual(trimSpaces('a b  c'), 'a b c')
  })

  it('trimSpaces() - aside + internal spaces', () => {
    strictEqual(trimSpaces(' a  b   c  '), 'a b c')
  })

  it('trimSpaces() - no spaces', () => {
    strictEqual(trimSpaces('abc'), 'abc')
  })
})
