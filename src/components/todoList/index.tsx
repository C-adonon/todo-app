// zone d'import
import TodoItem from "../todoItem";
import './todoList.css'

// component 
function TodoList(props: { todos, handleDeleteTodoItem }) {

  return (
    <ul className="todoList">
      {props.todos.map((t, index) => (
        <TodoItem id={index} onDelete={props.handleDeleteTodoItem} key={t.id} todo={t.value} status={t.completed} />
      ))}
    </ul>
  )
}

export default TodoList;
