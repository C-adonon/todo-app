// zone d'import
import { useState } from 'react'
import TodoItem from "../todoItem";
import './todoList.css'

// component 
function todoList() {

  const [todos, setTodos] = useState([
    { value: 'Todo 1', completed: false },
    { value: 'Todo 2', completed: false },
    { value: 'Todo 3', completed: false },
  ])

  return (
    <ul className="todoList">
      {todos.map((t, index) => (
        <TodoItem key={index} todo={t.value} />
      ))}
    </ul>
  )
}

export default todoList;
