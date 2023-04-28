import React from "react";
const Welcome = (props) => {
  return [<div>{props.children}</div>];
};

const Website = (props) => {
  return [
    <div>
      <Welcome>
        <h1>
          Welcome to React-dev By Tech
          Titans
        </h1>
        <h2>Test</h2>
      </Welcome>

      <h2>Persiajs.dev</h2>
      <p onClick={props.handler}>
        My name is {props.name} and I am{" "}
        {props.age} years old
      </p>
    </div>,
  ];
};

export default Website;
