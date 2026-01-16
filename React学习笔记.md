# 一、JSX中通过大括号语法{}识别js中的表达式
例如：
1. 使用引号传递**字符串**
2. 使用js**变量**
3. 函数调用
4. 使用js对象
**注意：只有表达式才能识别，if，switch，变量声明属于语句，不是表达式，不能出现在{}中**
# 二、JSX中实现列表渲染
语法：在JSX中使用原生js中的map方法遍历渲染列表
例如：首先准备一个对象数组
`const list = [`
`{id: 1001,name: 'vue'},`
`{id: 1002,name: 'React'},`
`{id: 1003,name: 'Angular'}`
`]`
然后
`<ul>`
`{list.map(item =><li key = {item.id}>{item}</li>)}`
`</ul>`
渲染效果：
![[Pasted image 20260112204828.png]]
map循环哪个结构，就return哪个结构，加上独一无二的key
# 三、JSX中实现条件渲染
语法：在React中，可以通过逻辑与运算符&& 、三元表达式（？：）实现基础的条件渲染
例如：
`{isLogin && <span> this is span </span>}`
`{isLogin ? <span>jack</span> : <span>loading...</span>}`
# 四、JSX中实现复杂条件渲染
解决方案：**自定义函数+if判断语句**
`//定义文章类型`
`const article = 3 //0 1 3,无图，单图，三图
`//定义核心函数（根据文章类型返回不同的JSX模板）
`function getArticleTem(){
  `if(article === 0)
   `` return <div>这是无图文章</div>
  `}else if(article === 1){
   `` return <div>这是单图文章</div>
  `}else{
   `` return <div>这是三图文章</div>
 `` }
`}`
# 五、React中的事件绑定
react基础事件绑定
语法：on+事件名称={事件处理程序}，整体上遵循驼峰命名法
      const clickHandler = () => {

        console.log('button按钮被点击了')

      }

      return (

        <button onClick = {clickHandler}>点击我</button>

      )

使用对象事件参数e
`const clickHandler = (e) => {

        console.log('button按钮被点击了',e)

      }

      return (

        <button onClick = {clickHandler}>点击我</button>

      )
  传递自定义参数
  `const clickHandler = (name) => {

        console.log('button按钮被点击了',name)

      }

      return (

        <button onClick = {()=>clickHandler('vue')}>点击我</button>

      )
   注意：不能直接写函数调用，这里事件绑定需要一个函数引用
   既要传递自定义参数，而且还要事件对象e
   `const clickHandler = (name) => {

        console.log('button按钮被点击了',name，e)

      }

      return (

        <button onClick = {(e)=>clickHandler('vue'，e)}>点击我</button>

      )
# 六、React中的组件
组件是什么？
一个组件就是用户界面的一部分，它可以有自己的逻辑和外观，组件之间可以**互相嵌套**，也可以**复用**多次
在React中，一个组件就是首字母大写的**函数**，内部存放了组件的逻辑和视图UI，渲染组件只需要把组件当**标签**书写即可
`function Button(){

  `//业务逻辑

  `console.log('按钮被点击了')

   `return <button>按钮</button>

`}`
# 七、useState基础使用
useState是一个React Hook（函数），它允许我们向组件添加一个**状态变量**，从而控制影响组件的渲染结果
本质：状态变量一旦发生变化组件的视图UI也会跟着变化（**数据驱动视图**）
`function App() {

  `//调用useState定义状态变量

  `//count:状态变量

  `//setCount:更新状态变量的函数

  `const [count,setCount] = useState(0)

  

  `//点击事件回调

  `const handleClick = () =>{

    `setCount(count + 1)

  `}

      return (

        <div className="App">

          <button onClick={handleClick}>{count}</button>

          </div>

      )

    }

# 八、修改状态的规则
1. 状态不可变：
在React中，状态被认为是只读的，我们应该始终替换它而不是修改它，直接修改状态不能引发视图更新
2. 修改对象状态：
对于对象类型的状态变量，应该始终传给set方法一个**全新的对象**来进行修改
`const[form,setForm] = useState({name:'jack'})

  `const changeForm = ()=>{

  

    setForm({

      ...form,

      name:'john'

    })

  }

  

      return (

        <div className="App">

          <button onClick={changeForm}>修改form{form.name}</button>

          </div>

      )`
# 九、组件的样式处理
React组件基础样式控制有两种方式
1. 行内样式（不推荐）
2. class类名控制
