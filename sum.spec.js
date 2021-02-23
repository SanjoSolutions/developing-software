import { sum } from './sum.js'

describe('sum', () => {
  it('sums numbers', () => {
    expect(sum(1, 2, 3)).toEqual(6)
  })
})
