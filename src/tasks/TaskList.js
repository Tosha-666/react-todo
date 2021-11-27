import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import NewTaskForm from './NewtaskForm';


const Tasklist = ({ toDoItem }) => {
    
    const elements = toDoItem.map((item) => {
        return Task(item)
    }
    
    )

    return <ul className="todo-list">
        {elements}
        {/* <li className="completed">
            <Task />
        </li>
        <li className="editing">
            <Task />
            <NewTaskForm/>
        </li>
        <li>
             <Task/>
        </li> */}
       
    </ul>
}
    




export default Tasklist