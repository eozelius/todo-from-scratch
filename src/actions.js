/*
  Todo Shape
  {
    todos: [
      {
        id: 1,
        text: 'asdf',
        completed: boolean
      },
      ...
    ]
  }
*/

export const CREATE_TODO = 'CREATE_TODO'
export function createTodo(text){
  return { 
    type: CREATE_TODO,
    text: text
  }
}

export const TOGGLE_COMPLETE = 'COMPLETE_TODO'
export function completeTodo(id){
  return {
    type: TOGGLE_COMPLETE,
    id: id
  }
}

export const DELETE_TODO = 'DELETE_TODO'
export function deleteTodo(id){
  return {
    type: DELETE_TODO,
    id: id
  }
}
