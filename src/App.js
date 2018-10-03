import React, { Component } from 'react';
import './App.css';
import rootReducer from './reducers' // 0
import { createStore} from 'redux' // 0
import { Provider } from 'react-redux' // 0

const store = createStore(rootReducer) // 1

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          
        </div>
      </Provider>
    );
  }
}

export default App;
