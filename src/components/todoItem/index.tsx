// zone d'import
import './todoItem.css'

/* component */
function TodoItem(props) {

  if (props.status) {
    return (
      <li className="todoItem">
        <input type="checkbox" checked />
        <p>{props.todo}</p>
        <button onClick={() => props.onDelete(props.id)} >Supprimer</button>
      </li>
    )
  }
  return (
    <li className="todoItem">
      <input type="checkbox" />
      <p>{props.todo}</p>
      <button onClick={() => props.onDelete(props.id)} >Supprimer</button>
    </li>
  )
}

export default TodoItem;
