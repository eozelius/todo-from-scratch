import { CREATE_TODO, TOGGLE_COMPLETE, DELETE_TODO } from './actions'
import { combineReducers } from 'redux'

const defaultTodoState = {
  todos: []
}

function todosReducer(state = defaultTodoState, action){
  switch(action.type){
    case CREATE_TODO:
      return {todos: [...state.todos, action.text]}
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

const rootReducer = combineReducers({
  todos: todosReducer
})

export default rootReducer