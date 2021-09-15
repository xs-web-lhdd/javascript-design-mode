// 状态（红、绿、黄）
class State {
  constructor(color) {
    this.color = color
  }
  handle(context) {
    console.log(`turn to ${this.color} light`);
    context.setState(this)
  }
}

// 主体：
class Context {
  constructor() {
    this.state = null
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
  }
}


// 测试：
const context = new Context()

const green = new State('green')
const red = new State('red')
const yellow = new State('yellow')

green.handle(context)
console.log(context.getState());

red.handle(context)
console.log(context.getState());

yellow.handle(context)
console.log(context.getState());