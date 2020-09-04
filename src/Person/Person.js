import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div onClick={props.click} className="border">
      <h1>
        I am {props.name} and I am {Math.floor(Math.random() * 100)}
      </h1>
    </div>
  );
};

export default Person;
