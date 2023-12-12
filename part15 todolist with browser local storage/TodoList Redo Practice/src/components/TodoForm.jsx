import React, { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoForm() {
    const [todoText, setTodoText] = useState("")

    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todoText) return
        addTodo(todoText)
        setTodoText("")
    }

    return (
        <div>
            <form onSubmit={add}>
                <input type="text" onChange={(e) => setTodoText(e.target.value)} value={todoText} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
