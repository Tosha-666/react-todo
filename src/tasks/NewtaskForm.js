import React from 'react';


export default class EditItem extends React.Component {
    state = { value: '' }
    addItem=this.props.addItem
    onSubmiteForm = (e) => {
        e.preventDefault()
        this.addItem(this.state.value, );
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
        return <form
            onSubmit={this.onSubmiteForm}>
            
          <input
            type="text"
            className="edit"
            value={this.state.value}
                 
            onChange = {this.onLabelChange}/>
      </form>
      }
      

          
}

