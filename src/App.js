import React, { Component } from 'react'
import './App.css';
import Todos from "./components/Todos"
import Header from "./components/layout/Header"

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
//Delete Todo
delTodo = (id) =>{
  this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]});
}

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <Header></Header>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
      </div>
    )
  }
}

export default App;
