import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './Todo'

class App extends Component {
  render() {
    return (
      <div>
        <Todo/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));