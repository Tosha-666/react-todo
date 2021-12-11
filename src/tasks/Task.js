import React from 'react';
import { formatDistanceToNow } from 'date-fns'



export default class Task extends React.Component{

  // state = {
  //   complited:false
  // }

  //   onLabelClick=()=> {
  //     this.setState((state) => {
  //       return {
  //         complited:!state.complited
  //       }
    
  // })
  // }
  render() {
    const { label, date, onDestroyed, onToggleDone, done, checked } = this.props
    const daysBetween = formatDistanceToNow(date)
  
    let classNames 
    if (done) {
      classNames='completed'
    }
    return <li className={classNames} >
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
          <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick = {onDestroyed}
        ></button>
          </div>
      </li>

  }
}
  
