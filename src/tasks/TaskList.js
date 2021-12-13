import React from 'react';

import Task from './Task';
import NewTaskForm from './NewtaskForm';


const Tasklist = ({ toDoItem, onDestroyed, onToggleDone, onEdit, addItem }) => {
    const elements = toDoItem.map((item) => {
    
    return <Task {...item}
        key={item.id}
        onDestroyed={() => onDestroyed(item.id)}
        onToggleDone={() => onToggleDone(item.id)}
        onEdit={() => onEdit(item.id)}
        addItem ={addItem}
        
    />
})
return <ul className="todo-list">
        {elements}
    </ul>
}

export default Tasklist