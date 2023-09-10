import { useState } from 'react'
import './App.css'
import Addtasks from './components/Addtasks'
import Alltask from './components/Alltask'

function App() {
  // const [count, setCount] = useState(0)?

  return (
    <div className='center_everything'>
      <div className="uppersec">
        <h1>Todo List</h1>
        <Addtasks />
      </div>
      <Alltask />
    </div>
  )
}

export default App
