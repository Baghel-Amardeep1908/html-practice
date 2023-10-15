import { Component } from "react";

class Todo extends Component {
  state = { todoVal: "", arrTodo: [] };

  handleChange = (e) => {
    this.setState({ todoVal: e.target.value });
  };
  addTodo = () => {
    let obj = { value: this.state.todoVal, id: Date.now() };
    this.setState({ arrTodo: this.state.arrTodo.concat(obj) });
    this.setState({ todoVal: "" });
  };

  // To Delete Todo Item
  todoDelete = (d) => {
    //d.stopPropagation();
    this.setState({
      arrTodo: this.state.arrTodo.filter((elem) => elem.id !== d),
    });
    console.log("delete");
  };
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Enter Todo"
          value={this.state.todoVal}
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo}>Add Todo</button>

        <div>
          {this.state.arrTodo.map((item) => (
            <>
              <div>
                <input type="checkbox" />
                <span>{item.value}</span>
                <button onClick={() => this.todoDelete(item.id)}>Delete</button>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}
export default Todo;
