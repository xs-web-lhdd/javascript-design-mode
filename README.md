#### js设计模式

###### babel版本问题解决方案：
https://www.cnblogs.com/shenfanzui/p/12671826.html


##### 面向对象再练习：
demo-1.js


##### 何为设计？
描述：按照一种思路或者标准来实现功能；功能相同，可以有不同设计方案来实现；伴随着需求的增加，设计的作用才能体现出来


从《UNIX/LINUX设计哲学》中学习设计准则：
准则1、小即是美
准则2、让每个程序只做好一件事
准则3、快速建立原型
准则4、舍去高效率，而取可移植性
准则5、采用纯文本来存储数据
准则6、充分利用软件的杠杆效应（软件复用）
准则7、使用shell脚本来提高杠杆效应和可移植性
准则8、避免强制的用户界面
准则9、让每个程序成为一个过滤器、


小准则：
允许用户定制环境
尽量使操作系统内核小而轻量化
使用小写字母且尽量简写
沉默是金
各部分之和大于整体
寻求90%的解决方案

##### 设计原则：S　Ｏ　Ｌ　Ｉ　Ｄ　五大设计原则
Ｓ　－　单一职责原则
Ｏ　－　开放封闭原则
Ｌ　－　李氏置换原则
Ｉ　－　接口独立原则
Ｄ　－　依赖导致原则




###### 单一职责原则：

一个程序只做好一件事

如果功能过于复杂就拆分，每个部分保持独立



###### 开放封闭原则：

对扩展开放，对修改封闭

增加需求时，扩展新代码，而非修改原有代码

这是软件设计的终极目标



###### 李氏置换原则：

子类能覆盖父类

父类能出现的地方子类就能出现

JS使用较少（弱类型&继承使用较少）



###### 接口独立原则：

保持接口的单一独立，避免出现“胖接口”

JS中没有接口（typescript例外），使用较少

类似于单一职责原则，这里更关注接口



###### 依赖倒置原则：

面向接口编程，依赖于抽象而不依赖于具体

 使用方只关注接口而不关注具体类的实现

JS中使用较少（没有接口&弱类型）



######  用Promise来说明 S O：

demo-2.js

单一职责原则： 每个 then 中的逻辑只做好一件事

开放封闭原则： 如果新增需求，扩展then



#### 介绍23种设计模式：

##### 创建型：

+ 工厂模式（工厂方法模式，抽象工厂模式，建造者模式）

+ 单例模式

+ 原型模式

##### 结构性：

+ 适配器模式
+ 装饰器模式
+ 代理模式
+ 外观模式
+ 桥接模式
+ 组合模式
+ 享元模式
##### 行为型：

+ 策略模式 
+ 模板方法模式
+ 观察者模式
+ 迭代器模式
+ 职责连模式
+ 命令模式
+ 备忘录模式
+ 状态模式！
+ 访问者模式
+ 中介者模式
+ 解释器模式

##### 面试题实例 - 1：

打车时，可以打专车或者快车。任何车都有车牌号和名称，不同车价格不同，快车每公里一元，专车每公里2元，行程开始时，显示车辆信息，行程结束时，显示打车金额（假定行程就5公里）

答案：demo-3.js

##### 面试题实例 - 2：

某停车场，分三层，每层100车位，每个车位都能监控到车辆的驶入和离开，车辆进入前，显示每层的空余车位数量，车辆进入前，摄像头可识别车牌号和时间，车辆出来前，出口显示器显示车牌号和停车时长

答案： demo-4.js

##### 单例模式：

+ 系统中被唯一使用

+ 一个类只有一个实例

演示 ：
	demo-5.js

场景：

​	jQuery只有一个$

​	模拟登录框

​	购物车（和登录框类似）

​	vuex 和 redux 中的 store

设计原则验证：

+ 符合单一职责原则，只实例化唯一的对象
+ 没法具体开放封闭原则，但是绝对不违反开放封闭原则

##### 适配器模式：

