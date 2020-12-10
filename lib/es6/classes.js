class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hello, ${this.name} ${this.age}`)
  }
}

const person = new Person('alexei', 25)
person.sayHello()

export default Person