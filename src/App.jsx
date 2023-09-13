import { useEffect, useState } from 'react'
import './App.css'
import Addtasks from './components/Addtasks'
import Alltask from './components/Alltask'

function App() {
  // const [count, setCount] = useState(0)?

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(dataTask));
  // }, [dataTask]);

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });


  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks])

  const updateData = (newTasks) => {
    // const stData = [...tasks, newTasks];
    console.log("updated");
    const updatedTasks = tasks ? [...tasks, newTasks] : [newTasks];
    console.log( tasks);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
  
  // useEffect(() => {
  //   //need to add localstorage code here see reference gpt.
  // })

  const updateTaskRemoval = (id) => {
    const updatedTasks = tasks.filter((_, index) => index !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <div className='center_everything'>
      <div className="uppersec">
        <h1>Todo List</h1>
        <Addtasks updateData={updateData}/>
      </div>
      <Alltask tasks={tasks} updateData={updateTaskRemoval}/>
    </div>
  )
}

export default App
