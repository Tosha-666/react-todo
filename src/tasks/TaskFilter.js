import React from 'react';


export default class TaskList extends React.Component{
  render() {
     return  <ul className="filters">
    <li>
      <button className="selected">All</button>
    </li>
    <li>
      <button>Active</button>
    </li>
    <li>
      <button>Completed</button>
    </li>
  </ul>

  }
}
