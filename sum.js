import { add } from './add.js'

export function sum(...numbers) {
  return numbers.reduce(add)
}
