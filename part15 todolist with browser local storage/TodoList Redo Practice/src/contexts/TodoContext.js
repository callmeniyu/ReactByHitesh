import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "nothing",
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