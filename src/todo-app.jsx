import React, { Component } from "react";
import Title from "./title";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
class TodoApp extends Component {
  state = {
    todos: [
      { id: 1, text: 'This is a simple todo list app written in React!' },
      { id: 2, text: 'Hover over todos and click on the `XX` to delete them!' },
      { id: 3, text: 'Add new todos if you like!' },
    ],
  }
  // Handler to add a todo
  addTodo = (todo) => {
    // your code here
  }
  // Handler to remove a todo
  removeTodo = (id) => {
    // your code here
  }
  render() {
    return (
      <div>
        <Title />
        <AddTodo handleAdd={this.addTodo} />
        <TodoList todos={this.state.todos} handleRemove={this.removeTodo} />
      </div>
    )
  }
}
export default TodoApp;