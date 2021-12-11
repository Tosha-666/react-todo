import { fi } from 'date-fns/locale';
import React from 'react';


export default class TaskList extends React.Component{
  
  // handleExactElem = (e, filt) => {
  //   const { activeButtonClass, filter } = this.props
  //   filter(filt)
  //   activeButtonClass(e)
  // }
  
  render() {
    const { filter, activeButtonClass } = this.props


   

    
     return  <ul className="filters">
    <li>
         <button
          // className={activeButtonClass}
          onClick={() => filter('all')}
          // onChange={}
          //  onClick={this.handleExactElem(e,'all')}

         >All</button>
    </li>
    <li>
         <button
           onClick={() => filter('active')}
          //  onClick={(e)=>activeButtonClass(e)}
           
         >Active</button>
    </li>
    <li>
         <button
           onClick = {()=>filter('complited')}
          //  onClick={(e)=>activeButtonClass(e)}
           
         >Completed</button>
    </li>
  </ul>

  }
}
