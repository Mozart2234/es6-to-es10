function *OwnGenerator () {
  console.log('This is the first part of generator')
  yield 'Hello, '
  
  console.log('This is the second code')
  yield 'World.'
}

const exampleGenerator = OwnGenerator()

console.log(exampleGenerator.next().value)
console.log(exampleGenerator.next().value)
console.log(exampleGenerator.next().value)