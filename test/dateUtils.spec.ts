import { strictEqual } from 'assert'
import { isSameDay, serverTimeToDate, dateTimeToServer, daysInMonth, createBirthdate } from '../src'

describe('utils/dateUtils', () => {
  it('isSameDay()', () => {
    const date1 = new Date(12345678)
    const date2 = new Date(12345678)
    const date3 = new Date(87654321)

    strictEqual(isSameDay(date1, date2), true)
    strictEqual(isSameDay(date1, date3), false)
  })

  it('serverTimeToDate()', () => {
    const date1 = new Date(12345678000)

    strictEqual(serverTimeToDate(12345678).getTime(), date1.getTime())
  })

  it('dateTimeToServer()', () => {
    const date1 = new Date(12345678000)

    strictEqual(dateTimeToServer(date1), 12345678)
  })

  it('daysInMonth()', () => {
    strictEqual(daysInMonth(7, 2018), 31)
    strictEqual(daysInMonth(2, 2018), 28)
    strictEqual(daysInMonth(2, 2016), 29)
    strictEqual(daysInMonth(12, 2016), 31)
    strictEqual(daysInMonth(11, 2016), 30)
  })

  it('createBirthdate()', () => {
    const date1 = new Date(Date.UTC(2018, 3, 15, 1, 2, 3))
    const date2 = new Date(Date.UTC(2018, 3, 15, 0, 0, 0))

    strictEqual(createBirthdate(date1).getTime(), date2.getTime())
  })

})