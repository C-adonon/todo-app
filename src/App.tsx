
import './assets/App.css'
import TodoList from './components/todoList'
import AddTodoItem from './components/addTodoItem'

function App() {
  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      <AddTodoItem />
      <TodoList />
    </div>
  )
}

export default App
