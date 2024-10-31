// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import AuthContainer from "./containers/AuthContainer";
// eslint-disable-next-line no-unused-vars
import ChatContainer from "./containers/ChatContainer";

export default class App extends Component {
  state = {
    token: null,
  };
  setToken = (token) => {
    this.setState({ token });
  };

  render() {
    return this.state.token ? (
      <ChatContainer token={this.state.token} setToken={this.state.setToken} />
    ) : (
      <AuthContainer setToken={this.setToken} />
    );
  }
}
