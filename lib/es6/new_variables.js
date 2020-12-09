{
  var globalVariable = 'I am global';
}

{
  let localVariable = 'I am local';
  console.log(localVariable)
}

console.log(globalVariable)
// console.log(localVariable) // This line raise an error because the local variable is useful only inner the block

const constantVariable = 'No changes'
constantVariable = 'Uh oh'
