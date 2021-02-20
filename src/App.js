// Referencing Week 19 Activities 16 and 18
// Referencing work from Lanchi Pham: https://github.com/lpham2525/directory

import React, { Component } from "react";

export default class App extends Component {
  state = {
    people: [],
    filterPeople: [],
    filterPerson: ""
  };

  componentDidMount() {
    console.log("mounted!");
    const data = fetch("https://randomuser.me/api/?results=10");
    data
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          people: response.results,
          filterPeople: response.results
        });
        console.log(this.state.people);
        console.log(this.state.filterPerson);
      });
  }

  componentWillUnmount() {
    console.log("I will unmount");
  }

  // Takes arguments from people array and compares alphabetically
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
    console.log(this.state);
  };

  handleInputChange = (event) => {
    this.setState({ filterPerson: event.target.value });
  };

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  handleFilter = (event) => {
    let people = this.state.people;

    const found = people.filter((person) =>
      person.email.includes(this.state.filterPerson)
    );

    console.log(found);
    this.setState({ filterPeople: found });
    console.log(people);
    // console.log(this.state);
  };

  handleUndo = (event) => {
    let people = this.state.people;

    console.log(people);
    this.setState({ filterPeople: this.state.people });
  };

  // Notes for Jim
  // 1 Avoid overwriting array with new list.
  // 2 have two set states: one for the filtered list, one for the regular list?

  render() {
    return (
      <div className="App">
        <h1>Employee directory</h1>
        <input
          type="text"
          value={this.state.filterPerson}
          onChange={this.handleInputChange}
        />
        <button
          type="button"
          onClick={this.handleFilter}
          className="btn btn-danger"
        >
          Filter
        </button>
        <button
          type="button"
          onClick={this.handleUndo}
          className="btn btn-success"
        >
          Undo Filter
        </button>
        <br />
        <button onClick={this.handleSort} className="btn btn-primary">
          Alphabetize email
        </button>
        <table border={1} people={this.state.filterPeople}>
          <tr>
            <th>Employee Emails</th>
          </tr>
          {this.state.filterPeople.map((person) => (
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
