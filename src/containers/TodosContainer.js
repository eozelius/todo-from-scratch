import { connect } from 'react-redux'
import TodoList from '../presentational/TodoList'

const mapStateToProps = state => {
  return state.todos
}

const mapDispatchToProps = undefined

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodosContainer