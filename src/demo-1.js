class jQuery {
  constructor(selector) {
    let slice = Array.prototype.slice
    let dom = slice.call(document.querySelectorAll(selector)) // 将伪数组转化为真正的数组 ES6之前是 slice.call() ES6之后是Array.from()
    let len = dom ? dom.length : 0
    for (let i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }
  append(node) {

  }
  addClass(name) {

  }
  html(data) {

  }
  // 此处省略。。。。
}


// 测试代码：
window.$ = function (selector) {
  return new jQuery(selector)
}

var $p = $('p')
console.log($p)
console.log($p.addClass)
console.log($p.selector)


// 面向对象三要素：继承、封装、多态
