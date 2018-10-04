import React, { Component } from 'react'

class TodoList extends Component {
  render(){
    console.log(this.props.todos)
    
    const todos = this.props.todos.map(t => `<li>${t.text.toString()}</li>`)
    
    return (
      <div className='todoList'>
        <ul>{todos}</ul>
      </div>
    )
  }
}

export default TodoList