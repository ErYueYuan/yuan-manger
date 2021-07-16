```vue
 核心实现类:
    Observer : 它的作用是给对象的属性添加 getter 和 setter，用于依赖收集和派发更新
Dep : 用于收集当前响应式对象的依赖关系,每个响应式对象包括子对象都拥有一个 Dep 实例（里面 subs 是 Watcher 实例数组）,当数据有变更时,会通过 dep.notify()通知各个 watcher。
Watcher : 观察者对象 , 实例分为渲染 watcher (render watcher),计算属性 watcher (computed watcher),侦听器 watcher（user watcher）三种
Watcher 和 Dep 的关系
watcher 中实例化了 dep 并向 dep.subs 中添加了订阅者,dep 通过 notify 遍历了 dep.subs 通知每个 watcher 更新。
依赖收集

initState 时,对 computed 属性初始化时,触发 computed watcher 依赖收集
initState 时,对侦听属性初始化时,触发 user watcher 依赖收集
render()的过程,触发 render watcher 依赖收集
re-render 时,vm.render()再次执行,会移除所有 subs 中的 watcer 的订阅,重新赋值。

派发更新

组件中对响应的数据进行了修改,触发 setter 的逻辑
调用 dep.notify()
遍历所有的 subs（Watcher 实例）,调用每一个 watcher 的 update 方法
==vue优点：==
响应式：通过MVVM思想的数据双向绑定，完成用虚拟DOM让我们用数据来操作真是DOM，
    组件化：页面都是由一个个模块组建而成，方便复用，提高性能效率
==vue中的hash模式和history模式的区别:==
相对url地址的：hash模式有'#'号，history没有
hash模式底层运用的onhashchange事件(监听的localtion.hash的改变)
history利用的是HTML5 history API中的两种方法，
        1.pushstate() 改变url地址且不会发送请求
2.repleacestate() 可以读取历史记录栈还可以对浏览器历史进行更改

==vue响应式原理:==
当Vue创建实例，Vue会遍历data的所有属性选项，利用object.defineProperty()为属性添加getter和setter进行数据劫持，getter用来依赖收集，setter用来派发更新，在内部追踪依赖项，在属性访问时通知变化。
    每个组件实例都有一个watcher，组件渲染过程中记录依赖的所有数据属性，当依赖被改变时，通过setter通知依赖，data的watcher重新计算，关联的重新的渲染

简述就是 Vue.js 用发布者和订阅者模式，利用object.defineProperty()劫持的各个属性getter和setter，数据变动时发布消息给订阅者，完成响应的回调

==computed计算属性原理:==
懒惰着，内部也是watcher，有个Dep实例不会立即求值，通过 this.dep.subs.length 判断有没有订阅者,如果改变就重新计算渲染

==computed和watch的区别==
computed有缓存，只有当依赖项发生改变时才会重新渲染
watch相当于一个侦听器，没有缓存，

    运用场景:
        computed:当数值需要重新计算，依赖于某个数据
watch：数据异步操作时或者数据开销较大时，设置一个中间状态，当想深度检测对象中的属性时，可以打开deep：true

==object.defineProperty和proxy的区别==
object.defineProperty 只能劫持对象的属性，是所以需要对每个对象的每个属性进行遍历，需要深度遍历
proxy 可以劫持整个对象，并返回一个新的对象，可以代理对象，数组
可以直接监听数组的变化

==Vue中key的作用==
相当于给每一个节点的唯一标识不会复用，方便diff算法，更准确，更快速，方便虚拟dom新旧节点进行对比，虚拟dom只是把真实dom的数据抽离出来，对比后再插入到真实dom中

==谈一谈 nextTick 的原理==
JS运行机制：js是单线程，基于事件循环，所有同步任务都在主线程上运行形成一个执行栈，主线程外有一个任务队列，异步执行完有了结果，就会放到任务队列，等同步任务执行完，再检查任务队列，有就放入执行栈执行，由此循环执行

vue在更新Dom时是异步执行的，vue将开启一个队列，根据宏任务，微任务执行，
 异步更新队列:为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback),在组件实例中不用Vue，直接this.$nextTick就行,由于$nextTock返回一个          promise可以使用ES7的async/awiat
methods: {
    updateMessage: async function () {
        this.message = '已更新'
        console.log(this.$el.textContent) // => '未更新'
        await this.$nextTick()
        console.log(this.$el.textContent) // => '已更新'
    }

    原理:
        vue 用异步队列的方式来控制 DOM 更新和 nextTick 回调先后执行


    ==Vue对数组方法的处理==
    就是在原型上进行拦截重写方法，指向了自己定义的数组原型方法，在调用API时通知依赖，如果数组中有引用类型，会对数组中的引用类型进行递归遍历，实现监测数组。
    首先获取这个放的observer对象，如果有变化就调用observerArray对新值监听，然后手动调用 notify,通知 render watcher,执行 update

    ==Vue 组件 data 为什么必须是函数 ?==
    因为组件会被复用，js中的对象是引用关系，所以如果对象得的话会产生污染问题，
    由于new Vue不会复用，所以可以是对象

    ==Vue渲染过程==
    通过compile函数生成render字符串：
        调用new Watcher函数对数据进行监听，数据发生变化，render函数执行生成vnode
    调用patch方法，对新旧vnode节点进行对比，利用diff算法进行删除，插入真实的Dom

    ==vm.$set()实现原理是什么?==
    由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的。
对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式属性。
        如果目标是数组,使用 vue 实现的变异方法 splice 实现响应式
    如果目标是对象,判断属性存在,即为响应式,直接赋值
    如果 target 本身就不是响应式,直接赋值
    如果属性不是响应式,则调用 defineReactive 方法进行响应式处理

    ==Vue3.x响应式数据原理吗？==
    proxy替代了object.definePorperty(),可以直接监听的数组和对象,对数据的拦截方式有多种，
**问题1**：Proxy只代理对象的第一层，那Vue
    3是怎样处理这个问题的？
    判断当前的Rflect.get是否为object，为是则再通过reactive方法做代理，这样就做到了深度观测

**问题2**：监测数组的时候可能触发多次get/set，那么如何防止触发多次呢？
    判断key是否为当前代理对象的target自身属性，也可以对比新值和旧值，满足其一，就执行trigger

    ==Vue生命周期==
    beforeCreated  在new vue 之后触发的第一个钩子，data，methods,computed,watch,都无法访问
    created 实例创建完毕，当前阶段可以观测数据，使用数据，更改数据，但是不能操作dom进行交互，但是可以通过vm.$nextTick来访问Dom
    beforemounted 发生在挂载之前，在这之前已进行template函数编译，虚拟dom已创建完成，可以对数据进行更改
    mounted 挂载完成，真是DOM挂载完成，数据完成双向数据绑定，可以通过$refs属性对DOM进行操作
    beforeupdate 发生在更新之前，也是响应式数据更新，虚拟DOM重新渲染之前被触发
    updated 发生在更新之后，当前阶段DOM已经更新，避免在此阶段更新数据容易产生死循环
    beforeDestory 发生销毁之前，在此阶段实例还可以使用
    destory 销毁实例后，只剩下DOM空壳

    ==Vue中v-model的原理==
    其实v-model就语法糖，可以看成是input和value的语法糖，可以通过model的event和prop属性进行自定义，原生v-model会根据标签的不同生成不同的事件和属性

    ==Vue事件绑定原理==
    原生事件绑定是通过addEeventlistener绑定到真实元素的,Vue中是通过自定义的$on实现的

    ==Vue模版编译原理知道吗，能简单说一下吗？==
    简述：Vue编译过程就是将template转化为render函数的过程
    -生成AST语法
    -优化
    -把AST树转化为可执行代码
    首先解析模板，生成AST语法树，使用大量的正则表达式对模板进行解析，遇到标签和文本时会执行相对应的的钩子进行相关处理。
  深度遍历AST树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以跳过对它们的比对，对运行时的模板起到很大的优化作用。
  编译的最后一步是将优化后的AST树转换为可执行的代码。

==Vue2.x和Vue3.x渲染器的diff算法分别说一下==
    简述diff算法：
    -同级比较，再比较子节点
    -先判断一方是否有节点一方没有子节点的情况
    -比较都有子节点情况
    -递归比较子节点
    Vue2.x 采用双端比较算法，同时从新旧节点两端开始进行对比，借助key值找可复用的节点，再进行相关操作
    Vue3.x 借鉴了ivi算法和inforno算法
    创建vnode节点时先确定其类型，以及在match/patch的过程中采用位运算判断一个vnode（虚拟Dom）的类型，在这基础上配合核心diff算法

    ==再说一下虚拟Dom以及key属性的作用==
    vue2.x的虚拟DOM借鉴了开源库snabbdom
    虚拟DOM就是用一个原生的js对象描述一个DOM节点，是对真实DOM的一种抽象
    虚拟DOM到真实的DOM要经历create，diff，patch等阶段

    key的作用：
    尽可能的复用DOM，相当一个唯一标识

    ==keep-alive了解==
    -keep-alie 可以实现组件缓存
    -常用的include/exclude进行条件匹配，决定是和否缓存，不匹配直接返回实例
    -两个生命周期activated/deactivated，用来得知当前组件是否处于活跃状态。
    -还运用LRU缓存淘汰算法，简单来说就是把常用的push到最后，很久没有访问的key[0]删除掉

    ==组件通信方式==
    父子 $props
    子父 $on,$emit
    获取父子组件实例 $children $parent
    ref 获取实例的方法，属性
    Provide、inject 官方不推荐使用，但是写组件库时很常用

    兄弟间通信
    Vuex：状态管理模式
**state**:相当于一个仓库，存放数据
**mutations**:是操作state数据的方法的集合，必须是同步
    通过commit传值
    mutations:{
        name(state,payload){
            //获取state数据
        }
    }
    this.$store.commit('name',值/{})
    this.$store.commit({
        type:'name',
        payload:{

        }
    })
    辅助使用  mapMutations
**action**:不同于mutation不能直接修改状态数据,可以异步操作
    最终提交到mutations方法
    actions:{
        aedit(content,payload){
            //获取mutations里面的方法
            content.edit('edit',payload)
        }
    }
this.$store.dispatch('eadit',{})

**getters**:相当于计算属性
    getters:{
        方法名(state,getters){
            //state 状态值
        }
    }
this.$store.getters.方法名
**module模块多时运用**

==你都做过哪些Vue的性能优化==？
 -尽量减少data中数据,data中的数据都会增加getter和setter
 -避免v-for和v-if连用
 -路由懒加载/图片懒加载
 -异步组件
 -key保证唯一
 -使用keep-alive缓存组件
 -节流 防抖
    -在更多的情况下 使用v-if 替代 v-show


    == Vuex和localstroage的区别==
    Vuex使用组件之间存储传值，存在内存中，页面刷新没有了
    localstorage 是存储在浏览器中，当浏览器关闭删除消失
```
关于$emit问题
```javascript
vue使用$emit时，父组件无法触发监听事件的原因是：
$emit传入的事件名称只能使用小写，不能使用大写的驼峰规则命名

```
关于Vue中this机制导致指向失效(apply)
```javascript
 由于Vue中this内置机制问题导致使用apply重定向错误或者无效
 方案：防抖方案
function Debounce(fun, time) {
    let timeout = null;
    return function() {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            this[fun]();
        }, time)
    }
}
```