import React from 'react';

import TaskFilter from './tasks/TaskFilter';



export default class Footer extends React.Component{
    render() {
        const { elseToDo } = this.props
       
         return <footer className='footer'>
             <span className="todo-count">{elseToDo} items left</span>
        <TaskFilter />
        <button className="clear-completed">Clear completed</button>
    </footer>
    }}
    
    

