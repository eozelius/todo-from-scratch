import React, { Component } from 'react';
import './App.css';
import rootReducer from './reducers'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import TodosContainer from './containers/TodosContainer'

const store = createStore(rootReducer)

console.log(store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodosContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
