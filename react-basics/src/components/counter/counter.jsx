import React, { useState } from "react";
import "./counter.css";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 10%;
    color: #ccc;
    border: 2px solid #777;
    margin: 0.5em;
    padding: 0.25em;
    transition: 0.5s all ease-out;
    &:hover {
      background-color: #ccc;
      color: white;
    }
  `;

  return [
    <div>
      <p className="tagStyle">
        you clicked {count} times
      </p>
      <Button onClick={() => setCount(count + 1)}>
        Submit
      </Button>
      <input
        name="name"
        value={name}
        onChange={handleChange}
      />
    </div>,
  ];
};

export default Counter;
