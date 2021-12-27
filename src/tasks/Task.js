import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import EditItem from './NewtaskForm'





export default class Task extends React.Component{
  static propTypes = {
    label: PropTypes.string,
    date: PropTypes.func,
    onDestroyed: PropTypes.func,
    onToggleDone: PropTypes.func,
    done: PropTypes.bool,
    checked: PropTypes.bool,
    edit: PropTypes.bool,
    onEdit: PropTypes.bool,
    editForm: PropTypes.func,
    
  }
  
  static defaultProps = {
    label: '',
    date: new Date(),
    onDestroyed: () => { },
    onToggleDone: () => { },
    done: true,
    checked: true,
    edit: true,
    onEdit: () => { },
    editForm: () => { }
  }

  render() {
    const { label, date, onDestroyed, onToggleDone, done, checked, edit, onEdit, editForm } = this.props
    const daysBetween = formatDistanceToNow(date)
    const classNames =()=> {
     
      if (edit) {
        return 'editing'
      } if (done) {

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
        />
        <label>
          <span className='description'
            onClick = {onToggleDone}>{label}</span>
          <span className="created">created { daysBetween } ago</span>
        </label>
        <button className="icon icon-edit"
          onClick={onEdit} />
        <button
          className="icon icon-destroy"
          onClick = {onDestroyed}
        />
      </div>
      {(edit) && <EditItem
        editForm={editForm}
        label={label}
      />}
    </li>

  }
}
  
