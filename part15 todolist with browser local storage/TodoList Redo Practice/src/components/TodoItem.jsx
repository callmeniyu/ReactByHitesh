import React, { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoItem({ todo }) {
    const [todoMsg, setTodoMsg] = useState(todo.todoText)
    const [isEditable, setIsEditable] = useState()
    const [isChecked, setIsChecked] = useState(todo.completed)
    const { updateTodo, deleteTodo, toggleCompleted } = useTodo()

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input type="checkbox" checked={isChecked} onChange={() => {
                
                setIsChecked((prev) => !prev)
                toggleCompleted(todo.id)
            }}
                disabled={isEditable}
            />
            <input
                type="text"
                onChange={(e) => {
                    setTodoMsg(e.target.value)
                }}
                value={todoMsg}
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isEditable ? "border-black/10 px-2" : "border-transparent"}
                    ${todo.completed && "striker"}`}
                readOnly={!isEditable}
            />
            <button
                onClick={() => {
                    if (todo.completed) return
                    if (isEditable) {
                        updateTodo(todo.id, todoMsg)
                        setIsEditable(false)
                    }
                    else setIsEditable(!isEditable)
                }}
                disabled={todo.completed}
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </div>
    )
}

export default TodoItem
