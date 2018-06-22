import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: ""
    };
  }

  handleClick() {
    let copy = this.state.todos.slice();
    copy.push(this.state.input);
    this.setState({ todos: copy });
  }

  handleInputChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    let todos = this.state.todos.map(todo => {
      return <div className=""> {todo} </div>;
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todos</h1>
        </header>
        <input
          onChange={e => this.handleInputChange(e)}
          placeholder="New Todo"
        />
        <button onClick={() => this.handleClick()} type="button">
          Submit
        </button>
        <hr />
        {todos}
      </div>
    );
  }
}

export default App;
