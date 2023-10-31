// zone d'import
import './todoItem.css'

/* component */
function todoItem(key: number, todo: string) {
    
  return (
    <li className="todoItem">
        <input type="checkbox" />
        <p></p>
        <button>Supprimer</button>      
    </li>
  )
}

export default todoItem;
