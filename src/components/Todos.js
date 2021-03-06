import React, { Component } from 'react'
import TodoItem from "./TodoItem"
import PropTypes from "prop-types"

export default class Todos extends Component {
   
  render() {
    return (
        <div>
          {this.props.todos.map((todo) => (<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}></TodoItem>))}
        </div>
    )
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}