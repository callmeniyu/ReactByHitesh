import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({todo}) {

    const [todoMsg, setTodoMsg] = useState("");
    const [isEditable, setIsEditable] = useState();
    const { updateTodo, deleteTodo, toggleCompleted } = useTodo();
    
  return (
      <div>
          <input type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
          />
          <input
              type="text"
              onChange={(e) => setTodoMsg(e.target.value)}
              value={todoMsg}
              readOnly={!isEditable}
          />
          <button onClick={() => {
              if (todo.completed) return
              if (isEditable) updateTodo(todo.id,todoMsg)
              else setIsEditable(!isEditable)
          }}>{ isEditable ? "" : ""}</button>
          <button onClick={() => deleteTodo(todo.id)}></button>
    </div>
  )
}

export default TodoItem