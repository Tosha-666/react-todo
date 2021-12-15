import React from 'react';
import TaskFilter from './tasks/TaskFilter';
import PropTypes from 'prop-types'


export default class Footer extends React.Component{
    static propTypes = {
        elseToDo: PropTypes.number,
        deleteComplited: PropTypes.func,
        filter: PropTypes.func,
        getFilteredItems: PropTypes.func,
        activeButtonClass: PropTypes.func,
    }
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
    
    

