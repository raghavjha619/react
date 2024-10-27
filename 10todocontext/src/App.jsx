import { useEffect, useState } from 'react'
import { TodoProvider } from './context/todocontext'
import { TodoForm, TodoItem } from './components'

function App() {
  const [Todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => (
      prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo)
    ))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))
    //     prev.filter(...):
    // This is applying the Array.prototype.filter() method to the prev array (which is the current list of todos). filter() creates a new array by keeping only the items that pass a certain condition (i.e., returning true for the condition).
  }

  const toggleCompleted = (id) => {
    setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos))
  }, [Todos])

  return (
    <TodoProvider value={{ Todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {Todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo = {todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
