// 单例模式：演示：

class SingleObject {
  login() {
    console.log('login ......');
  }
}

SingleObject.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
}())

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()

console.log('obj1 === obj2', obj1 === obj2);

console.log('----------分割线----------');

const obj3 = new SingleObject()
obj3.login()
console.log('obj1 === obj3', obj1 === obj3);