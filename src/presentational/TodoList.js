import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoList extends Component {
  render(){
    const todos = this.props.todos.map((t, i) => <li key={i}>{t}</li>)
    
    return (
      <div className='todoList'>
        <ul>{todos}</ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array
}

export default TodoList