import { describe, it } from 'mocha'
import { strictEqual } from 'assert'
import { isScrollbarVisible, scrollDistanceToBottom, moveCaretToTheEnd } from '../src'

describe('utils/uiUtils', () => {
    it('isScrollbarVisible()', () => {
      const e = {
        scrollHeight: 2000,
        clientHeight: 150,
      }
      strictEqual(isScrollbarVisible(e as HTMLElement), true)
    })

    it('scrollDistanceToBottom', () => {
      const e = {
        scrollHeight: 2000,
        clientHeight: 200,
        scrollTop: 1000,
      }
      strictEqual(scrollDistanceToBottom(e as HTMLElement), 800)
    })

    it('moveCaretToTheEnd', () => {
      const el = {
        value: 'qweqwe'
      }
      moveCaretToTheEnd(el as HTMLInputElement, 'text')
      strictEqual(el.value, 'text')
    })
})