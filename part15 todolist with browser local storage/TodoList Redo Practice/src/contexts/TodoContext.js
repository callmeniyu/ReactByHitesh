import { createContext, useContext } from "react";

const TodoContext = createContext({
    todoArray: [
        {
            id: Number,
            todoText: String,
            completed:false
        }
    ],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
    toggleCompleted: () => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider;