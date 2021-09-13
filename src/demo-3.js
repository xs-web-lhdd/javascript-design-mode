// 打车：


// 自己写的：
// class TakeATaxi {
//   constructor(price) {
//     this.price = price
//   }
//   getPrice() {
//     return this.price * 5
//   }
// }

// class Fast extends TakeATaxi {
//   constructor(price) {
//     super(price)
//   }
// }

// class Car extends TakeATaxi {
//   constructor(price) {
//     super(price)
//   }
// }

// const A = new Fast(1)
// console.log(A.getPrice());
// const B = new Car(2)
// console.log(B.getPrice());


// 别人写的：
class Car {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
}

class Kuaiche extends Car {
  constructor(number, name) {
    super(number, name)
    this.price = 1
  }
}

class Zhuanche extends Car {
  constructor(number, name) {
    super(number, name)
    this.price = 2
  }
}

// 行程
class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`行程开始，名称：${this.car.name}，车牌号：${this.car.number}`);
  }
  end() {
    console.log(`行程结束，金额：${this.car.price * 5}`);
  }
}
// 测试：
let car = new Kuaiche(100, '桑坦纳')
let trip = new Trip(car)
trip.start()
trip.end()

