import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Tasklist from './tasks/TaskList';
import Task from './tasks/Task';
import Footer from './Footer';


class App extends React.Component{
    state = {
       toDoData: [
        { label: 'drink tea', id: 101,important: false, date: new Date('November 26, 2021 03:24:00') },
        { label: 'drink coffee', id: 102, important: true, date: new Date('November 26, 2021 03:24:00') },
        { label: 'learn react', id: 103, important:true, date: new Date('November 26, 2021 03:24:00') }
    ]
   }
   
    render() {
        console.log(<Task/>);
        return <section className='todoapp'>
        <Header />
        <section className='main'>
            <Tasklist toDoItem={this.state.toDoData }/>
        </section>
        <Footer/>
        </section>
        

    }
}

 
    

   

        



ReactDOM.render(<App/>, document.getElementById('root'))


