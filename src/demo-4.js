// // 停车场：

// // 自己写：


// // 别人写：


// // 摄像头：
class Camera {
  shot(car) {
    return {
      num: car.num, // 车牌号
      inTime: Date.now() // 驶入时间
    }
  }
}
// 车辆
class Car {
  constructor(num) {
    this.num = num
  }
}
// 出口显示屏幕：
class Screen {
  show(car, inTime) {
    console.log(`车牌号：${car.num}，停车时间：${Date.now() - inTime}`);
  }
}
// 停车场：
class Park {
  constructor(floors) {
    this.floors = floors || []
    this.camera = new Camera()
    this.screen = new Screen()
    this.carList = {} // 存储摄像头拍摄返回的车辆信息
  }
  in (car) {
    // 通过摄像头获取车辆信息：
    const info = this.camera.shot(car)
    // 停到某个停车位(随机数):
    const i = parseInt(Math.random() * 100 % 100)
    const place = this.floors[0].places[i]
    place.in()
    info.place = place
    // 记录信息:
    this.carList[car.num] = info
    console.log(`该车辆停在第一层第${i}个位置`);
  }
  out (car) {
    // 获取信息
    const info = this.carList[car.num]
    // 清空停车位:
    const place = info.place // 拿到该车的停车位号码
    place.out() // 将车位释放
    // 显示时间:
    this.screen.show(car, info.inTime)
    // 清空记录:否则会造成内存泄露
    delete this.carList[car.num] // 将车辆信息删除
  }
  emptyNum () {
    return this.floors.map(floor => {
      return `${floor.index}层还有${floor.emptyPlaceNum()}个空闲车位`
    }).join('\n') // 返回每一层有多少个空闲车位
  }
}
// 层：
class Floor {
  constructor(index, places) {
    this.index = index // 第几层
    this.places = places // 车位
  }
  emptyPlaceNum() { // 这一层有多少个空车位:
    let num = 0
    this.places.forEach(p => {
      if (p.empty) {
        num++
      }
    });
    return num
  }
}
// 车位：
class Place {
  constructor() { // 默认车位是空
    this.empty = true
  }
  in () {
    this.empty = false
  }
  out () {
    this.empty = true
  }
}

// // 测试-----------------------------
// // 初始化停车场: 3层,每层100个位置
const floors = []
for (let i = 0; i < 3; i++) {
  const places = []
  for (let j = 0; j < 100; j++) {
    places[j] = new Place()
  }
  floors[i] = new Floor(i + 1, places)
}
// // 初始化停车场:
const park = new Park(floors)
// // 初始化车辆:
const car1 = new Car(100) // 车牌号100
const car2 = new Car(200) // 车牌号200
const car3 = new Car(300) // 车牌号300

console.log('第一辆车进入')
console.log(park.emptyNum());
park.in(car1)

console.log('第二辆车进入');
console.log(park.emptyNum());
park.in(car2)

console.log('第一辆车离开');
park.out(car1)
console.log(park.emptyNum());

console.log('第二辆车离开');
park.out(car2)
console.log(park.emptyNum());