import React, { useEffect } from "react";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("use effect is called");
    setTimeout(() => {
      alert("hi !");
    }, 1000);
    return () => {
      console.log("clean up work starts");
    };
  }, []);

  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
      <button onClick={props.click}></button>
    </div>
  );
};

export default Cockpit;
