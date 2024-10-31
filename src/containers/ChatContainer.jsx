/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Navbar from "../components/Navbar";
import { queryAI, logout } from "../utils/api";

export default class App extends Component {
  state = {
    messages: [],
    loading: false,
    error: null,
    query: "",
  };

  handleQuery = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.setState({ loading: true, error: null });
    queryAI({ query }, this.props.token)
      .then((res) => {
        this.setState({
          messages: [...this.state.messages, { query, data: res }],
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
          query: "",
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleLogout = () => {
    logout(this.props.token)
      .then(() => {
        this.props.setToken(null);
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
    localStorage.removeItem("token");
    window.location.reload();
  };
  render() {
    return (
      <div>
        <Navbar setToken={this.props.setToken} logout={this.handleLogout} />
        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.data.data}
            query={message.query}
          />
        ))}
        <ChatInput onChange={this.handleChange} onSubmit={this.handleQuery} />
      </div>
    );
  }
}
