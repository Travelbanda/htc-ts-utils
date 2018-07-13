import { strictEqual } from 'assert'
import { isScrollbarVisible, scrollDistanceToBottom, moveCaretToTheEnd } from '../src'

describe('utils/uiUtils', () => {
    it('isScrollbarVisible()', () => {
      const e = {
        scrollHeight: 2000,
        clientHeight: 150,
      }
      strictEqual(isScrollbarVisible(e), true)
    })

    it('scrollDistanceToBottom', () => {
      const e = {
        scrollHeight: 2000,
        clientHeight: 200,
        scrollTop: 1000,
      }
      strictEqual(scrollDistanceToBottom(e), 800)
    })

    it('moveCaretToTheEnd', () => {
      const el = {
        value: 'qweqwe'
      }
      moveCaretToTheEnd(el, 'text')
      strictEqual(el.value, 'text')
    })

    it('moveCaretToTheEnd empty text', () => {
      const el = {
        value: 'asd'
      }
      moveCaretToTheEnd(el, '')
      strictEqual(el.value, 'asd')
    })
})