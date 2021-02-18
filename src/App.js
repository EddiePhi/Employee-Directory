// Referencing Week 19 Activities 16 and 18
// Referencing work from Lanchi Pham: https://github.com/lpham2525/directory

import React, { Component } from "react";
// import Employee from "./components/Employee";

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
        console.log(this.state.people);
      });
  }

  componentWillUnmount() {
    console.log("I will unmount");
  }

  handleSort = () => {
    let people = this.state.people;
    people.sort((a, b) => {
      let emailA = a.email;
      let emailB = b.email;
      if (emailA < emailB) {
        return -1;
      }
      if (emailA > emailB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      people
    });
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSearch = (event) => {
    // event.preventDefault();
    console.log(event.target.value);
    let found = this.state.people.filter((person) => {
      if (event.target.value === person.name.first) {
        return person.email;
      }
    });
    this.setState({ employees: found });
  };

  //filtering: https://www.w3schools.com/jsref/jsref_filter.asp
  // handleSearchClick = () => {
  //   let people = this.state.people;

  //   people.filter();
  // };

  render() {
    return (
      <div className="App">
        <h1>Employee directory</h1>
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleInputChange}
        />
        <button
          type="button"
          onClick={this.handleSearch}
          className="btn btn-danger"
        >
          Search
        </button>
        <br />
        <button
          type="button"
          onClick={this.handleSearchClick}
          className="btn btn-success"
        >
          Filter above 18
        </button>
        <button onClick={this.handleSort} className="btn btn-primary">
          Sort by email
        </button>
        <table border={1}>
          <tr>
            <th>Employee Emails</th>
          </tr>
          {this.state.people.map((person) => (
            <tr>
              <td>
                <h5 key={person.email}>{person.email}</h5>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
