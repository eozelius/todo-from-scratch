import { createTodo } from '../actions'
import { connect } from 'react-redux'
import TodoList from '../presentational/TodoList'

const mapStateToProps = state => {
  return state.todos
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(createTodo(text))
    }
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodosContainer