export default function unknownSample(): void {
  const maybeNumber: unknown = 10
  console.log('unknown sample 1', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('unknown sample 2', typeof isFoo, isFoo)

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3', typeof sum, sum)
  }
}
