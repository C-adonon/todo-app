// zone d'import
import './filterBar.css'

// component 
function FilterBar(props: { onFilter }) {

    return (
        <div className="filter-bar">
            <button onClick={() => props.onFilter(null)}>All</button>
            <button onClick={() => props.onFilter(true)}>Completed</button>
            <button onClick={() => props.onFilter(false)}>Not Completed</button>
        </div>
    )
}

export default FilterBar;
