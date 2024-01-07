import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{

    const interval = setInterval(() => {
      fetch("http://localhost:3000/todos")
  .then(async res=>{
    const json = await res.json();
    console.log(json)
    setTodos(json.data)
  })
    }, 4000);
    return () => clearInterval(interval);
  },[])
  

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
