import { fibonacciSeries } from './fibonacciSeries.js'
import { partialSum } from './partialSum.js'

describe('partial sum', () => {
  it('sums the n first elements of the series', () => {
    function* geometricSeries() {
      let i = 0
      while (true) {
        yield 1 / (2 ** (i + 1))
        i++
      }
    }

    expect(partialSum(geometricSeries, 3))
      .toEqual(1 / 2 + 1 / 4 + 1 / 8)
  })

  it('works for the ficonacci series', () => {
    expect(partialSum(fibonacciSeries, 3)).toEqual(4)
  })
})
