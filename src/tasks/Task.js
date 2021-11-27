import React from 'react';
import ReactDOM from 'react-dom';
import { formatDistanceToNow, subDays } from 'date-fns'


const Task = ({ status, label, date }) => {
  const liStyle = status ? '' : 'completed'
  const daysBetween = formatDistanceToNow(date)
  console.log(daysBetween);
  return <li className={liStyle}>
    <div className="view">
      <input className="toggle" type="checkbox"></input>
      <label>
        <span className="description">{label}</span>
        <span className="created">{ daysBetween }</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  </li>

  }

export default Task