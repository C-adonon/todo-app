import { useState } from 'react'
import './assets/App.css'
import TodoList from './components/todoList'
import AddTodoItem from './components/addTodoItem'
import FilterBar from './components/filterBar'
let count = 4;
function App() {
  const [todos, setTodos] = useState([
    { id: 1, value: 'Todo 1', completed: false },
    { id: 2, value: 'Todo 2', completed: true },
    { id: 3, value: 'Todo 3', completed: false },
  ])

  const [filterBy, setFilterBy] = useState("all")

  function handleDeleteTodoItem(id: number) {
    let newTodos = [...todos]
    newTodos.splice(id, 1)
    setTodos(newTodos)
  }

  function handleAddTodoItem(value: string) {
    let newTodos = [...todos]
    newTodos.push({ id: count++, value: value, completed: false })
    setTodos(newTodos)
  }

  function handleFilter(status) {
    console.log(status)
    if (status == null) {
      setFilterBy("all")
    } else if (status == true) {
      setFilterBy("completed")
    } else if (status == false) {
      setFilterBy("not-completed")
    }
  }

  let filteredTodos = todos.filter((todo) => {
    if (filterBy == "all") return true
    else if (filterBy == "completed") return todo.completed == true
    else if (filterBy == "not-completed") return todo.completed == false
  })

  console.log(filteredTodos)

  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      <AddTodoItem onAdd={handleAddTodoItem} />
      <TodoList todos={filteredTodos} handleDeleteTodoItem={handleDeleteTodoItem} />
      <FilterBar onFilter={handleFilter} />
    </div>
  )
}

export default App
