import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { TodoContextProvider } from "./contexts/TodoContext"

function App() {
    const [todoArray, setTodoArray] = useState([])

    const addTodo = (todoText) => {
        setTodoArray((prev) => [{ id: Date.now(), ...todoText }, ...prev])
    }
  
  const updateTodo = (id,todoMsg) => {
    setTodoArray((prevItems) => prevItems.map((item) => item.id === id ? {...item,todoMsg:todoMsg} : item))
  }

  const deleteTodo = (id) => {
      setTodoArray(() => todoArray.filter((item) => todoArray.id != id))
  }
  
  const toggleCompleted = (id) => {
    setTodoArray((prevItems) => prevItems.map((item) => item.id === id ? {...item,completed:!item.completed} : item ))
  }

    return (
        <>
            <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}></TodoContextProvider>
        </>
    )
}

export default App
