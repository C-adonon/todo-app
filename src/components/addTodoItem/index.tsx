// zone d'import
import { useState } from 'react'
import './addTodoItem.css'

// component 
function AddTodoItem(props: { onAdd }) {
  const [value, setvalue] = useState('')

  return (
    <div className="addTodoItem">
      <input id='add-input' type="text" placeholder="Ajouter une nouvelle todo ..." onChange={(e) => setvalue(e.target.value)} value={value}/>
      <button id='add-btn' onClick={() => { props.onAdd(value)
      setvalue(" ")}}>Ajouter</button>
    </div>
  )
}

export default AddTodoItem;
