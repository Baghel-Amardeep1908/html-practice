import { Component } from "react";

class InputExample extends Component {
  state = {
    uName: "",
    uEmail: "",
    uCheck: "",
  };

  handleinput = (e) => {
    this.setState({ uName: e.target.value });
  };
  handleinput2 = (e) => {
    this.setState({ uEmail: e.target.value });
  };

  handleCheck = (e) => {
    this.setState({ uCheck: e.target.checked });
  };

  render() {
    return (
      <div>
        <div className="form-elements">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your full name"
            value={this.state.uName}
            onChange={this.handleinput}
          />
        </div>
        <div className="form-elements">
          <p>Name</p>
          <input
            type="email"
            placeholder="Enter your email address"
            value={this.state.uEmail}
            onChange={this.handleinput2}
          />
        </div>

        <div>
          <p>Name: {this.state.uName}</p>
          <p>Email: {this.state.uEmail}</p>
        </div>
        <input
          type="checkbox"
          checked={this.state.uCheck}
          onChange={this.handleCheck}
        />
        <p>Checked:{this.state.uCheck ? "Yes" : "No"}</p>
      </div>
    );
  }
}

export default InputExample;
