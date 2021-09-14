class Circle {
  draw() {
    console.log('画一个圆形');
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }
  setRedBorder(circle) {
    console.log('设置红色边框');
  }
}

// 测试一下
const circle = new Circle()
circle.draw()

console.log('------- 分割线 -------');

const dec = new Decorator(circle)
dec.draw()