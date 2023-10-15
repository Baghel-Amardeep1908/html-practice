import { Component } from "react";

class Todo extends Component {
  state = { todoVal: "" };
  //addTodo = [];
  handleChange = (e) => {
    this.setState({ todoVal: e.target.value });
  };

  addTodoLi = () => {
    setTimeout(() => {
      this.setState({
        addTodo: this.addTodo.push(this.state.todoVal),
        todoVal: "",
      });
    }, 5000);

    this.addTodo.push(this.state.todoVal);
  };

  render() {
    console.log(this.state, this.addTodo);
    return (
      <div>
        <h1>Todo with Class Component</h1>
        <input
          type="text"
          value={this.state.todoVal}
          onChange={this.handleChange}
        />

        <button onClick={this.addTodoLi}>Add Todo</button>
        <ol>
          {this.addTodo.map((item) => (
            <>
              <li>{item}</li>
            </>
          ))}
        </ol>
      </div>
    );
  }
}
export default Todo;
