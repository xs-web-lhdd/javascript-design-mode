// 初始化状态机模型：

import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

const fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    // 执行监听收藏：
    onDoStore() {
      alert('收藏成功！') // 可以 post 请求
      updateText()
    },
    // 监听取消收藏：
    onDeleteStore() {
      alert('已经取消收藏！')
      updateText()
    }
  }
})

let $btn = $('#btn1')

// 按钮点击事件：
$btn.click(function () {
  if (fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})

// 更新按钮的文案：
function updateText () {
  $btn.text(fsm.state)
}

// 初始化文案：
updateText()
