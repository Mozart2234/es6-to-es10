// New version of default params
function sayHello(name, age, country_code) {
  var name = name || 'Alexei'
  var age = age || 25
  var country_code = country_code || 'PE' 
  console.log(name, age, country_code)
}

function sayHelloNew(name = 'Alexei', age = 25, country_code = 'PE') {
  console.log(name, age, country_code);
}

sayHelloNew()
sayHelloNew("Paul", 20, 'PE')

// Template literals

let name = 'Alexei'
let age = 25
let hello = 'Hello ' + name + ' de ' + age
console.log(hello);

console.log(`Hello ${name} de ${age}`)


