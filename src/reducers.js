import connect from 'react-redux'
import { CREATE_TODO, TOGGLE_COMPLETE, DELETE_TODO } from './actions'

const defaultTodoState = {
  todos: []
}

function todoReducer(state = defaultTodoState, action){
  switch(action.type){
    case CREATE_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.text]
      })
      
    case TOGGLE_COMPLETE:
      return Object.assign({}, state, {
        todos: state.todos.map(t => t.id === action.id ? { ...t, completed: !t.completed } : t)
      })
    case DELETE_TODO:
      return Object.assign({}, ...state, {
        todos: state.todos.filter(t => t.id !== action.id)
      })
    default:
      return state
  }
}

export default connect(
  todoReducer
)