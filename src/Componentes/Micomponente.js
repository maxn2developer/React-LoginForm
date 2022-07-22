import React, { Component } from "react";

class Micomponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
    console.log(this.state.username);
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }
  handleSubmit(event) {
    //backtick must we have use as like bellow. not double or single qoute.
    alert(
      `a user and password was submitted   ${this.state.username}  and   ${this.state.password}. `
    );
    event.preventDefault();
    console.log(this.state);
    this.setState({
      password: "",
      username: ""
    });
  }

  render() {
    return (
      <div className="loginform">
        <form onSubmit={this.handleSubmit}>
          <input
            id="username"
            type="text"
            placeholder="User name"
            value={this.state.username}
            onChange={this.handleChangeUsername}
          />
          <br />
          <br />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <br />
          <br />
          <button> Submit your form</button>
        </form>
      </div>
    );
  }
}

export default Micomponente;
