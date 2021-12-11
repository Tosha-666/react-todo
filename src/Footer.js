import React from 'react';

import TaskFilter from './tasks/TaskFilter';



export default class Footer extends React.Component{
    render() {
        const { elseToDo, deleteComplited, filter, getFilteredItems, activeButtonClass} = this.props
        
         return <footer className='footer'>
             <span className="todo-count">{elseToDo} items left</span>
             <TaskFilter
                filter={filter}
                getFilteredItems={getFilteredItems}
                activeButtonClass={activeButtonClass}
             />
             <button
                 className="clear-completed"
                 onClick={deleteComplited}
             >Clear completed</button>
    </footer>
    }}
    
    

