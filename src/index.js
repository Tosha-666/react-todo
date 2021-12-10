import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Tasklist from './tasks/TaskList';
import Footer from './Footer';


class App extends React.Component{
    maxId = 100
    
    state = {
        toDoData: [ ]
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
            date: new Date(),
            checked:false
        }

        this.setState(({toDoData})=>{
            const newArr=[
                ...toDoData, newItem
            ]    
            return {
                toDoData: newArr
            }
        })
        
    }    
    onToggleDone = (id) => {
        this.setState(({ toDoData }) => {
            const doneId = toDoData.findIndex((el) => el.id === id)
            const oldItem = toDoData[doneId]
            
            const newItem ={...oldItem, done:!oldItem.done, checked:!oldItem.checked}
            const newArr = [
                ...toDoData.slice(0, doneId), newItem, ...toDoData.slice(doneId+1)
            ]
            // console.log(oldItem, doneId, newItem, newArr);
            return {
                toDoData:newArr
            }
        })
    }
    
    render() {
        const elseToDo = this.state.toDoData.length - this.state.toDoData.filter((el) => el.done).length
          return <section className='todoapp'>
            <Header
                addItem={this.addItem}/>
        <section className='main'>
                <Tasklist
                    toDoItem={this.state.toDoData}
                    onDestroyed={this.deleteItem}
                    onToggleDone={ this.onToggleDone}/>
        </section>
            <Footer
                elseToDo={ elseToDo}/>
        </section>
        

    }
}

ReactDOM.render(<App />, document.getElementById('root'))

// https://www.youtube.com/watch?v=8s6JmWC9LqQ


