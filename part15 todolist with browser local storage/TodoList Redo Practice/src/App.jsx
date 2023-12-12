import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { TodoContextProvider } from "./contexts/TodoContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
    const [todoArray, setTodoArray] = useState([])

    const addTodo = (todoText) => {
      setTodoArray((prev) => [{ id: Date.now(), ...todoText }, ...prev])
    }

    const updateTodo = (id, todoMsg) => {
        setTodoArray((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, todoMsg: todoMsg } : item)))
    }

    const deleteTodo = (id) => {
        setTodoArray((prevItems) => prevItems.filter((item) => item.id != id))
    }

    const toggleCompleted = (id) => {
        setTodoArray((prevItems) =>
            prevItems.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
        )
    }
  
   useEffect(() => {
     const todos = JSON.parse(localStorage.getItem("todos"))
     if(todos && todos.length > 0)
      setTodoArray(todos)
    }, [])
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todoArray))
    }, [todoArray])

   
    return (
        <>
            <TodoContextProvider value={{ todoArray, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
                <div className="bg-[#172842] min-h-screen py-8">
                    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                        <div className="mb-4">
                            {/* Todo form goes here */}
                            <TodoForm />
                        </div>
                        <div className="flex flex-wrap gap-y-3">
                            {/*Loop and Add TodoItem here */}
                            {todoArray.map((todo) => (
                                <div key={todo.id} className="w-full">
                                    <TodoItem todo={todo} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </TodoContextProvider>
        </>
    )
}

export default App
