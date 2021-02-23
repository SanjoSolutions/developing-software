import { partialSum } from './partialSum.js'

describe('partial sum', () => {
  it('sums the n first elements of the series', () => {
    const series = i => 1 / (2 ** (i + 1))
    expect(partialSum(series, 3)).toEqual(1 / 2 + 1 / 4 + 1 / 8)
  })
})
