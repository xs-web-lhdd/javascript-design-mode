// 使用 Promise 演示 S O：

function loadImg (src) {
  let promise = new Promise((resolve, reject) => {
    let img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}

let imgUrl = 'http://www.dell-lee.com/imgs/vue3/user.png'

let result = loadImg(imgUrl)

result.then(function (img) {
  alert(`图片的宽度是：${img.width}`)
  return img
}).then(function (img) {
  alert(`图片的高度是：${img.height}`)
  return img
}).then(function (img) {
  alert(`图片的src：${img.src}`)
  return img
}).catch(function (err) {
  console.log(err)
})