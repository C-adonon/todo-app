import { useState } from 'react'
import './assets/App.css'
import TodoList from './components/todoList'
import AddTodoItem from './components/addTodoItem'

function App() {
  const [todos, setTodos] = useState([
    { value: 'Todo 1', completed: false },
    { value: 'Todo 2', completed: true },
    { value: 'Todo 3', completed: false },
  ])
 
  function handleDeleteTodoItem(id: number) {
    let newTodos = [...todos]
    newTodos.splice(id, 1)
    setTodos(newTodos)
  }

  function handleAddTodoItem(value: string) {
    let newTodos = [...todos]
    newTodos.push({ value: value, completed: false })
    setTodos(newTodos)
  }

  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      <AddTodoItem onAdd={handleAddTodoItem} />
      <TodoList todos={todos} handleDeleteTodoItem={handleDeleteTodoItem} />
    </div>
  )
}

export default App
