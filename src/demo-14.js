// ES6代理：


const star = {
  name: '张xx',
  age: 25,
  phone: '1333332432'
}

// 经纪人：
const agent = new Proxy(star, {
  get(target, key) {
    if (key === 'phone') {
      // 返回经纪人的电话
      return '1999999999'
    }
    if (key === 'price') {
      // 明星不报价，经纪人报价
      return 12000
    }
    return target[key]
  },
  set(target, key, val) {
    if (key === 'customPrice') {
      if (val < 10000) {
        // 最少一万
        throw new Error('价格太低')
      } else {
        target[key] = val
        return true
      }
    }
  }
})


// 测试：
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

// agent.customPrice = 100
agent.customPrice = 1000000
console.log('agent.customPrice', agent.customPrice);