import React from 'react';
import { formatDistanceToNow } from 'date-fns'



export default class Task extends React.Component{

  state = {
    complited:false
  }

    onLabelClick=()=> {
      this.setState((state) => {
        return {
          complited:!state.complited
        }
    
  })
  }
  render() {
    const { label, date, id } = this.props

    const daysBetween = formatDistanceToNow(date)
    const { complited } = this.state
    let classNames 
    if (complited) {
      classNames='completed'
    }
    return <li className={classNames} key={id}>
        <div className="view">
          <input className="toggle" type="checkbox"></input>
          <label>
            <span className='description'
                  onClick = {this.onLabelClick}>{label}</span>
            <span className="created">{ daysBetween }</span>
          </label>
          <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
          </div>
      </li>

  }
}
  
// const Task = ({ status, label, date }) => {
//   const liStyle = status ? '' : 'completed'
//   const daysBetween = formatDistanceToNow(date)

//   return <li className={liStyle}>
//     <div className="view">
//       <input className="toggle" type="checkbox"></input>
//       <label>
//         <span className="description">{label}</span>
//         <span className="created">{ daysBetween }</span>
//       </label>
//       <button className="icon icon-edit"></button>
//       <button className="icon icon-destroy"></button>
//     </div>
//   </li>

//   }

// export default Task