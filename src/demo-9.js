// 装饰器小demo

// @testDec
// class Demo {

// }

// function testDec(target) {
//   target.isDec = true
// }

// alert(Demo.isDec)



// 装饰器原理：
@decorator
class A {}

// 等同于：
class A {}
A = decorator(A) || A
