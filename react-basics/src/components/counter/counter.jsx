import React, { useState } from "react";
import "./counter.css";
import Button from "./ButtonStyle";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

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
        onFocus={() =>
          console.log("input is focused")
        }
        onBlur={() => console.log("input blured")}
      />
    </div>,
  ];
};

export default Counter;
