import React from 'react'
import PropTypes from 'prop-types'


export default class EditItem extends React.Component {
  static defaultProps = {
    editForm: () => { },
    label: () => { }
  }

  static propTypes = {
    editForm: PropTypes.func,
    label: PropTypes.func
  }

  editForm = this.props.editForm

  label = this.props.label

  state = { value:  this.label  }
   
  onSubmiteForm = (e) => {
    e.preventDefault()
    this.editForm(this.state.value)

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

