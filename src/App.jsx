import { useState } from 'react'

function App() {
  //调用useState定义状态变量
  //count:状态变量
  //setCount:更新状态变量的函数
  const [count,setCount] = useState(0)

  //点击事件回调
  const handleClick = () =>{
    setCount(count + 1)
  }
  const[form,setForm] = useState({name:'jack'})
  const changeForm = ()=>{

    setForm({
      ...form,
      name:'john'
    })
  }

      return (
        <div className="App">
          <button onClick={changeForm}>修改form{form.name}</button>
          </div>
      )
    }

export default App
