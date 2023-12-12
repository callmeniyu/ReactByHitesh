import React, { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoForm() {
    const [todoText, setTodoText] = useState("")

    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todoText) return
        addTodo({ todoText })
        setTodoText("")
    }

    return (
        <div>
            <form onSubmit={add} className="flex">
                <input
                    type="text"
                    onChange={(e) => setTodoText(e.target.value)}
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={todoText}
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
