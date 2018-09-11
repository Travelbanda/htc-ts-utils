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

  it('onlyWrongEmail()', () => {
    const text = 'info@hotelchat.me12'
    const parsing = parseText(text)

    strictEqual(parsing.length, 1)
    strictEqual(parsing[0].content, 'info@hotelchat.me12')
    strictEqual((parsing[0]).type, TextTokenType.TEXT)
  })

  it('emptyString()', () => {
    const text = ''
    const parsing = parseText(text)

    strictEqual(parsing.length, 0)
  })

  it('onlyEmailWithProtocol()', () => {
    const text = 'mailto:info@hotelchat.me'
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

  it('onlyUrlError()', () => {
    const text = 'facebook.comcomcom'
    const parsing = parseText(text)

    strictEqual(parsing.length, 1)
    strictEqual((parsing[0]).type, TextTokenType.TEXT)
    strictEqual(parsing[0].content, 'facebook.comcomcom')
  })

  it('onlyUrl()', () => {
    const text = 'https://facebook.com'
    const parsing = parseText(text)

    strictEqual(parsing.length, 1)
    strictEqual(parsing[0].content, 'https://facebook.com')
    strictEqual((parsing[0] as TextPartLink).url, 'https://facebook.com')
  })

  it('onlyIp()', () => {
    const text = '8.8.8.8'
    const parsing = parseText(text)

    strictEqual(parsing.length, 1)
    strictEqual(parsing[0].content, '8.8.8.8')
    strictEqual((parsing[0] as TextPartLink).url, 'http://8.8.8.8')
  })

  it('onlyIpWithProtocol()', () => {
    const text = 'http://8.8.8.8'
    const parsing = parseText(text)

    strictEqual(parsing.length, 1)
    strictEqual(parsing[0].content, 'http://8.8.8.8')
    strictEqual((parsing[0] as TextPartLink).url, 'http://8.8.8.8')
  })

  it('punycode()', () => {
    const text = 'xn--d1acufc5f.xn--p1ai'
    const parsing = parseText(text)

    strictEqual(parsing.length, 1)
    strictEqual(parsing[0].content, 'xn--d1acufc5f.xn--p1ai')
    strictEqual((parsing[0] as TextPartLink).url, 'http://xn--d1acufc5f.xn--p1ai')
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
    const text = 'Это текст с некоторым url и email, например info@hotelchat.me и facebook.com!!!'
    const parsing = parseText(text)

    strictEqual(parsing.length, 5)
    strictEqual(parsing[0].type, TextTokenType.TEXT)
    strictEqual(parsing[0].content, 'Это текст с некоторым url и email, например ')
    strictEqual(parsing[1].type, TextTokenType.LINK)
    strictEqual(parsing[1].content, 'info@hotelchat.me')
    strictEqual((parsing[1] as TextPartLink).url, 'mailto:info@hotelchat.me')
    strictEqual(parsing[2].type, TextTokenType.TEXT)
    strictEqual(parsing[2].content, ' и ')
    strictEqual(parsing[3].type, TextTokenType.LINK)
    strictEqual(parsing[3].content, 'facebook.com')
    strictEqual((parsing[3] as TextPartLink).url, 'http://facebook.com')
    strictEqual(parsing[4].type, TextTokenType.TEXT)
    strictEqual(parsing[4].content, '!!!')
  })

})