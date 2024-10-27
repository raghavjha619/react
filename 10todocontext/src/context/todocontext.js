import { createContext,useContext } from "react";

export const Todocontext = createContext({
    Todos: [{
        id: 1,
        todo:  "todo msg",
        completed: false
    }],
    addTodo: (todo)=>{},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id)=>{},
})  


export const UseTodo = () => {
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider