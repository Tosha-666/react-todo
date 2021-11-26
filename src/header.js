import React from 'react';
import ReactDOM from 'react-dom';


const Header = () => {
    return <header className ="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus={true}></input>
    </header>
}
    


export default Header