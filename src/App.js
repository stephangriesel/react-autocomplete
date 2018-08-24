import React, { Component } from 'react';
import './App.css';
import Autocomplete from './Components/Autocomplete';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Test Website',
          category: 'Test Category'
        },
        {
          title: 'Test Website 2',
          category: 'Test Category 2'
        },
        {
          title: 'Test Website 3',
          category: 'Test Category 3'
        }
      ]
    }
    
  }
  render() {
    return (
      <div className="App">
       My app
       <Autocomplete Autocomplete={this.state.projects} />
      </div>
    );
  }
}

export default App;
