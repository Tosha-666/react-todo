import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Tasklist from './tasks/TaskList';
import Footer from './Footer';



const MainSection = (
    <section className = 'todoapp'>
        <Header />
        <section className='main'>
             <Tasklist/>
        </section>
        <Footer/>
    </section>

        

)

ReactDOM.render(MainSection, document.querySelector('body'))


