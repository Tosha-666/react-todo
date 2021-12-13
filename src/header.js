import React from 'react';



class Header extends React.Component  {
    state = { value: '' }
   
    addItem=this.props.addItem
        onSubmiteForm = (e) => {
        e.preventDefault()
        this.addItem(this.state.value);
        this.setState({
            value:''
        })
    }
    onLabelChange = (e) => {
        this.setState({
            value:e.target.value
        })
    }
    
    render() {
         return <header className ="header">
             <form
                 className = "header-form"
                 onSubmit={this.onSubmiteForm}>
                 
                 <h1>todos</h1>
                 <input className="new-todo"
                placeholder="What needs to be done?"
                autoFocus={true}
                value={this.state.value}
                onChange = {this.onLabelChange}>
                 
                 </input>
            </form>
             
    </header>
    }
   
}
    


export default Header