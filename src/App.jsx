import { useState } from 'react'
const list = [
  {id: 1001,name: 'vue'},
  {id: 1002,name: 'React'},
  {id: 1003,name: 'Angular'}
]

//定义文章类型
const article = 3 //0 1 3,无图，单图，三图
//定义核心函数（根据文章类型返回不同的JSX模板）
function getArticleTem(){
  if(article === 0){
    return <div>这是无图文章</div>
  }else if(article === 1){
    return <div>这是单图文章</div>
  }else{
    return <div>这是三图文章</div>
  }
}

function App() {
  const [count, setCount] = useState(0)
  const clickHandler = (name) => {
        console.log('button按钮被点击了',name)
      }
      return (
        <button onClick = {() => clickHandler('vue')}>点击我</button>
      )
    }

export default App
