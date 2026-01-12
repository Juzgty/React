import { useState } from 'react'
const list = [
  {id: 1001,name: 'vue'},
  {id: 1002,name: 'React'},
  {id: 1003,name: 'Angular'}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        this is my first react app
        {/*渲染列表*/}
        {list.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  )
}

export default App
