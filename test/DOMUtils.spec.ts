import { strictEqual } from "assert"
import { getFileFromInput } from '../src'

describe('utils/domUtils', () => {
  it('getFileFromInput', () => {
    strictEqual(getFileFromInput({}), null)
  })

  it('getFileFromInput', () => {
    const i = {files: []}
    strictEqual(getFileFromInput(i), null)
  })

  it('getFileFromInput', () => {
    const file ={} as any
    const i = {files: [file]}
    strictEqual(getFileFromInput(i), file)
  })
})