代码演示：

​	demo-7.js

场景：

+ 封装旧接口
+ vue computed

##### 装饰器模式：

+ 为对象添加新功能
+ 不改变其原有的结构和功能

代码演示：

​	demo-8.js

###### 配置：

1、在vs Code的设置中搜索`experimentalDecorators`,然后勾选相应选项即可

2、安装插件：

```BASH
npm install -D @babel/plugin-proposal-decorators
```

3、在.babelrc或者package.json中配置（二选一即可，不要都配置）

（1）配置.babelrc文件：

```bash
 "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ]
```

（2）配置package.json中babel字段：

```bash
 babel: {
	"plugins": [
	    ["@babel/plugin-proposal-decorators", { "legacy": true }],
	 ]
  }
```

装饰类：

​	demo-10.js

装饰方法：

​	demo-11.js

场景：引入库来使用装饰器（只读、描述）

​	demo-12.js

###### 设计原则验证：

+ 将现有对象和装饰器进行分离，两者独立存在
+ 符合开放封闭原则



##### 代理模式：

介绍：

+ 使用者无权访问目标对象
+ 中间加代理，通过代理做授权和控制

示例：

+ 科学上网，访问github.com
+ 明星

代码演示：

​	demo-13.js

代理模式：

（1）场景一：事件代理和jQuery中的proxy

​	test2.html

（2）场景二：明星

​	demo-14.js

###### 设计原则验证：

+ 代理类和目标类分离，隔离开目标类和使用者
+ 符合开放封闭原则



##### 代理模式 VS 适配器模式：

+ 适配器模式：提供一个不同的接口（如不同版本的插头）
+ 代理模式：提供一摸一样的接口

##### 代理模式 VS 装饰器模式：

+ 装饰器模式： 扩展功能，原有功能不变且可直接使用
+ 代理模式：显示原有功能，但是经过限制或者阉割之后的

##### 外观模式：

介绍：

+ 为子系统中的一组接口提供了一个高层接口
+ 使用者使用这个高层接口

示例：

​	去医院有接待员去挂号、去取药、去付费

设计原则验证：

​	不符合单一职责原则和开放封闭原则，因此谨慎使用，不可滥用

##### 观察者模式：

代码演示：

​	demo-15.js

场景1：jQuery

​	test3.html

场景2：Node.js自定义事件

​	demo-16.js

其他场景：

+ node.js 中：处理 http 请求；多进程通信
+ vue 和 React 中生命周期
+ vue watch

##### 迭代器模式：

介绍：

+ 顺序访问一个集合
+ 使用者无需知道集合的内部结构（封装）

示例：

​	jQuery：  test4.html

演示：

​	demo-17.js

ES6 Iterator 为何存在？

+ ES6 语法中，有序集合的数据类型已经有很多
+ Array Map Set String TypedArray arguments NodeList
+ 需要有一个统一的遍历接口来遍历所有数据类型
+ （注意，object 不是有序集合，可以用 Map 代替）
+ 以上数据类型，都有 [Symbol.iterator]
+ 属性值是函数，执行函数返回一个迭代器
+ 这个迭代器就有 next 方法可顺序迭代子元素
+ 可运行 Array.prototype[Symbol.iterator] 来测试

场景：

​	demo-18.js

##### 状态模式：

介绍：

+ 一个对象有状态变化
+ 每个状态变化都会触发一个逻辑
+ 不能总是用 if ... else 来控制

示例：

+ 交通信号灯不同颜色的变化 	demo-19.js

场景一：有限状态机（“收藏” 和 “取消”）：

+ 有限个状态、以及在这些状态之间的变化
+ 如交通信号灯
+ 使用开源 lib：javascript-state-machine
+ demo-20.js

场景二：写一个简单的 Promise（实现Promise状态变化）：

​	demo-21.js

###### 设计原则验证：

+ 将状态对象和主题对象分离，状态的变化逻辑单独处理
+ 符合开放封闭原则





