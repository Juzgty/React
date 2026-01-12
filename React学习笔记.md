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
