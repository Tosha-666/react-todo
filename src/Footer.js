import React from 'react';
import ReactDOM from 'react-dom';
import TaskFilter from './tasks/TaskFilter';

const Footer = () => {
    return <footer className='footer'>
        <span className="todo-count">1 items left</span>
        <TaskFilter />
        <button className="clear-completed">Clear completed</button>
    </footer>
}

export default Footer