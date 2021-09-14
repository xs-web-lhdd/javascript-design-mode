// 因入库来使用装饰器：




// 只读：
// import { readonly } from 'core-decorators'


// class Person {
//   @readonly
//   name() {
//     return 'zhang san'
//   }
// }

// const p = new Person()
// console.log(p.name());
// p.name = function () {
//   return 'li si'
// }



// deprecate： 提示
import { deprecate } from 'core-decorators'
class Person {
  @deprecate('即将废用', { url: 'www.baidu.com' })
  name() {
    return 'zhang san'
  }
}
const p = new Person()
console.log(p.name());