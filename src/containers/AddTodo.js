import { connect } from 'react-redux'
import React, { Component } from 'react'
import { createTodo } from '../actions'


class AddTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createTodo(this.state.text)
    this.setState({
      text: ''
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      text: e.target.value
    })
  }

  render(){
    return (
      <div className='add-todo'>
        <form onSubmit={this.handleSubmit}>
          <label>Add a Todo</label><br/>
          <input onChange={this.handleChange} value={this.state.text} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = undefined
const mapDispatchToProps = dispatch => {
  return {
    createTodo: text => dispatch(createTodo(text))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)