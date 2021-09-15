function each (data) {
  // 生成遍历器:
  let iterator = data[Symbol.iterator]()

  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  let item = {done: false}
  while(!item.done) {
    item = iterator.next()
    if (!item.done) {
      console.log(item.value);
    } else {
      return
    }
  }
}

const arr = [1, 2, 3, 4, 5]
let m = new Map()
m.set('a', 100)
m.set('b', 200)

each(arr)
// each(m)