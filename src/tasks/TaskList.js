import React from 'react';

import Task from './Task';
import NewTaskForm from './NewtaskForm';


const Tasklist = ({ toDoItem }) => {
const elements = toDoItem.map((item) => {
return <Task {...item}/>
})
return <ul className="todo-list">
        {elements}
    </ul>
}

export default Tasklist