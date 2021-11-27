import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Tasklist from './tasks/TaskList';
import Footer from './Footer';



const App = () => {
    const toDoData = [
        { label: 'drink tea', status: true, important: false, date: new Date('November 26, 2021 03:24:00') },
        { label: 'drink coffee', status: false, important: false, date: new Date('November 26, 2021 03:24:00') },
        { label: 'learn react', status: true, important:true, date: new Date('November 26, 2021 03:24:00') }
    ]
    return <section className='todoapp'>
        <Header />
        <section className='main'>
            <Tasklist toDoItem={toDoData }/>
        </section>
        <Footer/>
    </section>
}
   

        



ReactDOM.render(<App/>, document.querySelector('body'))


