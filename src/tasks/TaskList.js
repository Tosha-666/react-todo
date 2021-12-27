import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'


const Tasklist = function({ toDoItem, onDestroyed, onToggleDone, onEdit, editForm }) {
  Tasklist.defaultProps = {
    onDestroyed: () => { },
    onEdit: () => { },
    onToggleDone: () => { },
    editForm: () => { },
    toDoItem: []
  }

  Tasklist.propTypes = {
    onDestroyed:PropTypes.func,
    onEdit: PropTypes.func,
    onToggleDone: PropTypes.func,
    editForm: PropTypes.func,
    toDoItem:PropTypes.array
  }
  const elements = toDoItem.map((item) => <Task {...item}
    key={item.id}
    onDestroyed={() => onDestroyed(item.id)}
    onToggleDone={() => onToggleDone(item.id)}
    onEdit={() => onEdit(item.id)}
    editForm = {editForm}
  />)
  return <ul className="todo-list">
    {elements}
  </ul>
}

export default Tasklist