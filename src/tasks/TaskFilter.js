import React from 'react'
import PropTypes from 'prop-types'


export default class TaskList extends React.Component{
  static defaultProps = {
    filter: () => { },
    activeButtonClass: () => { }
  }
  static propTypes = {
    filter: PropTypes.func,
    activeButtonClass: PropTypes.func
  }
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
