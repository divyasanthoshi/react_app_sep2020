import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    names: ["disha", "divya", "suma", "anasuya", "anushka"],
    showPersons: false,
  };

  clickHandler = () => {
    this.setState({ names: ["dany", "disha", "diamond", "sudheer"] });
  };

  getValue = (event) => {
    console.log(event.target.value);
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.togglePersonsHandler}></button>
        {this.state.showPersons &&
          this.state.names.map((name, index) => {
            return <Person name={name} key={index} />;
          })}
      </div>
    );
  }
}

export default App;
