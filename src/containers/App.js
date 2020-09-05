import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/auxiliary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("in the constructor");
    this.state = {
      persons: [
        { id: 1, name: "divya", age: 29 },
        { id: 2, name: "disha", age: 23 },
        { id: 3, name: "James", age: 30 },
      ],
      showPersons: false,
      showCockPit: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("in getDerivedStateFromProps hook");
    return state;
  }

  nameChangeHandler = (event, id) => {
    const index = this.state.persons.findIndex((person) => person.id === id);
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
    console.log(this.state.showPersons);
  };

  deletePersonHandler = (id) => {
    const persons = this.state.persons.filter((person) => person.id !== id);
    this.setState({
      persons: persons,
    });
  };

  componentDidMount() {
    console.log("the component mounted");
  }

  render() {
    console.log(this.state.showPersons);
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockPit: false });
          }}
        ></button>
        {this.state.showCockPit ? (
          <Cockpit title={this.props.title} click={this.togglePersonsHandler} />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default App;
