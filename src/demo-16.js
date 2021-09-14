// Node.js 演示观察者模式

const EventEmitter = require('events').EventEmitter

// const emitter1 = new EventEmitter()
// // 监听 some 事件
// emitter1.on('some', info => {
//   console.log('fn1', info);
// })
// // 监听 some 事件
// emitter1.on('some', info => {
//   console.log('fn2', info);
// })
// // 触发 some 事件
// emitter1.emit('some', 'xxxxx')


// 继承:
// class Dog extends EventEmitter {
//   constructor(name) {
//     super()
//     this.name = name
//   }
// }

// const simon = new Dog('simon')
// simon.on('bark', function () {
//   console.log(this.name, ' barked');
// })
// setInterval(function () {
//   simon.emit('bark')
// }, 3000)


// stream:
// const fs = require('fs')
// const readStream = fs.createReadStream('../README.md') // 读文件通过 stream 的方式
// let length = 0
// readStream.on('data', function (chunk) {
//   let len = chunk.toString().length
//   console.log('len===>', len);
//   length += len
// })
// readStream.on('end', function () {
//   console.log('length===>', length);
// })

// readline:

