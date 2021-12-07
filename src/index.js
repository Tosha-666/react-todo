import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Tasklist from './tasks/TaskList';
import Footer from './Footer';


class App extends React.Component{
    maxId = 100
    state = {
        toDoData: [
            this.createtoDoItem('drink tea'),
            this.createtoDoItem('drink coffee'),
            this.createtoDoItem('have a lunch')
           ]
    }
    
    deleteItem = (id) => {
        this.setState(({ toDoData })=> {
            const delId = toDoData.findIndex((el) => el.id === id)
            const newArray = [...toDoData.slice(0, delId), ...toDoData.slice(delId+1)]
            return {toDoData: newArray}
        })
    }
    onItemAdded = (text) => {
        
    }    
    onToggleDone = (id) => {
        console.log('Done',id);
    }

    createtoDoItem (text) {
        return {
            label: text,
            id: this.maxId++,
            done: false,
            date:new Date()
       }
    }
    

    render() {
        return <section className='todoapp'>
            <Header
                onItemAdded={this.onItemAdded}/>
        <section className='main'>
                <Tasklist
                    toDoItem={this.state.toDoData}
                    onDestroyed={this.deleteItem}
                    onToggleDone={ this.onToggleDone}/>
        </section>
        <Footer/>
        </section>
        

    }
}

ReactDOM.render(<App/>, document.getElementById('root'))


