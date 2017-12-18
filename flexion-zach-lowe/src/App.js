import React, { Component } from 'react';
import Navvie from './Navvie'
import Form from './Form'

import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Navvie />
        <Form />
      </div>
      
    );
  }
}

export default App;
