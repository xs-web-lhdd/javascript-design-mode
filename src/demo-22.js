// 一个原型对象

const prototype = {
  getName() {
    return this.first + ' ' + this.second
  },
  say() {
    alert('hello')
  }
}


// 基于原型创建 x
const x = Object.create(prototype)
x.first = 'A'
x.second = 'B'
alert(x.getName())
x.say()

// 基于原型创建 y
x.first = 'C'
x.second = 'D'
alert(x.getName())
x.say()