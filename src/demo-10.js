// 装饰类：


// 参数例子：
// function testDec (isDec) {
//   return function (target) {
//     target.isDec = isDec
//   }
// }

// @testDec(false)
// class Demo {

// }

// alert(Demo.isDec)



// mixin：示例
function mixins (...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() {
    alert('foo')
  }
}


@mixins(Foo)
class MyClass {

}

const obj = new MyClass()
obj.foo()