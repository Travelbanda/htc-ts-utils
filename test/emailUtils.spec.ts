import { describe, it } from 'mocha'
import { strictEqual } from "assert"
import { validateEmail } from '../src'

describe('utils/uiUtils', () => {
  it('validateEmail', () => {
    strictEqual(validateEmail('qwe@qwe'), true)
    strictEqual(validateEmail('qwe@qqwe.ru'), true)
    strictEqual(validateEmail('123qwe,123@da'), true)
    strictEqual(validateEmail('123qwe@qwe.qweqwe'), true)
    strictEqual(validateEmail('@ad.ru'), false)
  })
})