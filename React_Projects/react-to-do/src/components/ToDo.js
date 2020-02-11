import React, { Component } from 'react';

// 1. Add a delete button to the ToDo component. Check

// 4. Add an onClick event listener to the delete button, and have it call deleteTodo, passing it the index of the to-do. Check
class ToDo extends Component {

  render() {
    return (
      <li>
        <input
          type='checkbox'
          checked={ this.props.isCompleted }
          onChange={ this.props.toggleComplete }
        />
        <span>{ this.props.description }</span>
        <button onClick={this.props.deleteTodo}>
          Del
        </button>
      </li>
    );
  }
}

export default ToDo;
