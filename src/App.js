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
        completed:true
      },
      {
        id:3,
        title:'3jasgbgvwjvsvsv',
        completed:false
      }
    ]
  }
  markComplete = (id) =>{
    this.setState({
      todos:this.state.todos.map(todo =>{
        if(todo.id === id ){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete}></Todos>
      </div>
    )
  }
}

export default App;
