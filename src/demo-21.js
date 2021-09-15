// Promise:


import StateMachine from 'javascript-state-machine'

// 状态机模型：
const fsm = new StateMachine({
  init: 'Pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fufilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    /**
     * 监听 resolve
     * @param {*} state 当前状态机的实例
     * @param {*} data fs.resolve(xxx) 传递的参数
     */
    onResolve(state, data) {
      data.successList.forEach(fn => fn());
    },
    /**
     * 监听 reject
     * @param {*} state 当前状态机的实例
     * @param {*} data fs.resolve(xxx) 传递的参数
     */
    onReject(state, data) {
      data.failList.forEach(fn => fn());
    }
  }
})

// 定义 Promise：
class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failList = []

    fn(function () {
      // resolve 函数
      fsm.resolve(this)
    }, function () {
      // reject 函数
      fsm.reject(this)
    })
  }
  then(successFn, failFn) {
    this.successList.push(successFn)
    this.failList.push(failFn)
  }
}

// 测试代码：
function loadImg (src) {
  const promise = new Promise(function (resolve, reject) {
    const img = document.createElement('img')
    img.onload = function () {
      resolve()
    }
    img.onerror = function () {
      reject()
    }
    img.src = src
  })
  return promise
}

const src = 'http://www.dell-lee.com/imgs/vue3/user.png'
const result = loadImg(src)

result.then(function() {
  console.log('ok1');
}, function() {
  console.log('fail1');
})

result.then(function() {
  console.log('ok2');
}, function() {
  console.log('fail2');
})