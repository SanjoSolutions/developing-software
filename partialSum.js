export function partialSum(series, numberOfFirstElements) {
  let result = 0
  for (let i = 0; i < numberOfFirstElements; i++) {
    result += series(i)
  }
  return result
}
