import React from 'react';
import { formatDistanceToNow } from 'date-fns'
import EditItem from './NewtaskForm';



export default class Task extends React.Component{


  render() {
    const { label, date, onDestroyed, onToggleDone, done, checked, edit, onEdit, editForm } = this.props
    const daysBetween = formatDistanceToNow(date)
  
    let classNames =()=> {
     
    if (edit) {
      return 'editing'
    } else if (done) {

      return ('completed')
      }  
      
    }
     
    
    return <li className={classNames()} >

        <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={checked}
          onChange={onToggleDone}
        ></input>
          <label>
            <span className='description'
                  onClick = {onToggleDone}>{label}</span>
            <span className="created">created { daysBetween } ago</span>
          </label>
        <button className="icon icon-edit"
                onClick={onEdit}></button>
        <button
          className="icon icon-destroy"
          onClick = {onDestroyed}
        ></button>
      </div>
      {(edit) && <EditItem
        editForm={editForm}
        label={label}
      />}
      </li>

  }
}
  
