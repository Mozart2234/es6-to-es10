const obj = {
  name: 'Alexei',
  age: 20,
  language: 'Spanish'
}

const { name, ...rest} = obj;
console.log(name, rest)

const extraInfo = {
  ...obj,
  status: 'alive'
}

console.log(extraInfo)