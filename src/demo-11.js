// 装饰方法 - 例1：


// function readonly (target, name, descriptor) {
//   descriptor.writable = false
//   return descriptor
// }

// class Person {
//   constructor() {
//     this.first = 'A'
//     this.last = 'B'
//   }

//   @readonly

//   name() {
//     return `${this.first} - ${this.last}`
//   }
// }

// const p = new Person()
// console.log(p.name());

// p.name = function () {
//   alert(100)
// }




// 例2：

function log (target, name, descriptor) {
  let oldValue = descriptor.value
  descriptor.value = function () {
    console.log(`calling ${name} - width ${arguments}`);
    return oldValue.apply(this, arguments)
  }
  return descriptor
}

class Math {
  @log
  add(a, b) {
    return a + b
  }
}
const m = new Math()
const result = m.add(2, 4)
console.log('result', result);
