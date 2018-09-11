import { strictEqual } from 'assert'

import { parseText, TextPartLink, TextTokenType } from '../src'

describe('utils/dateUtils', () => {
  it('onlyText()', () => {
    const text = 'Это обычный текст, тут нет никакого url'

    strictEqual(parseText(text).length, 1)
    strictEqual(parseText(text)[0].type, TextTokenType.TEXT)
    strictEqual(parseText(text)[0].content, text)
  })

  it('onlyEmail()', () => {
    const text = 'info@hotelchat.me'
    const parsing = parseText(text)

    strictEqual(parsing.length, 1)
    strictEqual(parsing[0].content, 'info@hotelchat.me')
    strictEqual((parsing[0] as TextPartLink).url, 'mailto:info@hotelchat.me')
  })

  it('onlyUrl()', () => {
    const text = 'facebook.com'
    const parsing = parseText(text)

    strictEqual(parsing.length, 1)
    strictEqual(parsing[0].content, 'facebook.com')
    strictEqual((parsing[0] as TextPartLink).url, 'http://facebook.com')
  })

  it('textAndUrl()', () => {
    const text = 'Это текст с некоторым url, например facebook.com или hotelchat.ru'
    const parsing = parseText(text)

    strictEqual(parsing.length, 4)
    strictEqual(parsing[0].type, TextTokenType.TEXT)
    strictEqual(parsing[0].content, 'Это текст с некоторым url, например ')
    strictEqual(parsing[1].type, TextTokenType.LINK)
    strictEqual(parsing[1].content, 'facebook.com')
    strictEqual((parsing[1] as TextPartLink).url, 'http://facebook.com')
    strictEqual(parsing[2].type, TextTokenType.TEXT)
    strictEqual(parsing[2].content, ' или ')
    strictEqual(parsing[3].type, TextTokenType.LINK)
    strictEqual(parsing[3].content, 'hotelchat.ru')
    strictEqual((parsing[3] as TextPartLink).url, 'http://hotelchat.ru')
  })

  it('textAndUrlAndEmail()', () => {
    const text = 'Это текст с некоторым url и email, например facebook.com и info@hotelchat.me'
    const parsing = parseText(text)

    strictEqual(parsing.length, 4)
    strictEqual(parsing[0].type, TextTokenType.TEXT)
    strictEqual(parsing[0].content, 'Это текст с некоторым url и email, например ')
    strictEqual(parsing[1].type, TextTokenType.LINK)
    strictEqual(parsing[1].content, 'facebook.com')
    strictEqual((parsing[1] as TextPartLink).url, 'http://facebook.com')
    strictEqual(parsing[2].type, TextTokenType.TEXT)
    strictEqual(parsing[2].content, ' и ')
    strictEqual(parsing[3].type, TextTokenType.LINK)
    strictEqual(parsing[3].content, 'info@hotelchat.me')
    strictEqual((parsing[3] as TextPartLink).url, 'mailto:info@hotelchat.me')
  })

})