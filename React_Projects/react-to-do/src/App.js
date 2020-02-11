import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { description: "Run the Cats", isCompleted: false },
        { description: "Delouse Baby", isCompleted: false },
        { description: "Feed the Dowg", isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

// 2. Define a deleteTodo method on the App component. This method should call `this.setState()` and pass it a new array that doesn't have the to-do item being deleted. Consider using the `.filter()` array method to accomplish this without mutating state – do not use .splice(), which is a mutable method, unless making a copy of the array first.

  deleteTodo = (index) => {
    const filteredTodos = this.state.todos.filter((todo, i) => i !==index)
    this.setState({ todos : filteredTodos });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };

    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

// 3. Pass the deleteTodo method to the ToDo component as a prop. Check
  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteTodo={ () => this.deleteTodo(index)} />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
