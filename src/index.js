import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Tasklist from './tasks/TaskList';
import Footer from './Footer';


class App extends React.Component{
    maxId = 100
    state = {
        toDoData: [
            
           ]
    }
    
    deleteItem = (id) => {
        this.setState(({ toDoData })=> {
            const delId = toDoData.findIndex((el) => el.id === id)
            const newArray = [...toDoData.slice(0, delId), ...toDoData.slice(delId+1)]
            return {toDoData: newArray}
        })
    }
    addItem = (text) => {
        const newItem={
            label: text,
            id: this.maxId++,
            done: false,
            date:new Date()
        }

        this.setState(({toDoData})=>{
            const newArr=[
                ...toDoData, newItem
            ]    
            return{toDoData:newArr}  
         })
    }    
    onToggleDone = (id) => {
        console.log('Done',id);
    }

    // createtoDoItem (text) {
    //     return {
    //         label: text,
    //         id: this.maxId++,
    //         done: false,
    //         date:new Date()
    //    }
    // }
    

    render() {
        return <section className='todoapp'>
            <Header
                addItem={this.addItem}/>
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


