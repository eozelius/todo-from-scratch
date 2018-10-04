import React, { Component } from 'react';
import './App.css';
import rootReducer from './reducers'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import TodosContainer from './containers/TodosContainer'
import AddTodo from './containers/AddTodo'

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddTodo />
          <TodosContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
