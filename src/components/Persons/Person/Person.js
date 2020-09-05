import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className="border">
        <h1 onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age}
        </h1>
        <input onChange={this.props.change} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
