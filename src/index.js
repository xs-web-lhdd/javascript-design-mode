class Person {
  constructor(name) {
    this.name = name
  }
  getName () {
    return this.name
  }
}
const person = new Person('liang')
console.log(person.getName());