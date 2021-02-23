export function partialSum(series, numberOfFirstElements) {
  let result = 0
  const generator = series()
  for (let i = 0; i < numberOfFirstElements; i++) {
    result += generator.next().value
  }
  return result
}
