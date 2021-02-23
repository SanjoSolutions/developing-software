export function* fibonacciSeries() {
  let a = 1
  let b = 1
  while (true) {
    yield a
    const nextValue = a + b
    a = b
    b = nextValue
  }
}
