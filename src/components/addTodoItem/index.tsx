// zone d'import
import { useState } from 'react'
import './addTodoItem.css'

// component 
function AddTodoItem(props: { onAdd }) {
  const [value, setvalue] = useState('')

  return (
    <div className="addTodoItem">
      <input id='add-item' type="text" placeholder="Ajouter une nouvelle todo ..." onChange={(e) => setvalue(e.target.value)} />
      <button onClick={() => props.onAdd(value)}>Ajouter</button>
    </div>
  )
}

export default AddTodoItem;
