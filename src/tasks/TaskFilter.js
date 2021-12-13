
import React from 'react';


export default class TaskList extends React.Component{

  render() {
    const { filter, activeButtonClass } = this.props
    
     return  <ul className="filters">
    <li>
         <button
           onClick={() => filter('all')}
           className={activeButtonClass('all')}
         >All</button>
    </li>
    <li>
         <button
           onClick={() => filter('active')}
           className={activeButtonClass('active')}
         >Active</button>
    </li>
    <li>
         <button
           onClick = {()=>filter('complited')}
           className={activeButtonClass('complited')}
         >Completed</button>
    </li>
  </ul>

  }
}
