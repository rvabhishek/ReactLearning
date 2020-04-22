import React, { Component } from 'react';
class AddTodo extends Component {
  state = {
    todoText: '',
  }
  handleChange = (event) => {
    // your code here
  }
  handleSubmit = () => {
    // your code here
  }
  render() {
    return (
      <div className="row">
        <input
          type="text"
          value={this.state.todoText}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> +</button>
      </div>
    )
  }
}
export default AddTodo;