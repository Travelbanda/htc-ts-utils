import { strictEqual } from "assert"

import { validateEmail } from '../src'

describe('utils/uiUtils', () => {
  it('validateEmail', () => {
    strictEqual(validateEmail('qwe@qwe'), false)
    strictEqual(validateEmail('qwe@qqwe.ru'), true)
    strictEqual(validateEmail('123qwe,123@da'), false)
    strictEqual(validateEmail('123qwe,123@da.qwe'), true)
    strictEqual(validateEmail('123qwe@qwe.qweqwe'), true)
    strictEqual(validateEmail('@ad.ru'), false)
    strictEqual(validateEmail('ru'), false)
    strictEqual(validateEmail(new Array(200).join('x')), false)
  })
})
