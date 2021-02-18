//Example of API requests with specific search conditions from API

import React, { Component } from "react";
import "./styles.css";
// https://randomuser.me/documentation#errors

export default class App extends Component {
  state = {
    people: [],
    search: ""
  };

  componentDidMount() {
    console.log("mounted!");
    const data = fetch("https://randomuser.me/api/?results=10");
    data
      .then((response) => response.json())
      .then((response) => {
        this.setState({ people: response.results });
      });
  }

  componentWillUnmount() {
    console.log("I will unmount");
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSearchClick = () => {
    const search = this.state.search;
    console.log(search)
    const data = fetch(`https://randomuser.me/api/?gender=${search}`);
    data
      .then((response) => response.json())
      .then((response) => {
        this.setState({ people: response.results });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleInputChange}
        />
        <button type="button" onClick={this.handleSearchClick}>Search</button>
        {this.state.people.map((person) => (
          <h1 key={person.email}>{person.email}</h1>
        ))}
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}
