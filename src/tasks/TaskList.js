import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types'


const Tasklist = ({ toDoItem, onDestroyed, onToggleDone, onEdit, editForm }) => {
    Tasklist.defaultProps = {
        onDestroyed: () => { },
        onEdit: () => { },
        onToggleDone: () => { },
        editForm: () => { }
    }

    Tasklist.propTypes = {
        toDoItem: PropTypes.arrayOf(PropTypes.object),
        onDestroyed:PropTypes.func,
        onEdit: PropTypes.func,
        onToggleDone: PropTypes.func,
        editForm: PropTypes.func
    }
    const elements = toDoItem.map((item) => {
    
    return <Task {...item}
        key={item.id}
        onDestroyed={() => onDestroyed(item.id)}
        onToggleDone={() => onToggleDone(item.id)}
        onEdit={() => onEdit(item.id)}
        editForm = {editForm}
         />
})
return <ul className="todo-list">
        {elements}
    </ul>
}

export default Tasklist