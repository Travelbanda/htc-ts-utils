import { strictEqual } from 'assert'

import { getFileFromInput } from '../src'

describe('utils/domUtils', () => {
  describe('getFileFromInput()', () => {
    it('undefined', () => {
      strictEqual(getFileFromInput({}), null)
    })

    it('empty array', () => {
      const i = {files: []}
      strictEqual(getFileFromInput(i), null)
    })

    it('not empty', () => {
      const file ={} as any
      const i = {files: [file]}
      strictEqual(getFileFromInput(i), file)
    })

    it('FileList typing', () => {
      const i = {files: [] as any as FileList}
      strictEqual(getFileFromInput(i), null)
    })
  })
})
