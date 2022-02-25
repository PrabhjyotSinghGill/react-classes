import React, { Component } from 'react'
import './App.css';
import Todos from "./components/Todos"


class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:'1jasgbgvwjvsvsv',
        completed:false
      },
      {
        id:2,
        title:'2jasgbgvwjvsvsv',
        completed:false
      },
      {
        id:3,
        title:'3jasgbgvwjvsvsv',
        completed:false
      }
    ]
  }

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <Todos todos={this.state.todos}></Todos>
      </div>
    )
  }
}

export default App;
