import React from "react";
import axios from "axios";
import "./App.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then((response) => {
        console.log("Loaded todos:", response.data.data);
        this.setState({
          todos: response.data.data,
        });
      })
      .catch((e) => console.log("Error : ", e));
  }

  handleAddTodo = (value) => {
    const todoToDelete = this.state.todos[index];
    console.log("Deleting todo:", todoToDelete);
    axios.delete(`/api/todos/${todoToDelete._id}`)
    .then(() => {
      const newTodos = this.state.todos.filter((_, i) => i !== index);
      this.setState({ todos: newTodos });
    })
    .catch((e) => console.log("Error deleting todo: ", e));
  };
  
  handleDeleteTodo = (index) => {
    const todoToDelete = this.state.todos[index];
    axios.delete(`/api/todos/${todoToDelete._id}`)
      .then(() => {
        const newTodos = this.state.todos.filter((_, i) => i !== index);
        this.setState({ todos: newTodos });
      })
      .catch((e) => console.log("Error deleting todo: ", e));
  };

  render() {
    return (
      <div className="App container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 offset-md-2">
              <div className="header-wrapper">
                <h1>TODO or not TODO</h1>
                <span>A TODO app that lets you break promises</span>
              </div>
              <div className="todo-app">
                <AddTodo handleAddTodo={this.handleAddTodo} />
                <TodoList todos={this.state.todos} onDelete={this.handleDeleteTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
